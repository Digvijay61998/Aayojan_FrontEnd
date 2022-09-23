import React, {Component, useState} from 'react';
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

const UserSignUp = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const handleSubmit = async val => {
    console.log('val', val);
    const input = val.email;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(regexEmail)) {
      console.log('true~~~~~~~~>');
      // props.navigation.replace("HomeNavigator");
      // userLoginWithCreds(data)
      return true;
    } else {
      error({errorMessage: 'Please enter valid Email/Phone'});
      isFetching(false);
    }
  };
  //  VALIDATION SCHEMA
  const validationSchema = yup.object().shape({
    fullName: yup.string().required('This field is required').min(1),
    email: yup.string().email('Please enter valid email'),
    // .required('Email Address is Required'),
    Set_Password: yup.string().required('This field is required'),
    confirm_password: yup.string().when('Set_Password', {
      is: val => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('Set_Password')], 'Both password need to be the same'),
    }),
    Set_Pin: yup.string().required('This field is required'),
    Confirm_Pin: yup.string().when('Set_Pin', {
      is: val => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('Set_Pin')], 'Both password need to be the same'),
    }),
  });
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
          Name: '',
          email: '',
          Set_Password: '',
          confirm_password: '',
          Set_Pin: '',
          Confirm_Pin: '',
        }}
        // validationSchema={validationSchema}
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
                  name="Name"
                  keyboardType="email-address"
                  value={values.Name}
                  onChangeText={handleChange('Name')}
                  placeholder="First Name"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                {/* {errors.Name} */}
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
                  placeholder="Last Name"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                {/* {errors.email} */}
              </Text>
              <View style={styles.input} center>
                <TextInput
                  style={[
                    FONTS.textstyle,
                    {fontFamily:"Montserrat-Regular", paddingLeft: Scale(10),height:verticalScale(60), width: '100%'},
                  ]}
                  name="Set_Password"
                  keyboardType="email-address"
                  value={values.Set_Password}
                  onChangeText={handleChange('Set_Password')}
                  placeholder="Email Address"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                {/* {errors.Set_Password} */}
              </Text>
              <View style={styles.input} center>
                <TextInput
                  style={[
                    FONTS.textstyle,
                    {fontFamily:"Montserrat-Regular", paddingLeft: Scale(10),height:verticalScale(60), width: '100%'},
                  ]}
                  name="confirm_password"
                  keyboardType="email-address"
                  value={values.confirm_password}
                  onChangeText={handleChange('confirm_password')}
                  placeholder="contact number"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                {/* {errors.confirm_password} */}
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
                  name="Set_Pin"
                  value={values.Set_Pin}
                  onChangeText={handleChange('Set_Pin')}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                {/* {errors.Set_Pin} */}
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
                  name="Confirm_Pin"
                  value={values.Confirm_Pin}
                  onChangeText={handleChange('Confirm_Pin')}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  placeholderTextColor="#1D2226"
                  autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                {/* {errors.Confirm_Pin} */}
              </Text>
              <View style={{width:Scale(350),flexDirection:"column"}}>
                <View style={{ width: '100%' ,flexDirection:"row",alignItems:"center",justifyContent:'flex-start'}}>
                  <TouchableOpacity
                    onPress={() => setToggleCheckBox(true)}
                    style={styles.checkbox}
                  >
                    {toggleCheckBox == true && <View style={{ width: scale(8), height: verticalScale(8), backgroundColor: "#1A1A1A", }}></View>}
                  </TouchableOpacity>
                <Text>  I agree with the <Text style={{color:"#0090FE", textDecorationLine: 'underline',}}>Terms and Conditions </Text></Text>
                </View>
                <View style={{ width: '100%' ,flexDirection:"row",alignItems:"center",justifyContent:'flex-start'}}>
                  <TouchableOpacity
                    style={styles.checkbox}
                  >
                    {toggleCheckBox == true && <View style={{ width: scale(8), height: verticalScale(8), backgroundColor: "#1A1A1A", }}></View>}

                  </TouchableOpacity>
                <Text>  I agree with the <Text style={{color:"#0090FE", textDecorationLine: 'underline',}}>Privacy Policy </Text></Text>
                </View>
               </View>
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
    backgroundColor:COLORS.primary
    
  },
  LoginBox: {
    width: Scale(320),
  },
  input: {
    height: verticalScale(45),
    width: '100%',
    borderRadius: 10,
    marginTop: Scale(5),
    backgroundColor: '#f7f7f9',
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


