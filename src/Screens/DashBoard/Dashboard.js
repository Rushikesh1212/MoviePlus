import 'react-native-gesture-handler'
import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,Dimensions,ScrollView,ActivityIndicator,View,Text
} from 'react-native';

import {BannerCarousel} from '../../ScreenComponents/BannerCarousel/BannerCarousel';
import FlatListView from '../../ScreenComponents/FlatListView/FlatListView';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SearchBar } from '@rneui/themed';
import {URL, BEARER_TOEKN} from '@env'
import {useSelector, useDispatch} from 'react-redux';
import {getMovieList,getWatchList} from '../../redux/MovieList/actions';
import {CommonHeader} from '../../ScreenComponents/Header/Header';

const fetch = require('node-fetch');    

const options = {method: 'GET', headers: {accept: 'application/json',Authorization:BEARER_TOEKN}};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



function Dashboard (props){
  const isDarkMode = useColorScheme() === 'dark';
const [bannerList,setBannerList]=useState([]);
const [watchList,setWatchList]=useState([]);
const [searchList,setSearchList]=useState([]);
const [search,setUpdate]=useState('');
const dispatch = useDispatch();


  useEffect(() => {
   getBannerList();
   getWatchList();
  },[true]);

  const getBannerList =()=>{
    fetch(URL+'/trending/movie/day?language=en-US', options)
    .then(res => res.json())
    .then(json => {
      setBannerList(json.results),
      dispatch(
        getMovieList(json.results),
      )
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



const updateSearch=(search)=>{
  setUpdate(search)
    const url = URL+'/search/movie?query='+search+'&include_adult=false&language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: BEARER_TOEKN
      }
    };
    fetch(url, options)
    .then(res => res.json())
    .then(json => setSearchList(json.results))
    .catch(err => console.error('error:' + err));
}

console.log("searchList",searchList.length);

  return (
    <View style={{flex:1}}> 
    {/* <CommonHeader />  */}
      <SearchBar
        placeholder="Search Movie..."
        onChangeText={updateSearch}
        value={search}
      />
    <ScrollView style={{flex:1,backgroundColor:"#191601"}}>
       {searchList && searchList.length>0 ?
         <FlatListView 
         headText="Search Movies"
         list={searchList}
         props={props}
       />
       :
        bannerList.length >0 ? 
      <View>
       <BannerCarousel  
            list={bannerList}
          />
        <FlatListView 
            headText="Watchlist"
            list={watchList}
          props={props}

        />
        <FlatListView 
          headText="All Movies"
          list={bannerList}
          props={props}
        />
        </View>:
        <View style={{flex:1,justifyContent:'center'}}>
          <ActivityIndicator/>
          </View>
        }
    </ScrollView>
    </View>
  );
 }

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    marginTop: 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems:'center',
    width:100,
    marginVertical: 8,
    marginHorizontal: 16,
  },
 
  highlight: {
    fontWeight: '700',
  },
  
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  title: {
    fontSize: 32,
  },
});

export default Dashboard;
