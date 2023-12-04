/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Design and devloped by Rushikesh Dipak Salunkhe
 * @format
 */
import 'react-native-gesture-handler';
import React,{useEffect,useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Provider,connect} from 'react-redux';
import store from './src/redux/store';
import {MenuProvider} from 'react-native-popup-menu';
import {DimensionProvider} from './src/hooks/DimensionProvider';
import {ThemeProvider} from './src/Provider/ThemeProvider';
import {Theme} from './src/constants';
import Routes from './src/config/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider as ProviderPaper, Snackbar} from 'react-native-paper';
import {setToast} from './src/redux/AppState';
type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [token, setToken] = useState('');
  const [toast, setAppToast] = React.useState(null);
  useEffect(() => {
    const unSubscribe = store.subscribe(() => {
      setToken(store.getState()?.userReducer?.token || '');
      setAppToast(store.getState()?.appStateReducer?.toastState);
      return () => {
        unSubscribe();
      };
    });
  }, []);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <ProviderPaper>
      <MenuProvider>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <ThemeProvider theme={Theme}>
          <DimensionProvider>
              {/* <AppContainer /> */}
              <Routes />
              <ToastProvider toast={toast} />
          </DimensionProvider>
        </ThemeProvider>
      </MenuProvider>
      </ProviderPaper>
  </Provider>
  );
}



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const ToastProviderComponent = (props) => {
  return (
    <Snackbar
      visible={!!props.toast}
      style={{backgroundColor: props.toast?.color}}
      duration={1000}
      onDismiss={() => props.setToast(null)}>
      {props.toast?.text}
    </Snackbar>
  );
};

const ToastProvider = connect(null, (dispatch) => ({
  setToast: (payload) => dispatch(setToast(payload)),
}))(ToastProviderComponent);

export default App;
