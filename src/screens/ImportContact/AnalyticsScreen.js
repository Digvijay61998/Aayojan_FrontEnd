import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMAGE} from '../../common/constants';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const AnalyticsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.firstContainer}>
          <View styles={styles.TextContainer}>
            <Text style={styles.TextStyles}>Guest Management</Text>
          </View>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity
            onPress={e => props.navigation.navigate('AnalyticsScreen')}>
            <Text style={styles.TextStyles}>Analytics</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.analyticsContainer}>
        <View
          style={{
            width: '40%',
            backgroundColor: '#DE18180D',
            marginHorizontal:"5%",
           marginVertical:"2%",
            borderColor: '#DE1818',
            borderWidth: 0.7,
            paddingVertical: verticalScale(10),
            paddingHorizontal: scale(10),
            borderRadius:5
          }}>
          <Image source={IMAGE.groupIcon} style={styles.groupImage} />
          <Text>Invited Guest</Text>
          <Text style={{fontSize: scale(20), fontWeight: '500', color: 'red'}}>
            250
          </Text>
          <View style={styles.BottomContainer}>
            <Text style={styles.bottomText}>
              Child <Text style={styles.highlightedText}>150</Text>
            </Text>
            <Text style={styles.bottomText}>
              Adult <Text style={styles.highlightedText}>100</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            width:'40%',
            backgroundColor:'#009DFF0D',
            marginHorizontal:"5%",
           marginVertical:"2%",
            borderColor:'#009DFF',
            borderWidth:0.7,
            paddingVertical:verticalScale(10),
            paddingHorizontal:scale(10),
            borderRadius:5
          }}>
          <Image source={IMAGE.groupIcon} style={styles.groupImage} />
          <Text>Attending</Text>
          <Text
            style={{fontSize: scale(20), fontWeight: '500', color: '#009DFF '}}>
            250
          </Text>
          <View style={styles.BottomContainer}>
            <Text style={{
              fontSize: moderateScale(10),
              color: '#0688D9',
            }}>
              Child <Text style={styles.highlightedText}>150</Text>
            </Text>
            <Text style={{
              fontSize: moderateScale(10),
              color: '#0688D9',
            }}>
              Adult <Text style={styles.highlightedText}>100</Text>
            </Text>
          </View>
        </View>
        <View style={{
           width:'40%',
           backgroundColor:'#FFCE000D',
           marginHorizontal:"5%",
           marginVertical:"2%",
           borderColor:'#FFCE00',
           borderWidth:0.7,
           paddingVertical:verticalScale(10),
           paddingHorizontal:scale(10),
           borderRadius:5
        }}>
          <Image source={IMAGE.groupIcon} style={styles.groupImage} />
          <Text>May be attend</Text>
          <Text
            style={{fontSize: scale(20), fontWeight: '500', color:'#FFCE00'}}>
            250
          </Text>
          <View style={styles.BottomContainer}>
            <Text style={{
              fontSize: moderateScale(10),
              color: '#E2B90D',
            }}>
              Child <Text style={styles.highlightedText}>150</Text>
            </Text>
            <Text style={{
              fontSize: moderateScale(10),
              color: '#E2B90D',
            }}>
              Adult <Text style={styles.highlightedText}>100</Text>
            </Text>
          </View>
        </View>
        <View style={{
           width:'40%',
           backgroundColor:'#FF00EE0D',
           marginHorizontal:"5%",
           marginVertical:"2%",
           borderColor:'#FF00EE',
           borderWidth:0.7,
           paddingVertical:verticalScale(10),
           paddingHorizontal:scale(10),
           borderRadius:5
        }}>
          <Image source={IMAGE.groupIcon} style={styles.groupImage} />
          <Text>May be attend</Text>
          <Text
            style={{fontSize: scale(20), fontWeight: '500', color:'#FF00EE'}}>
            250
          </Text>
          <View style={styles.BottomContainer}>
            <Text style={{
              fontSize: moderateScale(10),
              color: '#FF00EE',
            }}>
              Child <Text style={styles.highlightedText}>150</Text>
            </Text>
            <Text style={{
              fontSize: moderateScale(10),
              color: '#FF00EE',
            }}>
              Adult <Text style={styles.highlightedText}>100</Text>
            </Text>
          </View>
        </View>
        <View style={{
           width:'40%',
           backgroundColor:'#FF99000D',
           marginHorizontal:"5%",
           marginVertical:"2%",
           borderColor:'#FF9900',
           borderWidth:0.7,
           paddingVertical:verticalScale(10),
           paddingHorizontal:scale(10),
           borderRadius:5
        }}>
          <Image source={IMAGE.groupIcon} style={styles.groupImage} />
          <Text>Not viewed yet</Text>
          <Text
            style={{fontSize: scale(20), fontWeight: '500', color:'#FF9900'}}>
            250
          </Text>
          <View style={styles.BottomContainer}>
            <Text style={{
              fontSize: moderateScale(10),
              color: '#FF9900',
            }}>
              Child <Text style={styles.highlightedText}>150</Text>
            </Text>
            <Text style={{
              fontSize: moderateScale(10),
              color: '#FF9900',
            }}>
              Adult <Text style={styles.highlightedText}>100</Text>
            </Text>
          </View>
        </View>
      </View>
        <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.buttonText}>Guest List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    height: verticalScale(50),
    backgroundColor: '#FFF',
    flexDirection: 'row',
    marginVertical: verticalScale(10),
    justifyContent: 'space-between',
  },
  searchIcon: {
    height: scale(20),
    width: scale(20),
  },
  firstContainer: {
    flexDirection: 'row',
    width: scale(180),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: scale(15),
  },
  TextStyles: {
    fontSize: scale(16),
    fontFamily: 'Metropolis',
    fontWeight: '600',
  },
  TextContainer: {
    height: '100%',
    width: scale(20),
    borderBottomColor: '#3DBA91',
    borderBottomWidth: 3,
    backgroundColor: 'red',
  },
  secondContainer: {
    flexDirection: 'row',
    width: scale(180),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: scale(15),
  },
  analyticsContainer: {
    backgroundColor: '#FFF',
    margin: scale(15),
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical:verticalScale(10),
    elevation:5
  },
  analyticsContainerChild: {
    width: '40%',
    backgroundColor: '#DE18180D',
    margin: '5%',
    borderColor: '#DE1818',
    borderWidth: 0.7,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
  },
  groupImage: {
    width: scale(35),
    height: scale(30),
    marginBottom: verticalScale(8),
  },
  BottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomText: {
    fontSize: moderateScale(10),
    color: '#F91717',
  },
  highlightedText: {
    fontSize: moderateScale(12),
    fontWeight: '600',
  }, saveButton:{
    marginTop:verticalScale(16),
    alignSelf:'center',
    width:'90%',
    backgroundColor:'#09F2DF',
    paddingVertical:verticalScale(6),
    marginBottom:verticalScale(20),
  },
  buttonText:{
    textAlign:'center',
    fontSize:moderateScale(19)
  }
});
