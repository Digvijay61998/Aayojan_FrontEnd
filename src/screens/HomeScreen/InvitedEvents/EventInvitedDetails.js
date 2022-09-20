import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLORS, IMAGE} from '../../../common/constants';

const EventInvitedDetails = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.container}>
              <Image source={IMAGE.lorem} style={styles.headerImageStyle} />
              <View style={{ width:'100%', left:scale(40), flexDirection: "row" ,alignItems:"center",justifyContent:"center",paddingTop:scale(10)}}>
                  <View style={{ width: scale(60), height: verticalScale(90),borderRadius: moderateScale(10),overflow:'hidden'}}>
                      <Image source={IMAGE.lorem1} style={styles.subImageStyle}/></View>
        <View style={styles.content}>
          <Text style={styles.headerText}>Vishal Wedding Events</Text>
          <Text style={styles.dateText}>Thu, Aug 30 at 08:30 PM</Text>
          <Text style={styles.loactionText}>GHODESHWER, united kingdom</Text>
        </View>
              </View>
      </View>
      <View style={styles.header}>
        <Text
          style={{
            color: '#15AED6',
                      fontSize: moderateScale(16),
            fontWeight:'bold',
            fontFamily: 'Poppins-SemiBold',
          }}>
          Sub Events
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.boxContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGE.lorem1} style={styles.subImageStyle} />
          </View>
          <Text style={[styles.fontstyle, {color: '#686868'}]}>Ceremoney</Text>
          <Text style={styles.fontstyle}>Thu Aug 30 at 05:30 PM</Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGE.lorem} style={styles.subImageStyle} />
          </View>
          <Text style={[styles.fontstyle, {color: '#686868'}]}>Ceremoney</Text>
          <Text style={styles.fontstyle}>Thu Aug 30 at 05:30 PM</Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGE.lorem2} style={styles.subImageStyle} />
          </View>
          <Text style={[styles.fontstyle, {color: '#686868'}]}>Ceremoney</Text>
          <Text style={styles.fontstyle}>Thu Aug 30 at 05:30 PM</Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGE.lorem1} style={styles.subImageStyle} />
          </View>
          <Text style={[styles.fontstyle, {color: '#686868'}]}>Ceremoney</Text>
          <Text style={styles.fontstyle}>Thu Aug 30 at 05:30 PM</Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMAGE.lorem2} style={styles.subImageStyle} />
          </View>
          <Text style={[styles.fontstyle, {color: '#686868'}]}>Ceremoney</Text>
          <Text style={styles.fontstyle}>Thu Aug 30 at 05:30 PM</Text>
        </View>
          </ScrollView>
          <Text>asd</Text>
    </View>
  );
};

export default EventInvitedDetails;

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
    height: verticalScale(110),
    resizeMode: 'stretch',
    borderTopLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  content: {
    width: '100%',
    height: verticalScale(80),
      padding: scale(5),
      paddingLeft:scale(20),
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
    color: '#FFBA91',
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
    height: verticalScale(100),
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    marginTop: verticalScale(10),
    marginLeft: verticalScale(10),
  },
  scrollView: {
    width: '100%',
    flexWrap: 'wrap',
    height: verticalScale(250),
    flexDirection: 'row',
  },
  imageContainer: {
    width: '100%',
    height: verticalScale(60),
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
});
