// import AsyncStorage  from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch,useSelector} from 'react-redux';
import * as Yup from 'yup';
import {FormButton} from '../../ScreenComponents/FormButton/FormButton.js';
import {FormInput} from '../../ScreenComponents/FormInput/FormInput.js';
import {commonStyle} from '../../config/commonStyle.js';
import {useNavigation} from '../../hooks/useNavigation.js';
// import {setToken, setUserDetails} from '../../redux/user/actions';
import {emailValidator,specialCharacterValidator,passwordValidator,mobileValidator} from '../../utils/validators.js';
import {withCustomerToaster} from '../../redux/AppState.js';
import {colors, sizes} from '../../config/commonStyle.js';
import {AppText} from '../../components/AppText.js';
import {getUser} from '../../redux/user/actions';
import { PhoneInput } from '../../ScreenComponents/PhoneInput/PhoneInput.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const fetch = require('node-fetch');


const window = Dimensions.get('window');


//wrap component with withCustomerToaster hoc
export const SignUp = withCustomerToaster((props) => {
    console.log('commonStyle props',props);
  const [btnLoading, setLoading] = useState(false);
  const [dialCode, setDialCode] = useState('91');
  const {setToast,navigation} = props; //setToast function bhetta
  const dispatch = useDispatch();
  const url = 'https://api.themoviedb.org/3/authentication/token/validate_with_login';

//   const navigation = useNavigation();
 

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
    .required('This field is required')
    .test(
      'special character test',
      ('This field cannot contain only special characters or numbers'),
      specialCharacterValidator,
    ),
  email_id: Yup.string()
    .required('This field is required')
    .test(
      'email validation test',
      ('Enter a valid email address'),
      emailValidator,
    ),
  phone: Yup.string()
    .required('This field is required')
    .test(
      'mobile validation test',
      ('Enter a valid mobile number'),
      mobileValidator,
    )
    ,
    password: Yup.string()
    .required('This field is required')
    .test(
      'password validation test',
      ('Minimum eight characters, at least one letter, one number and one special character'),
      passwordValidator,
    ),

  });
  return (
    <React.Fragment>
      <Formik
        onSubmit={(data) => {
            console.log("data",data);
            AsyncStorage.setItem('user_data',JSON.stringify(data));
            navigation.navigate('Login');
            setToast({text: 'Account created successfully ', color: colors.success}); 
        }}
        validationSchema={LoginSchema}
        initialValues={{
          username:'',
          phone:'',
          email_id: '',
          password: '',
        }}>
        {(formProps) => (
          <FormBody
            btnLoading={btnLoading}
            navigation={navigation}
            countryChange={(code) => setDialCode(code)}
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
    countryChange,
    setFieldError
  } = props;
  const [openModal, setModal] = useState(false);
  const [showPassword, togglePassword] = useState(false);
  const [image, setImage] = useState({profile_photo: '', image: ''});
  console.log("errors",errors);
//   const store = useSelector(store => ({
//     labels : store.labels.labels,
//   }));
  return (
    <React.Fragment>
      <View style={commonStyle.container}>
        {/* <View style={commonStyle.overlay} /> */}
        <Image
          style={{width: 250, alignSelf: 'center'}}
          source={require('../../images/MoviePlus.png')}
          resizeMode="contain"
        />
        <View style={commonStyle.modalView}>
          {/* <Text style={commonStyle.subHeaderText}>{store.labels.login_page_title}</Text> */}
          <FormInput
            labelName={'Username'}
            placeholder={"Enter Username..."}
            onChangeText={handleChange('username')}
            required={true}
            name="username"
            errors={errors}
            touched={touched}
            iconName={'account'}
            iconType={'material-community'}
            autoCapitalize="none"
            keyboardType="email-address"
          />
           <FormInput
            labelName={'Email'}
            placeholder={"Enter Email..."}
            onChangeText={handleChange('email_id')}
            required={true}
            name="email_id"
            errors={errors}
            touched={touched}
            iconName={'email'}
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
                  <Icon name="eye" type="entypo" size={18}  color="#fff"/>
                ) : (
                  <Icon name="eye-with-line" type="entypo" size={18} color="#fff" />
                )}
              </TouchableOpacity>
            }
            secureTextEntry={!showPassword}
          />
            <FormInput
            labelName={'Phone Number'}
            placeholder={'Enter phone number'}
            onChangeText={handleChange('phone')}
            errors={errors}
            name="phone"
            required={true}
            touched={touched}
            iconName={'phone'}
            iconType={'material-community'}
            autoCapitalize="none"
            keyboardType='numeric'
          />
            {/* <FormInput
            labelName={'Confirm Password'}
            placeholder={'Confirm Password'}
            onChangeText={handleChange('confirm_password')}
            errors={errors}
            name="confirm_password"
            required={true}
            touched={touched}
            iconName={'lock'}
            iconType={'material-community'}
            rightIcon={
              <TouchableOpacity
                style={{paddingHorizontal: '5%'}}
                onPress={() => togglePassword(!showPassword)}>
                {showPassword ? (
                  <Icon name="eye" type="entypo" size={18} />
                ) : (
                  <Icon name="eye-with-line" type="entypo" size={18} />
                )}
              </TouchableOpacity>
            }
            secureTextEntry={!showPassword}
          />     */}
             {/* <PhoneInput
            onNumberChange={(number, isValid) => {
              setFieldValue('phone', number);
              isValid
                ? setFieldError('phone', 'Enter valid number')
                : setFieldError('phone', '');
            }}
            name="phone"
            placeholder={'Phone Number'}
            labelName={'Phone Number'}
            required={true}
            touched={touched}
            errors={errors}
            iconName={'phone'}
            iconType={'material-community'}
            // label={store.labels.common_phone_label}
            onCountrySelect={(code) => countryChange(code)}
            error={errors?.phone ?? ''}
          /> */}
          <FormButton
            title={'Sign Up'}
            onPress={handleSubmit}
            background={true}
            loading={btnLoading}
          />
          {/* <Text
            onPress={() => navigation.push('Tab')}
            type={['center', 'theme', 'bold']}
            style={{color:"#fff"}}
            >
            Skip 
          </Text> */}
        </View>
      </View>
    </React.Fragment>
  );
};