import { StyleSheet, Dimensions,Platform } from 'react-native';
export const failedText = 'Sorry! Something went wrong. Please try again later'

export const colors = {
  background: '#F5F2F9',
  errorText: '#FA3256',
  headerText: '#444444',
  buttonBackground: '#39BD98',
  inputBackground: '#FFFFFF',
  inputDivider: '#E4E2E5',
  theme:"#191601",
  button : '#227abb',
  primary : '#283593',
  inputText:'#333',
  searchPrimary : '#D4F1F4',
  searchButton: '#ffffff',
  golden: '#f5ad3e',
  black: '#000',
  grey: '#666666', 
  white: '#ffffff',
  white2 : '#f1f1f1',
  bgMenu : '#263238',
  buttonText : '#ffffff',
  bgDark : '#212121',
  textLight : '#666666',
  textDark : '#333333',
  border: '#989898',
  danger: "#e25e77",
  success: "green",
  warning: "#FAD162",
  red:'#EA3732',
  grey1:"#f6f6f6"
};

export const commonStyle = {
  container: {
    backgroundColor: colors.theme,
    minHeight: '100%',
    width: window.width,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.theme,
    height: 400,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  modalView: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.theme,
    marginTop: 15,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 10,
    margin: 15,
  },
  searchView: {
    backgroundColor: '#fff',
    marginTop: 15,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 10,
    margin: 15,
  },
  buttonText: {
    color: colors.buttonText,
    borderRadius: 50,
    fontFamily: 'Montserrat-Regular',
  },
  buttonText1: {
    color: colors.buttonText1,
    borderRadius: 50,
    fontFamily: 'Montserrat-Regular',
  },
  buttonContainer: {
    marginTop: 15,
    ...Platform.select({
      ios: {
        justifyContent: 'center',
      },
      android: {
        justifyContent: 'center',
      },
    }),
  },

  button1: {
    width: '100%',
    backgroundColor: colors.button,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  button2: {
    width: '100%',
    backgroundColor: colors.buttonSignUp,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 15,
  },
  eyeWrapper: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '80%',
    top: 22,
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    paddingHorizontal: 15,
  },
  normalText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },

  inputBorder: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  errorWrapper: {
    width: '100%',
    marginBottom: -10,
  },
  errorText: {
    color: '#dc3545',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  formWrapper: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    shadowRadius: 5,
    shadowOffset: {height: 2, width: 0},
  },
  formInputView: {
    width: '100%',
    paddingHorizontal: 15,
    height: 80,
  },
  linkText: {
    color: colors.textLight,
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    textDecorationLine: 'underline',
  },
  linkLightText: {
    color: colors.textLight,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  successText: {
    color: colors.success,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  errorText: {
    color: colors.errorText,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  tabviews: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  block1: {
    flex: 0.5,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block2: {
    flex: 0.5,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#333',
  },

  underlineStyleHighLighted: {
    borderColor: '#376bff',
  },
    dropDown: {
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    overflow: 'hidden',
  },
  selectedDropdown: {
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderColor: '#f00',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    overflow: 'hidden',
  },
}

export const sizes = {
  title : 10,
  label : 10
}