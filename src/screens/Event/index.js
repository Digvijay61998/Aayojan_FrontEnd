import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { COLORS } from '../../common/constants'
import BirthdayEvent from './BirthdayEvent'

const Event = (props) => {

  const[state ,setState]=useState('BIRTHDAY')




  return (
    <ScrollView style={styles.conatainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
        onPress={()=>setState('BIRTHDAY')}
        style={[styles.headerButton,{backgroundColor:state == 'BIRTHDAY' ? '#09F2DF':'white'}]}>
          <Text style={styles.HeaderFont}>BIRTHDAY</Text>
        </TouchableOpacity>
        <TouchableOpacity
               onPress={()=>setState('ANNIVERSARY')}
               style={[styles.headerButton,{backgroundColor:state == 'ANNIVERSARY' ? '#09F2DF':'white'}]}>
          <Text style={styles.HeaderFont}>ANNIVERSARY</Text>
        </TouchableOpacity>
        <TouchableOpacity
               onPress={()=>setState('BABY SHOWER')}
               style={[styles.headerButton,{backgroundColor:state == 'BABY SHOWER' ? '#09F2DF':'white'}]}>
          <Text style={styles.HeaderFont}>BABY SHOWER</Text>
        </TouchableOpacity>
        <TouchableOpacity
             onPress={()=>setState('WEDDING')}
               style={[styles.headerButton,{backgroundColor:state == 'WEDDING' ? '#09F2DF':'white'}]}>
          <Text style={styles.HeaderFont}>WEDDING</Text>
        </TouchableOpacity>
      </View>
      {state == 'BIRTHDAY' && <BirthdayEvent props={props}/>}
       {state == 'ANNIVERSARY' && <BirthdayEvent props={props}/>}
      {state == 'BABY SHOWER' && <BirthdayEvent props={props}/>} 
      {state == 'WEDDING' && <BirthdayEvent props={props}/>} 
      
    </ScrollView>
  )
}

export default Event

const styles = StyleSheet.create({

  conatainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding:moderateScale(10)
  },
  headerContainer: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    backgroundColor: "#F9F8F7",
    width: '100%',
    height: verticalScale(32),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems:"center"
  },
  headerButton: {
    backgroundColor: "white",
    width: scale(80),
    height:verticalScale(32),
    alignItems: "center",
    justifyContent: "center",
    borderRadius:moderateScale(4)
  },
  HeaderFont: {
    fontSize: moderateScale(10),
    fontFamily:"Poppins-Regular"
  }
})