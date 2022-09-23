import { StyleSheet, Text, View ,TouchableOpacity,ScrollView,Image} from 'react-native'
import React,{useState} from 'react'
import { COLORS, Scale ,IMAGE} from '../../../common/constants';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



const ViewEventAttend = (props) => {
    const [activeList, setActiveList] = useState('Attend')
    const [activeCalender, setActiveCalender] = useState(false)
    const [CurrentDate, setCurrentDate] = useState( new Date())
    
    const date = String(CurrentDate).split(' ')
    console.log("CurrentDate", date);

  const  months = ["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", 
"November", "December"];
 
const weekDays = [
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
];
    const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return (
        <View style={styles.container}>
            {activeCalender == true ?
<Calendar
  // Initially visible month. Default = now
//   initialDate={'2012-03-01'}
//   // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//   minDate={'2012-05-10'}
//   // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//   maxDate={'2012-06-28'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MMM '}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
//   hideArrows={true}
//   // Replace default arrows with custom ones (direction can be 'left' or 'right')
//   renderArrow={direction => <Arrow />}
//   // Do not show days of other months in month page. Default = false
//   hideExtraDays={true}
//   // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
//   // day from another month that is visible in calendar page. Default = false
//   disableMonthChange={true}
//   // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
//   firstDay={1}
//   // Hide day names. Default = false
//   hideDayNames={true}
//   // Show week numbers to the left. Default = false
//   showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
//   disableArrowLeft={true}
//   // Disable right arrow. Default = false
//   disableArrowRight={true}
//   // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
//   disableAllTouchEventsForDisabledDays={true}
  // Replace default month and year title with custom one. the function receive a date as parameter
//   renderHeader={date => {
//     /*Return JSX*/
//   }}
  // Enable the option to swipe between months. Default = false
  markedDates={{
    '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
    '2012-05-17': {selected: true,marked: true,selectedColor: 'blue'},
    '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2012-05-19': {disabled: true, disableTouchEvent: true}
  }}
  enableSwipeMonths={true}
                /> :
                <TouchableOpacity
                    onPress={()=>setActiveCalender(true)}
                    style={{ width: "100%", height: verticalScale(55), justifyContent: "space-evenly", alignItems:"center",flexDirection:"row"}}
                >
                    <View style={styles.date}>
                    <Text style={styles.fontDate}>SUN</Text>
                    <Text style={styles.fontDate}>10</Text>
                    </View>
                    <View style={styles.date}>
                    <Text style={styles.fontDate}>MON</Text>
                    <Text style={{width:scale(20),height:verticalScale(20),backgroundColor:"#15AED6",borderRadius:moderateScale(50),textAlign:"center",color:"#FFFF"}}>20</Text>
                    </View>
                    <View style={styles.date}>
                    <Text style={styles.fontDate}>TUE</Text>
                    <Text style={styles.fontDate}>29</Text>
                    </View>
                    <View style={styles.date}>
                    <Text style={styles.fontDate}>WED</Text>
                    <Text style={styles.fontDate}>30</Text>
                    </View>
                    <View style={styles.date}>
                    <Text style={styles.fontDate}>THU</Text>
                    <Text style={styles.fontDate}>31</Text>
                    </View>
                    <View style={styles.date}>
                    <Text style={styles.fontDate}>FRI</Text>
                    <Text style={styles.fontDate}>01</Text>
                    </View>
                    <View style={styles.date}>
                    <Text style={styles.fontDate}>SAT</Text>
                    <Text style={styles.fontDate}>02</Text>
                    </View>
                </TouchableOpacity>
            }
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
    },
    date: {
        justifyContent: "center",
        alignItems:"center"
    },
    fontDate: {
        color:"#9A9A9A"
    }
})