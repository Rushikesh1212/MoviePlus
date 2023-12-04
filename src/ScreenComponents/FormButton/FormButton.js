import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import { colors, sizes }        from '../../config/commonStyle.js';
import {
  Text,
  
} from 'react-native';
export const FormButton = props => {
  const {title,background,loading,...rest} = props;
  return (
    <Button
      title           = {title}
      containerStyle  = {styles.containerStyle}  
      buttonStyle     = {background ? styles.buttonStyle : styles.buttonStyle1}
      titleStyle      = {background ? styles.titleStyle : styles.titleStyle1}
      loading         = {loading}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle:{
    width:'50%',
    alignSelf:"center",
    marginVertical:15,
  },
  buttonStyle:{
    backgroundColor:colors.theme,
    borderRadius:100
  },
   buttonStyle1:{
    backgroundColor:colors.white,
    borderRadius:100,
    borderWidth:1,
    borderColor:colors.theme,
    color:colors.theme
  },
  titleStyle:{
    color:colors.white
  },
  titleStyle1:{
    color:colors.theme
  }
  
});