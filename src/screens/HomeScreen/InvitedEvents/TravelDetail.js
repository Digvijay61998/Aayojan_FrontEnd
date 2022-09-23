import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React,{useState} from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { COLORS } from '../../../common/constants'
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const TravelDetail = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState('car')
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState(null);

    const data = [
        { label: 'item', value: '1' },
        { label: 'item', value: '2' },
        { label: 'item', value: '3' },
      { label: 'item', value: '4' },
      { label: 'item', value: '5' },
      { label: 'item', value: '6' },
      ];
  return (
      <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
              <View style={styles.checkBoxContainer}>
              <TouchableOpacity
                      style={styles.check}
    onPress={() => setToggleCheckBox('car')}
                  >
                      {toggleCheckBox == 'car' && <View style={{ width: scale(10), height: verticalScale(10), backgroundColor: "#0FDAE9", borderRadius: scale(50) }}></View>}
                  </TouchableOpacity>
              <Text style={styles.fontStyle}>By Car (Self)</Text>
              </View>
              <View style={styles.checkBoxContainer}>
                  <TouchableOpacity
                      style={styles.check}
    onPress={() => setToggleCheckBox('train')}
                  >
                      {toggleCheckBox == 'train' && <View style={{ width: scale(10), height: verticalScale(10), backgroundColor: "#0FDAE9", borderRadius: scale(50) }}></View>}
                  </TouchableOpacity>
              <Text style={styles.fontStyle}>By Train</Text>
              </View>
              <View style={styles.checkBoxContainer}>
              <TouchableOpacity
                      style={styles.check}
    onPress={() => setToggleCheckBox('air')}
                  >
                      {toggleCheckBox == 'air' && <View style={{ width: scale(10), height: verticalScale(10), backgroundColor: "#0FDAE9", borderRadius: scale(50) }}></View>}
                  </TouchableOpacity>
              <Text style={styles.fontStyle}>By Air</Text>
              </View>
              <View style={styles.checkBoxContainer}>
              <TouchableOpacity
                      style={styles.check}
    onPress={() => setToggleCheckBox('bus')}
                  >
                      {toggleCheckBox == 'bus' && <View style={{ width: scale(10), height: verticalScale(10), backgroundColor: "#0FDAE9", borderRadius: scale(50) }}></View>}
                  </TouchableOpacity>
              <Text style={styles.fontStyle}>By Bus</Text>
              </View>
          </View>
{  toggleCheckBox !=  'bus' && <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={[styles.placeholderStyle]}
          selectedTextStyle={[styles.selectedTextStyle]}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={ 'Select guest'}
          searchPlaceholder="Search..."
          value={value?.value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item);
            setIsFocus(false);
          }}
          
          />}
   {   toggleCheckBox == 'car' &&       <TextInput
                        style={[styles.input]}
                        onChangeText={(val)=>''}
                        // value={number}
                        placeholderTextColor='#8A8A8A'
                        placeholder="Car number"
                        keyboardType="alphabet"
          />}
    {   toggleCheckBox == 'train' &&  <TextInput
                        style={[styles.input]}
                        onChangeText={(val)=>''}
                        // value={number}
                        placeholderTextColor='#8A8A8A'
                        placeholder="Train number"
                        keyboardType="alphabet"
          />}
              {   toggleCheckBox == 'train' &&  <TextInput
                        style={[styles.input]}
                        onChangeText={(val)=>''}
                        // value={number}
                        placeholderTextColor='#8A8A8A'
                        placeholder="Birth number"
                        keyboardType="alphabet"
          />}

              {   toggleCheckBox == 'air' &&  <TextInput
                        style={[styles.input]}
                        onChangeText={(val)=>''}
                        // value={number}
                        placeholderTextColor='#8A8A8A'
                        placeholder="Train number"
                        keyboardType="alphabet"
          />}
              {   toggleCheckBox == 'air' &&  <TextInput
                        style={[styles.input]}
                        onChangeText={(val)=>''}
                        // value={number}
                        placeholderTextColor='#8A8A8A'
                        placeholder="Flight operator name"
                        keyboardType="alphabet"
          />}

                  {   toggleCheckBox == 'bus' &&  <TextInput
                        style={[styles.input]}
                        onChangeText={(val)=>''}
                        // value={number}
                        placeholderTextColor='#8A8A8A'
                        placeholder="Bus Operator Name"
                        keyboardType="alphabet"
          />}
              {   toggleCheckBox == 'bus' &&  <TextInput
                        style={[styles.input]}
                        onChangeText={(val)=>''}
                        // value={number}
                        placeholderTextColor='#8A8A8A'
                        placeholder="Bus Number"
                        keyboardType="alphabet"
          />}
          <View style={styles.fromLoction}>
              <View style={styles.select}></View>
              <View  style={styles.textContainer}>
              <Text style={{color:"#F59523",fontSize:moderateScale(14)}}>From</Text>
              <Text>52, Desai Village, sector 150</Text>
              </View>
          </View>
          <View style={styles.fromLoction}>
              <View style={styles.select}></View>
              <View  style={styles.textContainer}>
              <Text style={{color:"#F59523",fontSize:moderateScale(14)}}>To</Text>
              <Text>52, Desai Village, sector 150</Text>
              </View>
          </View>
          <TextInput
                        style={[styles.input]}
                        onChangeText={(val)=>''}
                        // value={number}
                        placeholderTextColor='#0D1724'
                        placeholder="16-08-2022"
                        keyboardType="alphabet"
          />
                 <TextInput
                        style={[styles.input]}
                        onChangeText={(val)=>''}
                        // value={number}
                        placeholderTextColor='#0D1724'
                        placeholder="00:00 AM"
                        keyboardType="alphabet"
          />
          <TextInput
              style={styles.textArea}
              placeholder="Comment"
   multiline={true}
   numberOfLines={12}
              textAlignVertical="top" />
          <View  style={styles.buttonContainer}>
          <TouchableOpacity
          style={styles.button}
          >
              <Text style={{fontFamily:"Poppins-Medium"}}>Add</Text>
          </TouchableOpacity>
          </View>
         
    </ScrollView>
  )
}

export default TravelDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:verticalScale(10),
        padding: scale(10),
        backgroundColor:COLORS.primary
    },
    headerContainer: {
        width: "100%",
        height: verticalScale(38),
        backgroundColor: "white",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection:"row"
        
    },
    dropdown: {
        height: scale(50),
        width: '100%',
        marginTop:verticalScale(10),
        borderRadius:moderateScale(30),
        backgroundColor: "white",
        color: "black",
        paddingLeft:scale(15),
        paddingHorizontal: 8,
        fontSize: scale(16),
        fontFamily:"Montserrat-Medium"
    },
    placeholderStyle:{
    color:'#8A8A8A'
    },
    fontStyle: {
        color: "#4D4D4D",
        fontFamily: "Roboto-Medium",
        marginLeft:scale(5)
    },
    input: {
        width: '100%',
        fontSize:moderateScale(14),
        paddingLeft:scale(15),
        height: verticalScale(50),
        backgroundColor: "white",
        borderRadius: moderateScale(30),
        marginTop:verticalScale(10),
    },
    fromLoction: {
        width: '100%',
        marginTop:verticalScale(10),
        height: verticalScale(74),
        backgroundColor: 'white',
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"row"
    },
    select: {
        width: scale(6),
        height: verticalScale(6),
        borderRadius: moderateScale(50),
        borderWidth: moderateScale(5),
        borderColor:'#F59523'
    },
    textContainer: {
        left:scale(20)
    },
    textArea: {
        width: '100%',
        paddingLeft:scale(15),
        height: verticalScale(100),
        backgroundColor: "white",
        borderRadius: moderateScale(10),
        marginTop:verticalScale(10),
    },
    button: {
        width: scale(133),
        height: verticalScale(55),
        backgroundColor: "#09F2DF",
        borderRadius: moderateScale(100),
        alignItems: "center",
        justifyContent:"center"
        
    },
    buttonContainer: {
        width: '100%',
        height: verticalScale(150),
        alignItems: "center",
        justifyContent:"center"
    },
    checkBoxContainer: {
        alignItems: "center",
        justifyContent:"center",
        flexDirection:"row"
    },
    check: {
        width: scale(15),
        height: verticalScale(15),
        borderColor: '#0FDAE9',
        borderWidth: scale(1),
        borderRadius: scale(10),
        alignItems: "center",
        justifyContent:"center"
    }

})