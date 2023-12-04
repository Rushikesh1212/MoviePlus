import {
    SET_MOVIE_DETAILS,
    SET_WATCH_LIST
  } from './types';
  
  const initialUserState = {
    movieList : [],
    watchList : []
  };
  export default (state = initialUserState, {type, payload}) => {
    console.log("type",type);
    console.log("payload",payload);
    switch (type) {
      case SET_MOVIE_DETAILS:
        return {
          ...state,
          movieList : payload,
        };
        case SET_WATCH_LIST:
        return {
          ...state,
          watchList : payload,
        };
      default:
        return {...state};
    }
  };