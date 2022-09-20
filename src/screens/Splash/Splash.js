import { StyleSheet, Image,StatusBar} from 'react-native'
import React, { useEffect } from 'react'
// import {Scale,IMAGE,appTheme} from "../../common/constants"
// import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";
import { COLORS, IMAGE, Scale, verticalScale } from '../../common/constants';

const Splash = (props) => {

  async function componentDidMount() {
 
        // let userToken = (await AsyncStorage.getItem("userToken"));
        // console.log("@@@@ User Token================", userToken);
    setTimeout(() => {
          // console.log("AuthStackScreen is navigated ");
          // if (userToken) {
          //   props.navigation.replace("HomeNavigator");
          // } else { 
            props.navigation.replace("OnBoardingStackScreen");
            // }
          
            // } else {
            //   this.props.navigation.replace("StackScreenSeller");
            // }
        //   }
        },3000);
      }

  useEffect(() => {
    componentDidMount()
      },[])
  return (<>
    <StatusBar hidden />
    <Animatable.View
    useNativeDriver
    animation="bounceIn"
    style={styles.container}
    >
    <Image source={IMAGE.Logo} style={styles.imageStyle} />
  </Animatable.View>
  </>
  )
}
function mapStateToProps(state) {
  console.log("state~~~~~~~~~~~~~~~~~~~~~~~~~",state);
  return {
    // Theme:Theme.theme
  };
}

export default Splash

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLORS.primary
  },

  imageStyle: {
    width: Scale(200),
    height:verticalScale(200),
    resizeMode: "contain",
  },
});