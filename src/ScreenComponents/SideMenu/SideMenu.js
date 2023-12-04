import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
// import {Dialog} from 'react-native-paper';
// import {SafeAreaView} from 'react-navigation';
// import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../config/commonStyle';
import {small} from '../../constants/Theme/index.js';
// import {GeneralModal} from '../../HOC/GeneralModal.js';
// import {useNavigation} from '../../hooks/useNavigation.js';
// import {getLanguage} from '../../redux/language/actions.js';
// import {AppText} from '../AppText.js';

const window = Dimensions.get('window');
export const SideMenu = (props) => {
  const {navigation}=props.navigation;
  console.log("props",props);
  return (
    <React.Fragment>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            isLoggedIn ? navigation.navigate('Profile') : toggleModal(true);
          }}
          style={{
            flexDirection: 'row',
            height: 100,
            margin: 20,
            borderBottomWidth: 1,
            alignItems: 'center',
          }}>
          <ImageBackground
            style={{height: 60, width: 60, borderRadius: 100}}
            source={require('../../images/user.jpeg')
            }
            imageStyle={{borderRadius: 100}}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontWeight: 'bold'}}>
              {'Welcome User'}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{marginLeft: 5}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 15,
            }}
            onPress={() => {
              toggleLanguageModal(true);
            }}>
            <View style={styles.iconContainer}>
              <Icon
                size={18}
                name="user"
                type="font-awesome"
                color={colors.theme}
              />
            </View>
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dashboard')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 15,
            }}>
            <View style={styles.iconContainer}>
              <Icon
                size={18}
                name="home"
                type="font-awesome"
                color={colors.theme}
              />
            </View>
            <Text>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('OutletList')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 15,
            }}>
            <View style={styles.iconContainer}>
              <Icon
                size={18}
                name="list"
                type="font-awesome"
                color={colors.theme}
              />
            </View>
            <Text>OuletList</Text>
          </TouchableOpacity>
          
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 15,
              }}>
              <View style={styles.iconContainer}>
                <Icon
                  size={18}
                  name="sign-in"
                  type="font-awesome"
                  color={colors.theme}
                />
              </View>
            <Text>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingTop: 15, marginLeft: 25}}>
          </TouchableOpacity>
        </View>
      </View>
     
      
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: '#fff',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginLeft: 25,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  topContainer: {
    backgroundColor: '#fff',
    width: '100%',
    // height: '30%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 0.8,
    borderLeftWidth: 0.8,
    borderRightWidth: 0.8,
    paddingVertical: `${small}%`,
  },
});