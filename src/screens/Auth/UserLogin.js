import { StyleSheet, Text, View,TouchableOpacity ,Image,TextInput,ScrollView} from 'react-native'
import React from 'react'
import { COLORS, IMAGE, Scale } from '../../common/constants'
import { scale, verticalScale, moderateScale} from 'react-native-size-matters';

const UserLogin = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.primaryContainer}>
        <Image style={styles.sliderImage} source={IMAGE.Logo} />
        <Text style={styles.HeaderText}>Welcome</Text>
      </View>
      <View  style={styles.SecondaryContainer}>
        <View style={styles.navbar}>
          <Text style={styles.buttonText}>Login</Text>
          <TouchableOpacity
          onPress={()=>props.navigation.navigate('UserSignUp')}
          >
          <Text style={[styles.buttonText,{color:COLORS.lightBlack}]}>SignUp</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.borderLine}></View>        
        <View style={styles.inputContainer}>
      <TextInput
                   style={styles.textstyles}
                   name="email"
                   keyboardType='email-address'
                  //  value={values.email}
                  //  onChangeText={handleChange('email')}
                   placeholder="Email Address"
                   placeholderTextColor="#1D2226"
                   autoComplete="cc-number"
            />
               <TextInput
                   style={styles.textstyles}
                   name="email"
                   keyboardType='email-address'
                  //  value={values.email}
                  //  onChangeText={handleChange('email')}
                   placeholder="Password"
                   placeholderTextColor="#1D2226"
                   autoComplete="cc-number"
          />
          <TouchableOpacity
            onPress={()=>props.navigation.navigate('HomeNavigator')}
            style={styles.button}>
  <Text style={styles.LoginButtonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPassword')}
            style={{ width: scale(290) }}>
             <Text  style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
    </View>
    <View style={styles.socialPlatform}>
     <View style={styles.Socialborder}></View>
    </View>
      </View>
      
    </ScrollView>
  )
}

export default UserLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLORS.primary,
  },
  primaryContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
    backgroundColor:COLORS.primary
  },
  SecondaryContainer: {
    flex: 2,
    width:'100%',
    backgroundColor:COLORS.primary
  },
  sliderImage: {
   flex:1,
  aspectRatio: 1.2,
  resizeMode: 'contain',
  },
  HeaderText: {
    fontSize: scale(26),
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  navbar: {
    height:verticalScale(50),
    marginTop: verticalScale(20),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  borderLine: {
    width: scale(150),
    height: verticalScale(4),
    backgroundColor:COLORS.secondary
  },
  buttonText: {
    fontSize: scale(16),
    color: COLORS.black,
    fontFamily: 'Poppins-SemiBold',
  },
  inputContainer: {
height:verticalScale(300),
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection:"column"
  },
  textstyles: {
    width: scale(290),
    borderWidth:1,
    borderColor: "#e8edf9",
    backgroundColor:COLORS.primary,
    elevation: 4,
    borderRadius: moderateScale(5),
    paddingLeft:scale(10),
    shadowColor: "blue",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(290),
    height: scale(50),
    alignSelf: 'center',
    borderRadius:moderateScale(5),
    backgroundColor: '#6df0df',
    elevation:4
},
  LoginButtonText: {
    fontSize: scale(16),
    color: COLORS.black,
    fontFamily: 'Roboto-Medium',
  },
  socialPlatform: {
    flex: 0.5,
    justifyContent:"flex-start",
    alignItems: 'center',
  },
  forgotText: {
    fontSize: scale(12),
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  Socialborder: {
    width:scale(290),
    borderTopWidth: moderateScale(1),
    borderColor:COLORS.lightBlack
  }
})