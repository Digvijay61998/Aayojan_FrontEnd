import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLORS, IMAGE} from '../../../common/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EventDetails = (props) => {
  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.container}>
        <Image source={IMAGE.lorem} style={styles.headerImageStyle} />
        <View style={styles.content}>
          <Text style={styles.headerText}>Vishal Wedding</Text>
          <Text style={styles.dateText}>Thu, Aug 30 at 08:30 PM</Text>
          <Text style={styles.loactionText}>GHODESHWER, united kingdom</Text>
        </View>
      </View>
      <View style={styles.header}>
        <Text
          style={{
            color: '#15AED6',
            fontSize: moderateScale(16),
            fontWeight: 'bold',
            fontFamily: 'Poppins-Bold',
          }}>
          Sub Events
        </Text>
      </View>
      <View style={styles.scrollView}>
        <TouchableOpacity
          onPress={()=>props.navigation.navigate('SubEventDetails')}
          style={styles.boxContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGE.lorem1} style={styles.subImageStyle} />
          </View>
          <Text style={[styles.fontstyle, {color: '#686868'}]}>Ceremoney</Text>
          <Text style={styles.fontstyle}>Thu Aug 30 at 05:30 PM</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate('SubEventDetails')}
        style={styles.boxContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGE.lorem} style={styles.subImageStyle} />
          </View>
          <Text style={[styles.fontstyle, {color: '#686868'}]}>Ceremoney</Text>
          <Text style={styles.fontstyle}>Thu Aug 30 at 05:30 PM</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate('SubEventDetails')}
        style={styles.boxContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGE.lorem2} style={styles.subImageStyle} />
          </View>
          <Text style={[styles.fontstyle, {color: '#686868'}]}>Ceremoney</Text>
          <Text style={styles.fontstyle}>Thu Aug 30 at 05:30 PM</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate('SubEventDetails')}
        style={styles.boxContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGE.lorem1} style={styles.subImageStyle} />
          </View>
          <Text style={[styles.fontstyle, {color: '#686868'}]}>Ceremoney</Text>
          <Text style={styles.fontstyle}>Thu Aug 30 at 05:30 PM</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate('SubEventDetails')}
        style={styles.boxContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGE.lorem2} style={styles.subImageStyle} />
          </View>
          <Text style={[styles.fontstyle, {color: '#686868'}]}>Ceremoney</Text>
          <Text style={styles.fontstyle}>Thu Aug 30 at 05:30 PM</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity 
          onPress={()=>props.navigation.navigate('ViewInvitationCard')}
        style={[styles.buttonContainer, { backgroundColor: '#E9F9F4' }]}>
          <Text
            style={{
              color: '#0BCF92',
              fontSize: scale(12),
              fontFamily: 'Poppins-Bold',
            }}>
            View invitation card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>props.navigation.navigate('TravelDetail')}
          
          style={[styles.buttonContainer, { backgroundColor: '#FCFFE3' }]}>
          <Text
            style={{
              color: '#95A704',
              fontSize: scale(12),
              fontFamily: 'Poppins-Bold',
            }}>
            Add travel plan
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    flexDirection: 'column',
  },
  container: {
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
  headerText: {
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
  header: {
    width: '100%',
    height: verticalScale(40),
    marginTop: verticalScale(10),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  boxContainer: {
    width: scale(161),
    height: verticalScale(110),
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    marginTop: verticalScale(10),
    marginLeft: verticalScale(10),
  },
  scrollView: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '100%',
    height: verticalScale(70),
    overflow: 'hidden',
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
  fontstyle: {
    fontFamily: 'calibrib',
    color: '#adadad',
    fontSize: moderateScale(14),
  },
  subImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  footerContainer: {
    marginTop: verticalScale(15),
    width: '100%',
    height: verticalScale(60),
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(140),
    height: verticalScale(40),
    borderRadius: moderateScale(10),
  },
});
