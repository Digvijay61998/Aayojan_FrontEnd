import React,{useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image ,Switch, TextComponent} from "react-native";
import {IMAGE,ICONS, COLORS } from "../constants"
import { scale, verticalScale, moderateScale} from 'react-native-size-matters';
const CustomHeaderGuestList = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  
  return (
      <View style={styles.buttonContainer}>
        <View style={styles.BackButtonContainer}>
            <TouchableOpacity>
              <Image style={styles.backButtonIcon} source={IMAGE.backButton}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>Guest List</Text>
      </View>
        <View style={styles.headerTextContainer}>
        <Image style={styles.headerLogo} source={IMAGE.Logo} />
      </View>
    </View>
  );
};

export default CustomHeaderGuestList;

const styles = StyleSheet.create({
  buttonContainer: {
    width:'100%',
    justifyContent: "space-between",
    alignItems:"center",
    flexDirection: "row",
    height: scale(45),
    padding: moderateScale(15),
    position: "relative",
    overflow: "hidden",
    backgroundColor:"#FFFFFF",
    paddingVertical:verticalScale(30),
  },
  BackButtonContainer:{
    height:verticalScale(20),
    width:scale(120),
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'center',
  },  
  headerLogo:{
    width: '100%',
    height: '100%',
    resizeMode:'stretch',
  },backButtonIcon:{
    height:'100%',
    width:scale(40)
  },
  avatarIcon: {
    width: scale(17),
    height: scale(18),
    resizeMode: "contain",
  },
  headerTextContainer: {
    width:scale(80),
    height: scale(80),
  },
  headerText: {
    fontSize: scale(16),
    fontFamily: "Metropolis",
    fontWeight: "600",
  },
  userIcon: {
    marginTop: verticalScale(60),
    marginLeft: scale(70),
    width: scale(20),
    height: scale(20),
    resizeMode: "contain",
  },
  notfIcon: {
    width: scale(20),
    height: scale(20),
    resizeMode: "contain",
  },
  headerRight: {
    width:scale(170),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems:"center",
  },
  fontStyle: {
    color: COLORS.black,
    fontFamily: "Roboto-Medium"
  }
});
