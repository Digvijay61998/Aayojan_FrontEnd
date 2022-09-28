import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native'
import React,{useState} from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { ICONS } from '../../common/constants'
import { Dropdown } from 'react-native-element-dropdown';

const BirthdayEvent = ({props}) => {
    console.log("props",props);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];
  return (
      <View style={{flex:1,flexDirection:"column"}}>
          <Text style={styles.HeaderFont}>Event Title</Text>
                     <TextInput
                   style={[styles.input,{borderColor:'#000000'}]}
                   name="email"
                   keyboardType='email-address'
                  //  value={values.email}
                  //  onChangeText={handleChange('email')}
                   placeholderTextColor="#1D2226"
                   autoComplete="cc-number"
          />
          <View style={{ justifyContent: "space-between", alignItems: "flex-start", flexDirection: "row" }}>
              <View style={{ justifyContent: "space-around", flexDirection: "column", alignItems: "center",width:'45%' ,height:verticalScale(200) }}>
                  <View style={{width:'100%'}}>
                  <Text style={styles.HeaderFont}>Start Date</Text>
              <TouchableOpacity
              style={styles.input}
              >
                      <Image source={ICONS.calendar} style={styles.iconsStyle }/>
                  <Text >{'28/08/2022'}</Text>
              </TouchableOpacity>
                  </View>
                  <View style={{ width: '100%' }}>
                  <Text style={styles.HeaderFont}>Start Date</Text>
              <TouchableOpacity
              style={styles.input}
                      >
                      <Image source={ICONS.calendar} style={styles.iconsStyle }/>
                  <Text >{'28/08/2022'}</Text>
              </TouchableOpacity>
                  </View>
              </View>
              <View style={{ justifyContent: "space-around", flexDirection: "column", alignItems: "center",width:'45%',height:verticalScale(200) }}>
                  <View style={{width:'100%'}}>
                  <Text style={styles.HeaderFont}>Start Date</Text>
              <TouchableOpacity
              style={styles.input}
                      >
                      <Image source={ICONS.calendar} style={styles.iconsStyle }/>
                  <Text >{'28/08/2022'}</Text>
              </TouchableOpacity>
                  </View>
                  <View style={{width:'100%'}}>
                  <Text style={styles.HeaderFont}>Start Date</Text>
              <TouchableOpacity
              style={styles.input}
                      >
                      <Image source={ICONS.calendar} style={styles.iconsStyle }/>
                  <Text >{'28/08/2022'}</Text>
              </TouchableOpacity>
                  </View>
              </View>
              
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
          <View style={{width:'100%',height:verticalScale(137),alignItems:"center",justifyContent:"center"}}>
              <Image source={ICONS.Upload} style={{ width: scale(60), height: verticalScale(60)}} />
              <Text style={{ fontSize: moderateScale(14), color:'black',fontFamily:"Poppins-Medium",fontWeight:'800'}}>Upload Event Image</Text>
              <Text style={{ fontSize: moderateScale(10), color:'black'}}>Drag & Drop Photo Here or Browse</Text>
          </View>
          <View style={{width:'100%',height:verticalScale(100),alignItems:"center",justifyContent:"center"}}>
              <TouchableOpacity
                  onPress={()=>props.navigation.navigate('WeddingDetails')}
              style={{width:'100%',height:verticalScale(52),backgroundColor:"#09F2DF",alignItems:"center",justifyContent:"center"}}
              >
              <Text style={{color:'#000000',fontFamily:"Poppins-Medium"}}>Save</Text>
              </TouchableOpacity>
</View>
    </View>
  )
}

export default BirthdayEvent

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: verticalScale(45),
        borderWidth: 1,
        borderColor: '#BCBCBC',
        alignItems:"center",
        justifyContent: "center",
        flexDirection:"row"
        
    },
    dropdown: {
        width: '100%',
        height: verticalScale(45),
        borderWidth: 1,
        borderColor: '#BCBCBC',
        paddingLeft: scale(10),
        paddingRight:scale(10),
      },
    HeaderFont: {
        fontSize: moderateScale(14),
        fontFamily:"Poppins-Medium"
    },
    iconsStyle: {
        width: scale(20),
        height: verticalScale(20),
        resizeMode: "contain",
        marginRight: scale(10),
        marginLeft:scale(-30)
        
    },
    placeholderStyle: {
        fontFamily:"Poppins-Medium",
        fontSize:scale(14),
        color:"#B2B2B2"
      },
      selectedTextStyle: {
        fontFamily:"Poppins-Medium",
        fontSize:scale(14),
      },
        fontStyles: {
            fontFamily: "Poppins-Medium",
            fontSize:scale(16),
            color:"#4b4f53"
        },
})