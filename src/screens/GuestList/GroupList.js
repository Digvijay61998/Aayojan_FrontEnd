import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {scale, verticalScale} from 'react-native-size-matters';
import {ICONS, IMAGE} from '../../common/constants';

const data = [
  {
    groupName: "Kappoor's family",
    guestList: ['Rohit Kapoor', 'Shivansh Kapoor'],
  },
  {
    groupName: "Kappoor's family",
    guestList: ['Rohit Kapoor', 'Shivansh Kapoor'],
  },
];

const GroupList = () => {
  const [currentSelctedELement, setCurrentSelectedElement] = useState();
  return (
    <View style={styles.container}>
      {data.map((group, index) => {
        return (
          <View style={styles.groupContainer}>
            <TouchableOpacity onPress={e=> setCurrentSelectedElement(index)} style={styles.baseContainer}>
            <View style={styles.leftSide}>
              <Image source={IMAGE.groupIcon} style={styles.groupImage} />
              <View>
                <Text style={styles.groupName}>{group.groupName}</Text>
                <Text style={styles.numberOfGuest}>
                  {group.guestList.length} guests
                </Text>
              </View>
            </View>
            <Image source={ICONS.forwardArrow} style={styles.forwardArrow} />
            </TouchableOpacity>
            <View style={styles.border}></View>
            <View styles={styles.contactContainer}>
                {group.guestList.map((contact,index1)=>{
                  if(currentSelctedELement == index)
                    {return(
                        <View style={styles.contactItem}>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <CheckBox />
                            <Text style={{marginLeft:scale(5)}}>{contact}</Text>
                            </View>
                            <View style={styles.dot}></View>
                        </View>
                    )}
                })}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default GroupList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: verticalScale(20),
  },
  groupContainer: {
    backgroundColor: '#FFF',
    marginBottom: verticalScale(10),
    borderRadius: 10,
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
  },
  baseContainer:{
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor:'rgba(110, 110, 110, 0.1)',
    borderBottomWidth:1,
    paddingBottom:5
  },
  groupImage: {
    height: scale(20),
    width: scale(20),
    marginRight: 15,
  },
  groupName: {
    fontSize: scale(15),
  },
  numberOfGuest: {
    color: '#D4D4D4',
  },
  forwardArrow: {
    height: scale(15),
    width: scale(15),
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactItem:{
    borderBottomColor:'rgba(110, 110, 110, 0.1)',
    borderBottomWidth:1,
    paddingHorizontal: scale(25),
    paddingVertical:verticalScale(10),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },dot:{
    backgroundColor:'green',
    height:scale(10),
    width:scale(10),
    borderRadius:500
  },
});
