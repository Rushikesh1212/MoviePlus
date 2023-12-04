import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
// import userDetails from './user';
import {AppStateReducer} from './AppState';
import movieList from './MovieList/reducer';
const appReducer = combineReducers({
  movieList,
  appStateReducer: AppStateReducer,
});


const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk)),
);