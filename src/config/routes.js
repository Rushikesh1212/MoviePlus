import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from '../Screens/DashBoard/Dashboard';
import MovideDetail from '../Screens/MovieDetail/MovideDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';
import { Login } from '../Screens/Login/Login';
import { SignUp } from '../Screens/SignUp/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from '../Screens/Profile/Profile';
const Stack =  createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const header = ()=>({
  title : 'For Rushikesh',
  headerStyle : {backgroundColor: 'lightblue',},
  headerLeft: () => null,
  headerRight: ({ color, size })=>{
    <MaterialCommunityIcons name="home" color={'green'} size={size} />
  }
})

function AppStack() {
  return (
      <Stack.Navigator  >
       <Stack.Screen 
            name='Login' 
            component={Login} 
            options={{headerShown:false}}
          /> 
           <Stack.Screen 
            name='SignUp' 
            component={SignUp} 
            options={{headerShown:false}}
          /> 
            <Stack.Screen 
            name='Tab' 
            component={AppBottomStack} 
            options={header()}
          />
           <Stack.Screen
            name='MovieDetail'
            component={MovideDetail}
            options={header()}
          />
         
      </Stack.Navigator>
  )

}

function AppBottomStack() {
  return (
      <Tab.Navigator >
          <Tab.Screen
            name='Dashboard'
            component={Dashboard}
            options={{
              headerShown: false,

              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
              name='Profile'
              component={Profile}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="user" color={color} size={size} />
                ),
              }}
          /> 
      </Tab.Navigator>
  )
}

function Routes(){
  return(
    <NavigationContainer >
      <AppStack/>
  </NavigationContainer>

  )
}

export default Routes;