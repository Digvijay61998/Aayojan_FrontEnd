import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { scale, verticalScale, moderateScale ,ScaledSheet} from 'react-native-size-matters';
import React from 'react'
import { COLORS } from '../../common/constants';

const AuthScreen = (props) => {
    console.log("props", props);
    
    const handleNavigate = (val) => {
        if (val == 'login') {
            props.navigation.navigate('UserLogin')
        } else if (val === 'signup') {
            props.navigation.navigate('UserSignUp')
        }
    }

  return (
      <View style={styles.container}>
             <View style={styles.primaryContainer}>
      <Text>image</Text>
          </View>
          <View style={styles.secondaryContainer}>
          <Text style={styles.heaterText}>Excited?!</Text>
          <Text style={styles.subText}>You should be!!</Text>
              <Text style={styles.LightfontStyle}>Sign In if You alrady have ab account with us</Text>
              <TouchableOpacity
             onPress={()=>{handleNavigate('login')}}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
              <Text style={[styles.LightfontStyle,{marginTop:verticalScale(16)}]}>Or sign up if you are new</Text>
              <TouchableOpacity
                  onPress={()=>{handleNavigate('signup')}}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
          </View>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
container:{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
       alignItems:"center"
    },
    primaryContainer: {
        width: scale(350),
        height:verticalScale(200),
    },
    secondaryContainer: {
        width: scale(350),
        height:verticalScale(460),
        padding:moderateScale(30)
    },
    heaterText: {
        fontSize: scale(30),
        fontWeight: '800',
        color:"black",
        fontStyle:"Poppins-Bold",
     marginBottom:verticalScale(10)
    },
    subText: {
        fontSize: scale(24),
        fontWeight: '800',
        color:"black",
        fontStyle: "Poppins-Bold",
        marginBottom:verticalScale(20)
    },
    LightfontStyle:{
        color: COLORS.lightBlack,
        marginBottom:verticalScale(14)
        
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(290),
        height: scale(50),
        alignSelf: 'center',
        backgroundColor: '#6df0df',
        borderRadius: scale(30),
    },
    buttonText: {
        fontSize: scale(16),
        color: COLORS.black,
        fontWeight: '700',
        fontFamily: 'Poppins-Regular',
      },
})