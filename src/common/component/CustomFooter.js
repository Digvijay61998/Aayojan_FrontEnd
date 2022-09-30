import { StyleSheet, Image, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { ICONS } from '../constants'
import { scale, verticalScale } from 'react-native-size-matters'
import icons from '../constants/icons'

const CustomFooter = ({props}) => {
  console.log("props",props);
  return (
    <View
    style={{
      width: '100%',
      height: verticalScale(40),
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'white',
      marginTop: verticalScale(10),
    }}>
    <TouchableOpacity style={{width: scale(20), height: verticalScale(20)}}>
      <Image
        source={ICONS.home}
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
        onPress={()=>props.navigation.navigate('EventBottomTabStack')}
      style={{width: scale(20), height: verticalScale(20)}}
      >
      <Image
        source={ICONS.add}
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
    </TouchableOpacity>
    <TouchableOpacity
      style={{width: scale(20), height: verticalScale(20)}}
      onPress={()=>props.navigation.navigate('GuestBottomTabStack')}
    >
      <Image
        source={ICONS.user}
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{width: scale(20), height: verticalScale(20)}}
      onPress={()=>props.navigation.navigate('FourthBottomTabStack')}
    >
      <Image
        source={ICONS.option}
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
      />
    </TouchableOpacity>
  </View>
  )
}

export default CustomFooter

const styles = StyleSheet.create({})