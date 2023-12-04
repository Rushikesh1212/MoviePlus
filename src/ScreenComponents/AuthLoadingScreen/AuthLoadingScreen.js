import React, {Component, useEffect} from 'react';
import {ActivityIndicator, Alert, StatusBar, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {useNavigation} from '../../hooks/useNavigation';
import {SET_TOKEN} from '../../redux/user/types';
import {getUser} from '../../redux/user/actions';
import {getLanguage} from '../../redux/language/actions';
import Axios from 'axios';

export const AuthLoadingScreen = () => {
  useEffect(() => {
    _bootstrapAsync();
    fetchLanguage();
  }, []);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const fetchLanguage = () => {
    Axios.post('/get_languages')
      .then(async (res) => {
        if (res.data.result.success === 1) {
          dispatch({
            type: 'SET_LANGUGAGE_MASTER',
            payload: res.data.result.data,
          });
          const languageId = await AsyncStorage.getItem('languageId');
          dispatch(getLanguage(!!languageId ? languageId : '1'));
        }
      })
      .catch((err) => {
        console.log('langugage master err', err);
      });
  };
  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token');
    const id = await AsyncStorage.getItem('user_id');
    if (userToken) {
      goToApp(id, userToken);
    } else {
      navigation.navigate('App');
    }
  };
  goToApp = (id, token) => {
    dispatch({
      type: SET_TOKEN,
      payload: token,
    });
    dispatch(getUser(id, token));
    navigation.navigate('App');
  };
  return <ActivityIndicator />;
};