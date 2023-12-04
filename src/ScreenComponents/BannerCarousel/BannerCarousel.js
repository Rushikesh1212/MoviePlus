/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  Text
  // FlatList
} from 'react-native';

import { Header,Icon,Image } from '@rneui/themed';
import Carousel from 'react-native-reanimated-carousel';
import { Button } from '@rneui/themed';
import {withCustomerToaster} from '../../redux/AppState.js';
import {colors, commonStyle} from '../../config/commonStyle.js';


const fetch = require('node-fetch');



const url = 'https://api.themoviedb.org/3/account/20763850/watchlist';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;




export const BannerCarousel= withCustomerToaster((props)=> {
 
  const {list,setToast}=props;
  console.log("setToast====>",setToast);

  const addToWatchList =(id)=>{
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWI1YmM5NDE0ZjFmNzIyNTA5NjkyZjhkNTVjMTYwZCIsInN1YiI6IjY1NjYyY2NlMTU2Y2M3MDEwY2IzN2E5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.98KBtr4U-XveTF0ZtT1mY4Zsrkepu-zQeW2sorb3SG4'
      },
      body: JSON.stringify({media_type: 'movie', media_id: id, watchlist: true})
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => setToast({text: 'Added To Watchlist', color: colors.success}) )
      .catch(err => console.error('error:' + err));
  }
  
  return (
    <SafeAreaView style={{height:height/1.7,alignItems:'center',marginTop:15}} >
      <Carousel
        loop
        width={width-30}
        height={height-30}
        autoPlay={true}
        data={list}
        scrollAnimationDuration={1000}
        style={{
         
        }}

        // onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({item,index }) => (
            <View
                style={{
                    borderWidth: 1,
                    justifyContent: 'center',
                }}
            >
                <Image
                  // source={}
                  source={{uri:'https://image.tmdb.org/t/p/w500'+item.poster_path}}
                  style={{ width: width-30,height:500,justifyContent:'flex-end',borderRadius:20}}
                  PlaceholderContent={<ActivityIndicator />}
                >
                  <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Button
                      title="Play"
                      loading={false}
                      loadingProps={{ size: 'small', color: 'white' }}
                      buttonStyle={{
                        backgroundColor: '#fff',
                        borderRadius: 5,
                      }}
                      titleStyle={{ fontWeight: 'bold', fontSize: 23,color:"#000" }}
                      containerStyle={{
                        height: 50,
                        width: 150,
                        marginVertical: 10,
                        marginRight:15,
                      }}
                      icon={{
                        name: 'play',
                        type: 'font-awesome',
                        size: 20,
                        color: 'black',
                      }}
                      onPress={() => console.log('aye')}
                    />

                    <Button
                      title="My List"
                      loading={false}
                      loadingProps={{ size: 'small', color: 'white' }}
                      buttonStyle={{
                        backgroundColor: "#191601",
                        borderRadius: 5,
                      }}
                      titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                      containerStyle={{
                        height: 50,
                        width: 150,
                        marginVertical: 10,
                        marginLeft:15,
                      }}
                      icon={{
                        name: 'plus',
                        type: 'font-awesome',
                        size: 20,
                        color: 'white',
                      }}
                      onPress={() => addToWatchList(item.id)}
                    />
                   </View>
                  </Image>
                
            </View>
        )}
    /> 
   
    </SafeAreaView>
  );
})


