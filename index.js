/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import { LogBox } from "react-native"

// import {UseFetchProvider} from 'use-fetch-lib';
LogBox.ignoreAllLogs(true)
const RNRedux = () => (
    <Provider store={store}>
       <PaperProvider>
        <App />
       </PaperProvider> 
    </Provider>
  );
  AppRegistry.registerComponent(appName, () => RNRedux);
