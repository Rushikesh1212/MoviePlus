import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity,Text} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {useSelector,useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const CommonHeader = (props) => {
  const store = useSelector(store => ({
    userDetails:store.userDetails,
  }));
  const dispatch = useDispatch();

  const [username,setUsername]=useState();
  useEffect(() => {
    AsyncStorage.getItem('user_data').then((keyValue) => {
      console.log('keyValue',keyValue);
      setUsername(JSON.parse(keyValue.username))
    }, (error) => {
      console.log(error) //Display error
    });
   },[1]);
  return (
      <Header
        containerStyle={styles.headerContainer}
        placement="center"
        leftComponent={<Text style={{width:100,fontSize:15}}>For {username?username:"User"}</Text>}
        backgroundColor="#83EEFF"
      />
  );
};
const screenDimensions = Dimensions.get('window');
const styles = StyleSheet.create({
  headerContainer: {
    // padding: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    height: screenDimensions.height * 0.09,

  },
});
// export default withTheme(HeaderBar)