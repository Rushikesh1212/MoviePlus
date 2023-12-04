/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,Dimensions,ScrollView
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { FlatList,GestureHandlerRootView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {getLocales} from 'react-native-localize';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import FlatListView from '../../ScreenComponents/FlatListView/FlatListView';


// import { Rating, AirbnbRating } from 'react-native-ratings';
 


import {Image } from '@rneui/themed';

const MovieDetail = (props: {
  id:'',
  navigation:'',
  routes : ''
}) => {
  const {navigation,route}=props;
  const {item}=route.params;
  const isDarkMode = useColorScheme() === 'dark';
  const store = useSelector((store) => ({
    movieList: store.movieList,
  }));;
  var {movieList} =store.movieList;  
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  console.log('movieList',movieList);
  
  return (
    <ScrollView style={{flex:1,backgroundColor:"#191601"}}>
        <View
            style={{
                borderWidth: 1,
            }}
            >
               <View style={{flexDirection:'row',position:"absolute",zIndex:1, alignSelf:'flex-end',padding:5,alignItems:"center"}}>
                    <MaterialCommunityIcons name="heart" color={'red'} size={20} />
                    <Text style={{color:"#fff",fontSize:20,fontWeight:'800'}}> {item.vote_average} / 10</Text>
                  </View>
                <Image
                  // source={}
                  source={{uri:'https://image.tmdb.org/t/p/w500'+item.poster_path}}
                  style={{ width: width,height:height/3,justifyContent:'flex-end',borderRadius:20,}}
                  PlaceholderContent={<ActivityIndicator />}
                  resizeMode='contain'
                >
                </Image>
            </View>
            <View style={{padding:15}}>
              <Text style={{color:"#fff",fontSize:20,fontWeight:'800'}}>{item.original_title}</Text>
              <Text style={{color:"#fff",fontSize:18,fontWeight:'800'}}>Released On {item.release_date}</Text>
              <Text style={{color:"#fff",fontSize:15,fontWeight:'800'}}>Language {item.Language}</Text>
              <Text style={{color:"#fff",fontSize:15}}>{item.overview}</Text>
            </View>
            {<FlatListView 
                headText="Similar Movies"
                list={movieList}
                props={props}
            />}
              </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    marginTop: 0,
    flex:1
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

export default MovieDetail;
