import {Formik} from  'formik';
import React, {useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch,useSelector} from 'react-redux';
import * as Yup from 'yup';
import {FormButton} from '../../ScreenComponents/FormButton/FormButton.js';
import {FormInput} from '../../ScreenComponents/FormInput/FormInput.js';
import {colors, commonStyle} from '../../config/commonStyle.js';
import {withCustomerToaster} from '../../redux/AppState.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL, BEARER_TOEKN} from '@env'

const fetch = require('node-fetch');
const window = Dimensions.get('window');

//wrap component with withCustomerToaster hoc
export const Login = withCustomerToaster((props) => {
  const [btnLoading, setLoading] = useState(false);
  const {setToast,navigation} = props; 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: BEARER_TOEKN
    }
  };

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    password: Yup.string().required('This field is required')
  });


  const LoginToDashboard=(data)=>{
    AsyncStorage.getItem('user_data').then((keyValue) => {
      var userData = JSON.parse(keyValue);
      console.log("userData",userData);
      console.log("data.name",data.name);
      if(userData.username === data.name && data.password === userData.password){
        fetch(URL+'/authentication/token/new', options)
        .then(res => res.json())
        .then(json => {
            fetch( URL+'/authentication/guest_session/new', options)
            .then(res => res.json())
            .then(json => {
              AsyncStorage.setItem('guest_session_id',json.guest_session_id);
              setToast({text: 'Logged in successfully ', color: colors.success}); 
              navigation.navigate('Tab');
            })
        })
        .catch(err => setToast({text: 'Something went wrong.', color: colors.errorText}));
      }else{
        console.log("Not matched")
        setToast({text: 'Username or password not matched', color: colors.danger}); 
      }
   
      }, (error) => {
      console.log(error) //Display error
    });
  }


  return (
    <React.Fragment>
      <Formik
        onSubmit={(data) => {
          LoginToDashboard(data)
        }}
        validationSchema={LoginSchema}
        initialValues={{    
          name: '',
          password: '',
        }}>
        {(formProps) => (
          <FormBody
            btnLoading={btnLoading}
            navigation={navigation}
            {...formProps}
          />
        )}
      </Formik>
    </React.Fragment>
  );
});

const FormBody = (props) => {
  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    btnLoading,
    setFieldValue,
    navigation,
  } = props;
  const [showPassword, togglePassword] = useState(false);
  return (
    <React.Fragment>
      <View style={commonStyle.container}>
        <Image
          style={{width: 250, alignSelf: 'center'}}
          source={require('../../images/MoviePlus.png')}
          resizeMode="contain"
        />
        <View style={commonStyle.modalView}>
          <FormInput
            labelName={'Username'}
            placeholder={"Enter Username..."}
            onChangeText={handleChange('name')}
            required={true}
            name="name"
            errors={errors}
            touched={touched}
            iconName={'account'}
            iconType={'material-community'}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <FormInput
            labelName={'Password'}
            placeholder={'Enter Password'}
            onChangeText={handleChange('password')}
            errors={errors}
            name="password"
            required={true}
            touched={touched}
            iconName={'lock'}
            iconType={'material-community'}
            rightIcon={
              <TouchableOpacity
                style={{paddingHorizontal: '5%'}}
                onPress={() => togglePassword(!showPassword)}>
                {showPassword ? (
                  <Icon name="eye" type="entypo" size={18} color={"#fff"}/>
                ) : (
                  <Icon name="eye-with-line" type="entypo" size={18} color={"#fff"} />
                )}
              </TouchableOpacity>
            }
            secureTextEntry={!showPassword}
          />
          <FormButton
            title={'Log In'}
            onPress={handleSubmit}
            background={true}
            loading={btnLoading}
          />
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '3%',
                marginBottom: 25,
              },
            ]}>
            <Text style={commonStyle.linkLightText}>
              { "Don't have an account?"}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              >
              <Text style={commonStyle.linkText}>{" Sign Up"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};