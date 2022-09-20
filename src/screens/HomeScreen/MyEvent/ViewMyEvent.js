import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { COLORS, IMAGE } from '../../../common/constants'

const ViewMyEvent = () => {
  return (
    <ScrollView
    style={styles.container}
    >
        <View style={styles.eventContainer}>
      <View style={styles.partyPhoto}><Image source={IMAGE.lorem1} style={styles.imageStyle}/></View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Anniversary party in Dubai</Text>
                <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
                  <View style={styles.viewMange}>
                      <Text style={styles.viewMangeFont}>{'View Events >>'}</Text>
                      <Text  style={styles.viewMangeFont}>{'manage event >>'}</Text>
                  </View>
      </View>
        </View>
        
        <View style={styles.eventContainer}>
      <View style={styles.partyPhoto}><Image source={IMAGE.lorem1} style={styles.imageStyle}/></View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Birthday party in Dubai</Text>
                <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
                  <View style={styles.viewMange}>
                      <Text style={styles.viewMangeFont}>{'View Events >>'}</Text>
                      <Text  style={styles.viewMangeFont}>{'manage event >>'}</Text>
                  </View>
      </View>
        </View>
        
        <View style={styles.eventContainer}>
      <View style={styles.partyPhoto}><Image source={IMAGE.lorem1} style={styles.imageStyle}/></View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Anniversary party in Dubai</Text>
                <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
                  <View style={styles.viewMange}>
                      <Text style={styles.viewMangeFont}>{'View Events >>'}</Text>
                      <Text  style={styles.viewMangeFont}>{'manage event >>'}</Text>
                  </View>
                
      </View>
            
        </View>
        
        <View style={styles.eventContainer}>
      <View style={styles.partyPhoto}><Image source={IMAGE.lorem1} style={styles.imageStyle}/></View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Anniversary party in Dubai</Text>
                <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
                  <View style={styles.viewMange}>
                      <Text style={styles.viewMangeFont}>{'View Events >>'}</Text>
                      <Text  style={styles.viewMangeFont}>{'manage event >>'}</Text>
                  </View>
                
      </View>
            
        </View>
        
        <View style={styles.eventContainer}>
      <View style={styles.partyPhoto}><Image source={IMAGE.lorem1} style={styles.imageStyle}/></View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Anniversary party in Dubai</Text>
                <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
                  <View style={styles.viewMange}>
                      <Text style={styles.viewMangeFont}>{'View Events >>'}</Text>
                      <Text  style={styles.viewMangeFont}>{'manage event >>'}</Text>
                  </View>
                
      </View>
            
        </View>
        
        <View style={styles.eventContainer}>
      <View style={styles.partyPhoto}><Image source={IMAGE.lorem1} style={styles.imageStyle}/></View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Anniversary party in Dubai</Text>
                <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
                  <View style={styles.viewMange}>
                      <Text style={styles.viewMangeFont}>{'View Events >>'}</Text>
                      <Text  style={styles.viewMangeFont}>{'manage event >>'}</Text>
                  </View>
                
      </View>
    </View>
  </ScrollView>
  )
}

export default ViewMyEvent

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        padding:moderateScale(15)
    },
    eventContainer: {
        width: '100%',
        height: verticalScale(116),
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
      },
      partyPhoto: {
        width: scale(70),
        height: verticalScale(104),
          overflow:"hidden",
        borderRadius:moderateScale(10)
    },
      
      headerContainer: {
          flex: 2,
        height: verticalScale(104),
          padding: moderateScale(10),
        justifyContent:"space-evenly",alignItems:"flex-start"
      },
      mainContainer: {
        width: '100%',
        alignItems:"center",
        justifyContent:"center",
    },
    startingEventdate: {
        position: "absolute",
        width: scale(46),
        height: verticalScale(52),
        backgroundColor: "white",
        bottom: verticalScale(0),
        left: scale(8),
        borderRadius: moderateScale(10),
        alignItems: "center",
        justifyContent:"center"
    },
    PhotoDateFont: {
        fontSize: moderateScale(14),
        fontFamily: "Poppins-SemiBold",
        color:"black"
    },
        locationTextFont: {
            fontFamily: "calibrib",
            fontSize: moderateScale(14),
            height:verticalScale(24),
            color:'#C5C5C5'
        },
        dateFont: {
            color: '#FFBA91',
            fontSize: moderateScale(14),
            fontStyle: "calibrib",
            fontWeight:"700"
            
        },
        headerTitle: {
            fontSize: moderateScale(17),
            color: '#363636',
            fontWeight:"700",
            fontFamily: "calibrib",
            height:verticalScale(24)
    },
    viewMange: {
        width: '80%',
        flexDirection: "row",
        justifyContent:"space-between",
    },
    viewMangeFont: {
        fontSize:moderateScale(10),
        color: '#00AAD6',
        fontFamily:"Poppins-Regular"
    },
    imageStyle: {
      width: '100%',
      height:'100%',
      resizeMode:'cover',
  }
})