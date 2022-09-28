import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView
} from 'react-native';
import {
  CONTAINER,
  Scale,
  COLORS,
  FONTS,
  ICONS,
  IMAGE,
} from '../../common/constants';
import {Formik, useFormik} from 'formik';
import * as yup from 'yup';
import { scale ,verticalScale} from 'react-native-size-matters';
import { PrivacyPolicy, TermsAndCondition } from '../../common/component/Policy';
import { useMutation, gql } from "@apollo/client";
import { SIGUP_MUTATION } from "../../GraphQl/Mutations";



const UserSignUp = props => {
  const [termCondition, setTermCondition] = useState(false)
  const [privacyPolicyCheck, setPrivacyPolicyCheck] = useState(false)
  const [termConditionModel, setTermConditionModel] = useState(false)
  const [privacyPolicyCheckModel, setPrivacyPolicyCheckModel] = useState(false)

  const [registerUser, { data, loading, error }] = useMutation(SIGUP_MUTATION);


  const  handleFunCancel=()=> {
    setTermConditionModel(false)
    setPrivacyPolicyCheckModel(false)
  }

  const handleSubmit = async val => {
    console.log('val', val);
    if (privacyPolicyCheck && termCondition == true) {
      registerUser({
        variables: {
          firstName: val.firstName,
          lastName: val.lastName,
          email: val.email,
          contactNo: val.contactNo,
          password: val.password,
          role: ["HOST","GUEST"],
        },
      });
      if (error) {
        console.log("error",error);
      }
      if (data) {
        console.log("data",data);
      }
    }
    // if (input.match(regexEmail)) {
    //   console.log('true~~~~~~~~>');
    //   // props.navigation.replace("HomeNavigator");
    //   // userLoginWithCreds(data)
    //   return true;
    // } else {
    //   error({errorMessage: 'Please enter valid Email/Phone'});
    //   isFetching(false);
    // }
  };
  //  VALIDATION SCHEMA
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema = yup.object().shape({
    firstName: yup.string().required('This field is required').min(1),
    lastName:yup.string().required('This field is required').min(1),
    email: yup.string().email('Please enter valid email'),
    contactNo: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    password: yup.string().required('This field is required'),
    confirm_password: yup.string().when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Both password need to be the same'),
    }),
  });
  // useEffect(() => {
  //   console.log('data',loading,error,data);
  // }, [data, error, loading]);


  return (
    <SafeAreaView style={styles.container}>
      <View style={{width:'100%',height:verticalScale(70),justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
        <Text style={FONTS.textTittle}>Signup</Text>
        <Image
            source={IMAGE.Logo}
            style={styles.sliderImage}
          />
      </View>
      <View
        style={{
          width: Scale(320),
          paddingLeft: Scale(2),
          flexDirection: 'row',
          alignItems: 'baseline',
          marginTop: Scale(10),
        }}>
        <Text style={{fontSize:Scale(15),width:'100%',color:COLORS.black,fontFamily:"Poppins-Medium"}}>
          Register with account details, to start your acount !
        </Text>
      </View>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          contactNo: '',
          password: '',
          confirm_password:'',
          role: ["HOST","GUEST"],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          values,
          handleChange,
          onKeyPress,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => {
          return (
            <ScrollView contentContainerStyle={styles.LoginBox}>
              <Text style={{bottom: verticalScale(30), color: 'red'}}>
                {/* {error?.errorMessage} */}
              </Text>
              <View style={styles.input} center>
                <TextInput
                  style={[
                    FONTS.textstyle,
                    {paddingLeft: Scale(10),height:verticalScale(60), width: '100%',fontFamily:"Montserrat-Regular"},
                  ]}
                  name="firstName"
                  keyboardType="email-address"
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  placeholder="First Name"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                {errors.firstName}
              </Text>
              <View style={styles.input} center>
                <TextInput
                  style={[
                    FONTS.textstyle,
                    {fontFamily:"Montserrat-Regular", paddingLeft: Scale(10),height:verticalScale(60), width: '100%'},
                  ]}
                  name="lastName"
                  keyboardType="email-address"
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  placeholder="Last Name"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                {errors.lastName}
              </Text>
              <View style={styles.input} center>
                <TextInput
                  style={[
                    FONTS.textstyle,
                    {fontFamily:"Montserrat-Regular", paddingLeft: Scale(10),height:verticalScale(60), width: '100%'},
                  ]}
                  name="email"
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeholder="Email Address"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                {errors.email}
              </Text>
              <View style={styles.input} center>
                <TextInput
                  style={[
                    FONTS.textstyle,
                    {fontFamily:"Montserrat-Regular", paddingLeft: Scale(10),height:verticalScale(60), width: '100%'},
                  ]}
                  name="contactNo"
                  keyboardType="numeric"
                  value={values.contactNo}
                  onChangeText={handleChange('contactNo')}
                  placeholder="contact number"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                  maxLength = {10}
                />
              </View>
              <Text class="error" style={styles.error}>
                {errors.contactNo}
              </Text>
              <View style={styles.input}>
                <TextInput
                  style={[
                    FONTS.textstyle,
                    {
                      fontFamily:"Montserrat-Regular",
                      width: '100%',
                      fontSize: 18,
                      paddingLeft: Scale(10),height:verticalScale(60),
                    },
                  ]}
                  name="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                {errors.password}
              </Text>
              <View style={styles.input}>
                <TextInput
                  style={[
                    FONTS.textstyle,
                    {
                      fontFamily:"Montserrat-Regular",
                      width: '100%',
                      fontSize: 18,
                      paddingLeft: Scale(10),height:verticalScale(60),
                    },
                  ]}
                  name="confirm_password"
                  value={values.confirm_password}
                  onChangeText={handleChange('confirm_password')}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                {errors.confirm_password}
              </Text>
              <View style={{width:Scale(350),flexDirection:"column"}}>
                <View style={{ width: '100%' ,flexDirection:"row",alignItems:"center",justifyContent:'flex-start'}}>
                  <TouchableOpacity
                    onPress={() =>setTermCondition(true)}
                    style={styles.checkbox}
                  >
                    {termCondition == true && <View style={{ width: scale(8), height: verticalScale(8), backgroundColor: "#1A1A1A", }}></View>}
                  </TouchableOpacity>
                  <TouchableOpacity
                      onPress={() =>  setTermConditionModel(true)}
                  >
                    <Text>  I agree with the <Text style={{ color: "#0090FE", textDecorationLine: 'underline', }}>Terms and Conditions </Text></Text>
                  </TouchableOpacity>
                    
                </View>
                <View style={{ width: '100%' ,flexDirection:"row",alignItems:"center",justifyContent:'flex-start'}}>
                  <TouchableOpacity
                    onPress={() => setPrivacyPolicyCheck(true)}
                    style={styles.checkbox}
                  >
                    {privacyPolicyCheck == true && <View style={{ width: scale(8), height: verticalScale(8), backgroundColor: "#1A1A1A", }}></View>}

                  </TouchableOpacity>
                  <TouchableOpacity
                      onPress={() => setPrivacyPolicyCheckModel(true)}
                  >
                    <Text>  I agree with the <Text style={{ color: "#0090FE", textDecorationLine: 'underline', }}>Privacy Policy </Text></Text>
                    </TouchableOpacity>
                </View>
              </View>
              <TermsAndCondition
                visible={termConditionModel}
                handleFunCancel={handleFunCancel}
              />
              <PrivacyPolicy
                visible={privacyPolicyCheckModel}
                handleFunCancel={handleFunCancel}
              />
              <View
                // colors={COLORS.button}
                // start={{x: 0, y: 0}}
                // end={{x: 1, y: 1}}
                style={{
                  width: Scale(320),
                  marginTop: verticalScale(30),
                 height:Scale(100)
                }}>
                <TouchableOpacity
                 style={styles.button}
                  onPress={handleSubmit}>
                  <Text
                    style={styles.LoginButtonText}>
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default UserSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: Scale(20),
    backgroundColor:'#FFFFFF'
    
  },
  LoginBox: {
    width: Scale(320),
  },
  input: {
    height: verticalScale(45),
    width: '100%',
    borderRadius: 10,
    marginTop: Scale(5),
    backgroundColor: '#F7F7F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    fontSize: 13,
    left: Scale(160),
  },
  sliderImage: {
    width: scale(130),
    height:verticalScale(130),
   resizeMode: 'stretch',
  },
  checkbox: {
    width: Scale(15),
    height: verticalScale(15),
    alignItems: "center",
    justifyContent:"center",
    borderWidth: 2,
    borderColor:COLORS.lightBlack
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: Scale(290),
    height: Scale(50),
    alignSelf: 'center',
    borderRadius:Scale(5),
    backgroundColor: '#6df0df',
    elevation:4
  },
  LoginButtonText: {
    fontSize: Scale(16),
    color: COLORS.black,
    fontFamily: 'Poppins-Medium',
  },
});


