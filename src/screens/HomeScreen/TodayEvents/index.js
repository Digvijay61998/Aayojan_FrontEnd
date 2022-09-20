import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import { scale, verticalScale, moderateScale} from 'react-native-size-matters';
import React from 'react'
import { COLORS ,ICONS, IMAGE} from '../../../common/constants';

const TodayEvents = ({props}) => {
  return (
    <View style={styles.todayEventContainer}>
    <View style={styles.headerContainer}>
      <Text style={styles.fontTitle}>Today events</Text>
      <TouchableOpacity
        onPress={()=>props.navigation.navigate('ViewTodayEvent')}
      >
      <Text style={styles.viewAll}>view all</Text>  
      </TouchableOpacity>
    </View>
   
    <View style={styles.boxContainer}>
    <View style={styles.mainContainer}>
      <View>
      <View style={styles.imageContainer}><Image source={IMAGE.lorem1} style={styles.imageStyle} /></View>
      <Text style={styles.eventType}> Wedding </Text>
      <Text style={styles.date}> Aug 30 at 08:30 PM </Text>
      </View>
      <View>
      <View style={styles.imageContainer}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
      <Text style={styles.eventType}> Wedding </Text>
      <Text style={styles.date}> Aug 30 at 08:30 PM </Text>
      </View>
      <View>
      <View style={styles.imageContainer}><Image source={IMAGE.lorem1} style={styles.imageStyle} /></View>
      <Text style={styles.eventType}> Wedding </Text>
      <Text style={styles.date}> Aug 30 at 08:30 PM </Text>
      </View>
      </View>
      <View style={styles.datails}>
      <Text style={styles.textFont}> Seraton Wedding Explorer Event</Text>
        <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <View style={styles.profileBox}><Image source={IMAGE.man1} style={styles.viewImage}/></View>
          <View style={[styles.profileBox,{right:scale(15),zIndex:1,backgroundColor:"blue"}]}><Image source={IMAGE.man1} style={styles.viewImage}/></View>
            <View style={[styles.profileBox,{right:scale(30),zIndex:1,backgroundColor:"pink"}]}><Image source={IMAGE.man1} style={styles.viewImage}/></View>
          <View style={[styles.profileBox,{right:scale(45),zIndex:1,backgroundColor:"#15AED6"}]}><Text style={{textAlign:"center",color:'white'}}>80+</Text></View>
          </View>
          <Text style={styles.interested}>Interested</Text>
        </View>
      </View>
    </View>
  </View>
  )
}

export default TodayEvents

const styles = StyleSheet.create({
    todayEventContainer: {
        width: "100%",
        marginBottom:verticalScale(20),
        height: verticalScale(234),
        paddingLeft: moderateScale(5),
        paddingRight: moderateScale(5),
        backgroundColor: "#FFFFFF",
        elevation: 5,
        shadowColor: "#C1C1C129",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
      },
      fontTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: scale(18),
        color: COLORS.black
      },
      headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: moderateScale(1),
        paddingRight: moderateScale(10),
    
      },
      viewAll: {
        fontFamily: "Poppins-Medium",
        fontSize: scale(14),
        color: COLORS.green
      },
      boxContainer: {
        height: verticalScale(202),
        padding: moderateScale(5),
        width: '100%',
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-start",
        borderWidth:1,
        borderColor: "#15AED6D1",
        borderRadius:moderateScale(15)
      },
      imageContainer: {
        width: scale(108),
        height: verticalScale(60),
        borderTopRightRadius: moderateScale(10),
        borderTopLeftRadius: moderateScale(10),
        overFlow: 'hidden',
        backgroundColor: 'red',
      },
      eventType: {
        width: scale(105),
        textAlign: "center",
        fontFamily: "Poppins-Medium",
        fontSize: scale(14),
      color:COLORS.eventColor
      },
      mainContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"space-around",
      },
      datails: {
        flex:1,
        width: "100%",
      },
    textFont: {
      fontFamily: "calibrib",
      fontSize: scale(18),
      color:COLORS.black
      
      },
      date: {
        fontFamily: "Poppins-Medium",
        fontSize: scale(10),
        color:COLORS.black
      },
      locationTextFont: {
        fontFamily: "Poppins-Medium",
        fontSize: scale(16),
        color:'#C5C5C5'
      },
      profileContainer: {
        width: '45%',
        flex:1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection:"row"
      },
      interested: {
        color:'#15AED6'
      },
      profile: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      profileBox: {
        width: scale(30),
        height: verticalScale(30),
        borderRadius: moderateScale(50),
        overflow:"hidden",
        alignItems: "center",
        justifyContent:"center"
        
  },
  imageStyle: {
    width: '100%',
    height:'100%',
    resizeMode: 'contain',
  },
  viewImage: {
    flex: 1,
    resizeMode:'contain'
  }
})