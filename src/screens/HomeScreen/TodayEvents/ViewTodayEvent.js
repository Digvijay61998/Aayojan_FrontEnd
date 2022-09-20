import { StyleSheet, Text, View ,ScrollView,Image,ImageBackground} from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { COLORS, IMAGE } from '../../../common/constants'

const ViewTodayEvent = () => {
  return (
      <ScrollView
      style={styles.container}
      >
          <View style={styles.headerPhoto}>
           <ImageBackground
            source={IMAGE.lorem1}
             style={styles.mainContainer}>
                  <View style={{width: '100%', height: verticalScale(176), borderTopLeftRadius: moderateScale(10), borderTopRightRadius: moderateScale(10) }}>
                      <View style={styles.startingEventdate}>
                      <Text style={styles.PhotoDateFont}>30</Text>
                          <Text style={styles.PhotoDateFont}>AUG</Text>
                      </View>
     </View>
     </ImageBackground>
          </View>
          <View>
          <Text style={styles.textFont}> Seraton Wedding Explorer Event</Text>
        <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
          </View>
          <View style={styles.eventContainer}>
        <View style={styles.partyPhoto}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
              <View style={styles.headerContainer}>
                  <Text style={styles.headerTitle}>Sangeet</Text>
                  <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
        </View>
              <View style={styles.menu}></View>
          </View>
          
          <View style={styles.eventContainer}>
        <View style={styles.partyPhoto}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
              <View style={styles.headerContainer}>
                  <Text style={styles.headerTitle}>Sangeet</Text>
                  <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
        </View>
              <View style={styles.menu}></View>
          </View>
          
          <View style={styles.eventContainer}>
        <View style={styles.partyPhoto}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
              <View style={styles.headerContainer}>
                  <Text style={styles.headerTitle}>Ceremoney</Text>
                  <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
        </View>
              <View style={styles.menu}></View>
          </View>
          
          <View style={styles.eventContainer}>
        <View style={styles.partyPhoto}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
              <View style={styles.headerContainer}>
                  <Text style={styles.headerTitle}>Sangeet</Text>
                  <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
        </View>
              <View style={styles.menu}></View>
          </View>
          
          <View style={styles.eventContainer}>
        <View style={styles.partyPhoto}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
              <View style={styles.headerContainer}>
                  <Text style={styles.headerTitle}>Sangeet</Text>
                  <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
        </View>
              <View style={styles.menu}></View>
          </View>
          
          <View style={styles.eventContainer}>
        <View style={styles.partyPhoto}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
              <View style={styles.headerContainer}>
                  <Text style={styles.headerTitle}>Sangeet</Text>
                  <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default ViewTodayEvent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.primary,
        padding:moderateScale(15)
    },
    headerPhoto: {
        flex: 1,
        borderTopLeftRadius: moderateScale(10),
        borderTopRightRadius:moderateScale(10),
      height: verticalScale(185),
        overflow:"hidden"
    },
    textFont: {
        letterSpacing:0.4,
        fontFamily: "calibrib",
        fontSize: moderateScale(18),
        color:COLORS.black
        
    },
    eventContainer: {
        width: '100%',
        height: verticalScale(116),
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:"white",
        marginTop:verticalScale(10)
      },
      partyPhoto: {
        width: scale(70),
          height: verticalScale(104),
        borderRadius: moderateScale(10),
        overflow:"hidden"
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
            fontSize: moderateScale(16),
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
  imageStyle: {
    width: '100%',
    height:'100%',
    resizeMode:"stretch",
}
})