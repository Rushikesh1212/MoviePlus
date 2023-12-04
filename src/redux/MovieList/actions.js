import {SET_MOVIE_DETAILS,SET_LOADING,SET_WATCH_LIST} from './types';
import {Dispatch} from 'redux';
import Axios from 'axios';


export const getMovieList = (list) => {
  return async (dispatch, getState) => {
    try {
    console.log("list1",list);
        dispatch({
            type: SET_MOVIE_DETAILS,
            payload: list,
        });
    } catch (err) {
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }
  };
};


export const getWatchList = (list) => {
  return async (dispatch, getState) => {
    try {
    console.log("list1",list);
        dispatch({
            type: SET_WATCH_LIST,
            payload: list,
        });
    } catch (err) {
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }
  };
};