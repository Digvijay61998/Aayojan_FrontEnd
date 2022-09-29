import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS} from '../../common/constants';

const AddNewContact = () => {
  const [state, setState] = useState('Attending');
  const [age, setAge] = useState('Adult');
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
    <ScrollView style={styles.container}>
      <TextInput placeholder="Name" style={styles.InputContainer} />
      <TextInput placeholder="Last Name" style={styles.InputContainer} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => setState('Attending')}
          style={[
            styles.headerButton,
            {backgroundColor: state == 'Attending' ? '#09F2DF' : '#09F2DF1F'},
          ]}>
          <Text style={styles.HeaderFont}>Attending</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setState('Pending')}
          style={[
            styles.headerButton,
            {backgroundColor: state == 'Pending' ? '#09F2DF' : '#09F2DF1F'},
          ]}>
          <Text style={styles.HeaderFont}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setState('Declined')}
          style={[
            styles.headerButton,
            {backgroundColor: state == 'Declined' ? '#09F2DF' : '#09F2DF1F'},
          ]}>
          <Text style={styles.HeaderFont}>Declined</Text>
        </TouchableOpacity>
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
        placeholder={'Select Group'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <TextInput placeholder="Email" style={styles.InputContainer} />
      <TextInput
        placeholder="Telephone"
        keyboardType="number-pad"
        style={styles.InputContainer}
      />
      <TextInput
        placeholder="Address"
        style={styles.InputContainer}
        multiline={true}
        numberOfLines={4}
      />
  <View style={{alignItems:'center',marginBottom:verticalScale(20)}}>
      <View
        style={{
          width: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '40%',
            marginTop: verticalScale(10),
          }}>
          <TouchableOpacity
            onPress={() => {
              setSubEvent('male');
            }}
            style={styles.buttons}>
            {subEvent == 'male' && (
              <View
                style={{
                  width: scale(10),
                  height: verticalScale(10),
                  borderRadius: moderateScale(50),
                  backgroundColor: '#09F2DF',
                }}></View>
            )}
          </TouchableOpacity>
          <Text
            style={{
              fontSize: moderateScale(14),
              fontFamily: 'Poppins-Medium',
              color:'#999999'
            }}>
            Male
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '40%',
            marginTop: verticalScale(10),
          }}>
          <TouchableOpacity
            onPress={() => setSubEvent('female')}
            style={styles.buttons}>
            {subEvent == 'female' && (
              <View
                style={{
                  width: scale(10),
                  height: verticalScale(10),
                  borderRadius: moderateScale(50),
                  backgroundColor: '#09F2DF',
                }}></View>
            )}
          </TouchableOpacity>
          <Text
            style={{
              fontSize: moderateScale(14),
              fontFamily: 'Poppins-Medium',
              marginLeft:scale(10),
              color:'#999999'
            }}>
            Female
          </Text>
        </View>
      </View>
      </View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => setAge('Adult')}
          style={[
            styles.headerButton,
            {backgroundColor: age == 'Adult' ? '#09F2DF' : '#09F2DF1F'},
          ]}>
          <Text style={styles.HeaderFont}>Adult</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setAge('Child')}
          style={[
            styles.headerButton,
            {backgroundColor: age == 'Child' ? '#09F2DF' : '#09F2DF1F'},
          ]}>
          <Text style={styles.HeaderFont}>Child</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setAge('Baby')}
          style={[
            styles.headerButton,
            {backgroundColor: age == 'Baby' ? '#09F2DF' : '#09F2DF1F'},
          ]}>
          <Text style={styles.HeaderFont}>Baby</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddNewContact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: verticalScale(10),
    padding: verticalScale(20),
  },
  InputContainer: {
    backgroundColor: '#5129620D',
    fontSize: scale(15),
    paddingHorizontal: scale(15),
    marginBottom: verticalScale(20),
  },
  headerContainer: {
    // marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
    // backgroundColor: "#F9F8F7",
    width: '100%',
    height: verticalScale(32),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  headerButton: {
    backgroundColor: '#09F2DF1F',
    width: scale(80),
    height: verticalScale(32),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  dropdown: {
    width: '100%',
    height: verticalScale(45),
    // borderWidth: 1,
    // borderColor: '#BCBCBC',
    paddingLeft: scale(10),
    paddingRight: scale(10),
    backgroundColor: '#5129620D',
    marginBottom: verticalScale(20),
  },
  HeaderFont: {
    fontSize: moderateScale(12),
    fontFamily: 'Poppins-Regular',
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
    borderColor:'#09F2DF'
  },
  saveButton:{
    marginTop:verticalScale(16),
    alignSelf:'center',
    width:'80%',
    backgroundColor:'#09F2DF',
    paddingVertical:verticalScale(6),
    marginBottom:verticalScale(20)
  },
  buttonText:{
    textAlign:'center',
    fontSize:moderateScale(19)
  }
});
