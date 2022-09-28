import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLORS} from '../../common/constants';

const GuestsList = (props) => {
  const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [subEvent, setSubEvent] = useState('no');
    
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
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View
        style={{
          marginTop: verticalScale(15),
          backgroundColor: 'white',
          alignItems: 'flex-start',
          padding: moderateScale(20),
          justifyContent: 'flex-start',
        }}>
        <Text
          style={{fontSize: moderateScale(14), fontFamily: 'Poppins-Medium'}}>
          How many times tou have to call to yoyr guests
        </Text>
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
          placeholder={'City'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <Text
          style={styles.textfont}>
          Do you want add sub event ?
        </Text>
        <View
          style={{
            width: '40%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection:"row",justifyContent:"space-between",width:'40%',marginTop:verticalScale(10)}}>
                      <TouchableOpacity
                          onPress={() =>
                          {
                              setSubEvent('yes'),
                            props.navigation.navigate('Sub_EventDetails')
                            }}
                          style={styles.buttons}>
              {subEvent == 'yes' && <View
                style={{
                  width: scale(10),
                  height: verticalScale(10),
                  borderRadius: moderateScale(50),
                  backgroundColor: '#5093FE',
                }}></View>}
            </TouchableOpacity>
                      <Text style={{
                fontSize: moderateScale(14),
            fontFamily: 'Poppins-Medium',
            }}>Yes</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",width:'40%',marginTop:verticalScale(10)}}>
                      <TouchableOpacity
                          onPress={()=>setSubEvent('no')}
                          style={styles.buttons}>
                          {subEvent == 'no' && <View
                              style={{
                                width: scale(10),
                                height: verticalScale(10),
                                borderRadius: moderateScale(50),
                                backgroundColor: '#5093FE',
                              }}></View>}
            </TouchableOpacity>
            <Text style={{
                fontSize: moderateScale(14),
            fontFamily: 'Poppins-Medium',
            }}>No</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GuestsList;

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
    fontFamily: 'Poppins-Medium',
    fontSize: scale(14),
    color: '#B2B2B2',
  },
  selectedTextStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(14),
  },
  fontStyles: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(16),
    color: '#4b4f53',
  },
  buttons: {
    width: scale(15),
    height: verticalScale(15),
    borderRadius: moderateScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: COLORS.primary,
    padding: moderateScale(10),
    },
    textfont: {
            marginTop: verticalScale(30),
            fontSize: moderateScale(14),
            fontFamily: 'Poppins-Medium',
  }
});
