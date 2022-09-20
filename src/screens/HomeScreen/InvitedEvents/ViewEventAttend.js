import { StyleSheet, Text, View ,TouchableOpacity,ScrollView,Image} from 'react-native'
import React,{useState} from 'react'
import {Calendar, CalendarList , Agenda} from 'react-native-calendars';
import { COLORS, Scale ,IMAGE} from '../../../common/constants';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';


const ViewEventAttend = (props) => {
const[activeList , setActiveList]=useState('Attend')
// States
    return (
        <View style={styles.container}>
            <Image source={IMAGE.calender} style={styles.calendar}/>
            <View style={styles.headerTabBar}>
                <TouchableOpacity
                    onPress={()=>setActiveList('Attend')}
        style={[styles.leftWing,{backgroundColor:activeList == 'Attend' ? "#15AED6":'white'}]}
                >
                <Text style={activeList == 'Attend' ?[ styles.activeHeaderText]:[styles.deactiveHeaderText]}>Events to Attend</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>setActiveList('invited')}
                style={[styles.RightWing,{backgroundColor:activeList == 'invited' ? "#15AED6":'white'}]}
                >
                <Text style={activeList == 'invited' ?[ styles.activeHeaderText]:[styles.deactiveHeaderText]}>Invited Events</Text>
                </TouchableOpacity>
            </View>
         { activeList == 'Attend' ?  <ScrollView
    style={styles.subContainer}
    >
        <TouchableOpacity
                    onPress={()=>props.navigation.navigate('EventDetails')} style={styles.eventContainer}>
      <View style={styles.partyPhoto}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Anniversary party in Dubai</Text>
                <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}>GHODESHWER, UNITED KINGDOM</Text>
                    </View>
        </TouchableOpacity>
            </ScrollView> :
                <ScrollView
                style={styles.subContainer}
                >
                    <TouchableOpacity
                    onPress={()=>props.navigation.navigate('EventInvitedDetails')}
                        style={styles.eventContainer}>
                  <View style={styles.partyPhoto}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerTitle}>Anniversary party in Dubai</Text>
                            <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                            <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
                            <View style={styles.viewMange}>
                        <Text style={[styles.viewMangeFont,{color:'#048B9AF0',backgroundColor:"#D7FAFE"}]}>{'Attend'}</Text>
                            <Text style={[styles.viewMangeFont,{color:'#F61515',backgroundColor:"#FFEEEE"}]}>{'Not attend'}</Text>
                        <Text  style={[styles.viewMangeFont,{color:'#FFA26B',backgroundColor:"#fde7d9"}]}>{'may be attend'}</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    // onPress={()=>props.navigation.navigate('EventDetails')}
                        style={styles.eventContainer}>
                  <View style={styles.partyPhoto}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerTitle}>Anniversary party in Dubai</Text>
                            <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                            <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
                            <View style={styles.viewMange}>
                        <Text style={[styles.viewMangeFont,{color:'#048B9AF0',backgroundColor:"#D7FAFE"}]}>{'Attend'}</Text>
                            <Text style={[styles.viewMangeFont,{color:'#F61515',backgroundColor:"#FFEEEE"}]}>{'Not attend'}</Text>
                        <Text  style={[styles.viewMangeFont,{color:'#FFA26B',backgroundColor:"#fde7d9"}]}>{'may be attend'}</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    // onPress={()=>props.navigation.navigate('EventDetails')}
                        style={styles.eventContainer}>
                  <View style={styles.partyPhoto}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerTitle}>Anniversary party in Dubai</Text>
                            <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                            <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
                            <View style={styles.viewMange}>
                        <Text style={[styles.viewMangeFont,{color:'#048B9AF0',backgroundColor:"#D7FAFE"}]}>{'Attend'}</Text>
                            <Text style={[styles.viewMangeFont,{color:'#F61515',backgroundColor:"#FFEEEE"}]}>{'Not attend'}</Text>
                        <Text  style={[styles.viewMangeFont,{color:'#FFA26B',backgroundColor:"#fde7d9"}]}>{'may be attend'}</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                        </ScrollView>

  }
      </View>

  )
}

export default ViewEventAttend

const styles = StyleSheet.create({
    container: {
        paddingTop:verticalScale(5),
        flex: 1,
        backgroundColor:COLORS.primary
    },
    headerTabBar: {
        flex: 1,
        maxHeight: verticalScale(52),
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection:"row",
    },
    leftWing: {
        height: '100%',
         width:'50%',
        alignItems: "center",
        justifyContent: "center",
    },
    RightWing: {
        height: '100%',
        width: '50%',
        alignItems: "center",
        justifyContent: "center",
    },
    activeHeaderText: {
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(17),
        color: "white"
    },
    deactiveHeaderText: {
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(17),
        color: "black"
    },
    subContainer: {
        flex: 1,
        backgroundColor: COLORS.primary,
        padding:moderateScale(15)
    },
    eventContainer: {
        width: '100%',
        marginTop:verticalScale(8),
        height: verticalScale(116),
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white'
      },
      partyPhoto: {
        width: scale(70),
          height: verticalScale(104),
          backgroundColor: "red",
          overflow:'hidden',
        borderRadius:moderateScale(10)
    },
      
      headerContainer: {
          flex: 1,
        height: verticalScale(110),
          paddingLeft: moderateScale(10),
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
            fontSize: moderateScale(13),
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
        width: '90%',
        flexDirection: "row",
        justifyContent:"space-between",
    },
    viewMangeFont: {
        fontSize:moderateScale(10),
        fontFamily: "Poppins-Regular",
        padding: moderateScale(1),
        paddingLeft: moderateScale(5),
        paddingRight: moderateScale(5),
        borderRadius:moderateScale(20)
    },
    imageStyle: {
        width: '100%',
        height:'100%',
        resizeMode: 'stretch',
    },
    calendar: {
        width: '100%',
        height: verticalScale(60),
        resizeMode: 'stretch',
        marginTop: verticalScale(5),
        marginBottom:verticalScale(5)
    }
})