import React,{useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image ,Switch} from "react-native";
import {IMAGE,ICONS, COLORS } from "../constants"
import { scale, verticalScale, moderateScale} from 'react-native-size-matters';
const CustomHeader = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
      <View style={styles.buttonContainer}>
        {/* <TouchableOpacity onPress={() => ''}>
          <Image style={styles.avatarIcon} source={ICONS.Logo} />
        </TouchableOpacity> */}
        <View style={styles.headerTextContainer}>
        <Image style={styles.headerLogo} source={IMAGE.Logo} />
      </View>
      <View style={styles.headerRight}>
      <Text style={styles.fontStyle}>Host/Guest</Text>
        <Switch
                    trackColor={{ false: "#09F2DF", true: "#09F2DF" }}
                    thumbColor={isEnabled ? "#FFF" : "#FFFF"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{width:scale(40)}}
      />
        <Text style={styles.fontStyle}>Vender</Text>
        </View>
    </View>
  );
};

export default CustomHeader;

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
    backgroundColor:COLORS.primary
    
  },
  headerLogo:{
    width: '100%',
    height: '100%',
    resizeMode:'stretch',
  },
  avatarIcon: {
    width: scale(17),
    height: scale(18),
    resizeMode: "contain",
  },

  headerTextContainer: {
    width:scale(80),
    height: scale(60),
  },

  headerText: {
    fontSize: scale(22),
    color: "#FFFFFF",
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
    width:scale(150),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems:"center",
  },
  fontStyle: {
    color: COLORS.black,
    fontFamily: "Roboto-Medium"
  }
});
