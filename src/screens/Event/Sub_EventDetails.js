import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Dropdown} from 'react-native-element-dropdown';
import { COLORS } from '../../common/constants';

const Sub_EventDetails = (props) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={{flex:1,backgroundColor:"white",marginTop:verticalScale(10),padding:moderateScale(20)}}>
      <Text style={{fontSize:moderateScale(14),fontFamily:"Roboto-Medium"}}>Sub Event Name</Text>
       <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Sangeet'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
      />
      <View style={{width:'100%',justifyContent:"center",alignItems:"flex-end",paddingRight:moderateScale(10)}}>
      <Text  style={{color:'#575757',fontFamily:"Roboto-Medium"}}>Remove</Text>
      </View>
         <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Reception'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <TouchableOpacity
          // onPress={e => setModalVisible(!isModalVisble)} 
          style={styles.addButtonContainer}
        >
            {/* <Image style={styles.addIconStyle} source={ICONS.addIcon}/> */}
            <Text style={styles.plusICon}>+</Text>
        </TouchableOpacity>
        <View style={{flex:1}}></View>
        <View style={{ width: '100%', height: verticalScale(60), marginTop:verticalScale(10), alignItems:"center",justifyContent:"center" }}>
            <TouchableOpacity
              onPress={()=>props.navigation.navigate('DetailsForm')}
              style={{ borderRadius: moderateScale(5), alignItems: "center", justifyContent: "center", width: '100%', height: verticalScale(52), backgroundColor: "#09F2DF" }}>
              <Text style={styles.buttonFont}>Next</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default Sub_EventDetails

const styles = StyleSheet.create({
  dropdown: {
    width: '100%',
    height: verticalScale(45),
    paddingLeft: scale(10),
    paddingRight: scale(10),
    backgroundColor: '#F7F7F9',
    marginTop: verticalScale(10),
  },
  placeholderStyle: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(14),
    color: '#B2B2B2',
  },
  selectedTextStyle: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(14),
  },
  fontStyles: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(16),
    color: '#4b4f53',
  },
  addButtonContainer:{
    height:scale(40),
    width:scale(40),
    position:'absolute',
    bottom:verticalScale(150),
    right:scale(20),
    borderRadius:verticalScale(100),
    backgroundColor:"#09F2DF",
    elevation: 10,
    alignItems:'center',
    justifyContent: 'center',
    zIndex:100,
  },
  plusICon:{
    fontSize:scale(29),
    color:'#FFF',
    fontWeight:'bold'
  },
  buttonFont: {
    fontFamily: "Roboto-Medium",
    fontSize:moderateScale(16)
  }
})