import {StyleSheet, Text, Modal, Image,View,TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLORS, ICONS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const PrivacyPolicy = (props) => {
  return props.visible ? (
    <Modal transparent={true} visible={true}>
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={{width:'100%',height:verticalScale(50),marginTop:verticalScale(-10), justifyContent:"flex-end",alignItems:"flex-end"}}>
        <TouchableOpacity
         onPress={()=> props.handleFunCancel()}
        style={{width:scale(20),height:verticalScale(40)}}
        >
          <Image source={ICONS.close} style={{width:'70%',height:'70%'}}/>
      </TouchableOpacity>
        </View>
        <Text style={styles.headerText}> Privacy Policy</Text>
        <Text style={styles.para}>
          Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren,.
        </Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={()=> props.handleFunCancel()}
        >
             <LinearGradient
        colors={['#0CCFBF', '#0CCFBF', '#51F5E8D6', '#51F5E8D6']}
        start={{x: 0, y: 0}}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
          <Text style={{fontSize:moderateScale(20),fontFamily:"Roboto-Medium"}} >OK</Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
  ) : null;
};

const TermsAndCondition = (props) => {
  
  return props.visible ? (
    <Modal transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={{width:'100%',height:verticalScale(50),marginTop:verticalScale(-10), justifyContent:"flex-end",alignItems:"flex-end"}}>
          <TouchableOpacity
            onPress={()=> props.handleFunCancel()}
          style={{width:scale(20),height:verticalScale(40)}}
          >
            <Image source={ICONS.close} style={{width:'100%',height:'100%'}}/>
        </TouchableOpacity>
          </View>
          
          <Text style={styles.headerText}> Terms and Conditions</Text>
          <Text style={styles.para}>
            Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={()=> props.handleFunCancel()}
          >
               <LinearGradient
          colors={['#0CCFBF', '#0CCFBF', '#51F5E8D6', '#51F5E8D6']}
          start={{x: 0, y: 0}}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
            <Text style={{fontSize:moderateScale(20),fontFamily:"Roboto-Medium"}} >OK</Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  ) : null;
};

export {PrivacyPolicy ,TermsAndCondition};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    // backgroundColor: "#ecf0f1",
    // opacity:0.6,
    // width:"100%"
  },
  boxContainer: {
    width: '90%',
    height: verticalScale(322),
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(5),
    padding: moderateScale(20),
    justifyContent:"flex-start",
    alignItems:"flex-start"
  },
  headerText: {
    fontSize: moderateScale(18),
    color: '#2FA42E',
    fontFamily:"Roboto-Medium",
    textDecorationLine: 'underline'
  },
  para: {
    marginTop:verticalScale(10),
    fontSize: moderateScale(13),
    color: '#636363',
    fontFamily: "Roboto-Medium",
    letterSpacing: 0.13,
    lineHeight:verticalScale(25)
  },
  buttonContainer: {
    width: "100%",
    height: verticalScale(100),
    justifyContent: "center",
   alignItems:"center"
  },
  button: {
    width: scale(111),
    height: verticalScale(43),
    borderRadius: moderateScale(50),
    justifyContent: "center",
    alignItems:"center"
  }
});
