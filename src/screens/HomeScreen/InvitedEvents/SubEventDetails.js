import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'
import { COLORS, IMAGE } from '../../../common/constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const SubEventDetails = () => {
  return (
      <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
              <Text style={styles.headerText}>{'Welcome'}</Text>
              <Text style={styles.subheaderText}>{'To The wedding Of'}</Text>
              <Text style={[styles.headerText, {fontSize: moderateScale(30) }]}>{'Vishal & Bheem Wedding'}</Text>
              <View style={styles.subContainer}>
        <Image source={IMAGE.lorem} style={styles.headerImageStyle} />
        <View style={styles.content}>
          <Text style={styles.headerFontText}>Vishal Wedding</Text>
          <Text style={styles.dateText}>Thu, Aug 30 at 08:30 PM</Text>
          <Text style={styles.loactionText}>GHODESHWER, united kingdom</Text>
        </View>
      </View>
          </View>
          <View style={styles.imageContainer}>
              <Image source={IMAGE.map} style={styles.map}/>
          </View>
          <View style={styles.footerContainer}>
          <View style={[styles.optionContainer, { backgroundColor: "#BCF7BA" }]}><Text style={{color:"#3FBF3F"}}>Attend</Text></View>
          <View style={[styles.optionContainer,{backgroundColor:"#F9D1D1"}]}><Text style={{color:"#F13B3B"}}>Not attend</Text></View>
          <View style={[styles.optionContainer,{backgroundColor:"#F9F3E8"}]}><Text style={{color:"#ECBA5F"}}>May be attend</Text></View>
        </View>
    </ScrollView>
  )
}

export default SubEventDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    headerContainer: {
        width: '100%',
        height:'auto',
        alignItems: "center",
        justifyContent:'flex-start',
        backgroundColor:'white'
    },
    headerText: {
        fontFamily:"calibrib",
        fontSize: moderateScale(42),
        color:"#efd729"
    },
    subheaderText: {
        fontFamily:"calibrib",
        fontSize: moderateScale(14),
        color:"#ad5ea4"
    },
    subContainer: {
        width: '100%',
        height: verticalScale(230),
        padding: scale(10),
        backgroundColor: 'white',
    },
    headerImageStyle: {
        width: '100%',
        height: verticalScale(130),
        resizeMode: 'stretch',
        borderTopLeftRadius: moderateScale(20),
        borderBottomRightRadius: moderateScale(20),
    },
    content: {
        width: '100%',
        height: verticalScale(80),
        padding: scale(5),
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    headerFontText: {
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
    },
    dateText: {
        fontFamily: 'calibrib',
        fontSize: moderateScale(13),
        color: '#adadad',
      },
      loactionText: {
        fontFamily: 'calibrib',
        fontSize: moderateScale(16),
        color: '#adadad',
    },
    imageContainer: {
        width: '100%',
        height: verticalScale(180),
    },
    map: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    footerContainer: {
        width: "100%",
        height: verticalScale(60),
        backgroundColor: "white",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection:"row"
      },
      optionContainer: {
        width: scale(100),
        height: verticalScale(40),
        alignItems: "center",
        justifyContent: "center",
        borderRadius:moderateScale(10)
      }
})