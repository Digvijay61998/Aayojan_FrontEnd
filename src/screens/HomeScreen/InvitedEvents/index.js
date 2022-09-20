import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, IMAGE} from '../../../common/constants';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const InvitedEvents = ({props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.fontTitle}>Invited Events</Text>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate('ViewEventAttend')}
        >
          <Text style={styles.viewAll}>view all</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
    onPress={()=>props.navigation.navigate('EventDetails')}
      style={styles.eventContainer}>
        <View style={styles.partyPhoto}><Image source={IMAGE.man1} style={styles.imageStyle} /></View>
              <View style={styles.headerContainer}>
                  <Text style={styles.headerTitle}>Anniversary party in Dubai</Text>
                  <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
        </View>
              <View style={styles.menu}><Text style={{fontSize:moderateScale(40),bottom:verticalScale(22)}}>{'. .'}</Text></View>
      </TouchableOpacity>
      <View style={styles.eventContainer}>
        <View style={styles.partyPhoto}><Image source={IMAGE.lorem} style={styles.imageStyle} /></View>
              <View style={styles.headerContainer}>
                  <Text style={styles.headerTitle}>Anniversary party in Dubai</Text>
                  <Text style={styles.dateFont}>Thu, Aug 25 at 06:30 PM</Text>
                  <Text style={styles.locationTextFont}> LONDON, UNITED KINGDOM</Text>
        </View>
              <View style={styles.menu}><Text style={{fontSize:moderateScale(40),bottom:22}}>{'. .'}</Text></View>
      </View>
    </View>
  );
};

export default InvitedEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: verticalScale(278),
    backgroundColor: COLORS.primary,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    height: verticalScale(40),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  viewAll: {
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(16),
    color: COLORS.green,
  },
  fontTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(21),
    color: COLORS.black,
  },
  eventContainer: {
    width: '100%',
    height: verticalScale(116),
    padding: moderateScale(10),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  partyPhoto: {
    width: scale(70),
    overflow:"hidden",
      height: verticalScale(104),
    borderRadius:moderateScale(12)
  },
  headerContainer: {
      flex: 2,
    height: verticalScale(104),
      padding: moderateScale(10),
    justifyContent:"space-evenly",alignItems:"flex-start"
  },
  menu: {
    flex: 0.4,
      height: verticalScale(104),
      alignItems: "flex-end",
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
        height: verticalScale(24)
  },
  imageStyle: {
    width: '100%',
    height:'100%',
    resizeMode:'cover',
}
});
