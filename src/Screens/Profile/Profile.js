import 'react-native-gesture-handler'
import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,Dimensions,ScrollView,ActivityIndicator,View,Text
} from 'react-native';

import {BannerCarousel} from '../../ScreenComponents/BannerCarousel/BannerCarousel';
import FlatListView from '../../ScreenComponents/FlatListView/FlatListView';
import { SearchBar } from '@rneui/themed';
import {URL, BEARER_TOEKN} from '@env'
import {useSelector, useDispatch} from 'react-redux';
import {getMovieList} from '../../redux/MovieList/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native-elements';

const fetch = require('node-fetch');    

const options = {method: 'GET', headers: {accept: 'application/json',Authorization:BEARER_TOEKN}};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



function Profile (props){
  const isDarkMode = useColorScheme() === 'dark';
const [userData,setUserData]=useState([]);
const [watchList,setWatchList]=useState([]);

  useEffect(() => {
    getUserData();
    getWatchList();
  },[1]);

  const getUserData =()=>{
    AsyncStorage.getItem('user_data').then((keyValue) => {
        console.log("keyValue",keyValue);
        var userData = JSON.parse(keyValue);
        setUserData(userData)

    })
    .catch(err => console.error('error:' + err));
}

const getWatchList =()=>{
    fetch(URL+'/account/20763850/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    .then(res => res.json())
    .then(json => {
      setWatchList(json.results)
      // dispatch(
      //   getWatchList(json.results),
      // )
    })
    .catch(err => console.error('error:' + err));
  }


  return (
    <View style={{flex:1,backgroundColor:"#191601"}}> 
        <View style={{flex:0.4,alignItems:'center',padding:15}}>
            <Image
                style={{width: 100, height:100}}
                source={require('../../images/netflix_profile.jpeg')}
                resizeMode="contain"
            />
            <View style={{flexDirection:"row",flex:1,marginTop:15}}>
                <View style={{}}>
                    <Text style={styles.title}>Username </Text>
                    <Text style={styles.title}>Email Id </Text>
                    <Text style={styles.title}>Phone </Text>
                </View>
                <View style={{}}>
                    <Text style={styles.title}>: {userData.username}</Text>
                    <Text style={styles.title}>: {userData.email_id}</Text>
                    <Text style={styles.title}>: {userData.phone}</Text>
                </View>
            </View>
           
        </View>
        <FlatListView 
                headText="My Watchlist"
                list={watchList}
                 props={props}
            /> 
    </View>
  );
 }

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    color:"#fff",
  },
});

export default Profile;
