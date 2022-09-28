import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native'
import React,{useState} from 'react'
import { COLORS, ICONS } from '../../common/constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const WeddingDetails = (props) => {
  const [stateDetails ,setStateDetails]=useState('bride')
  return (
    <ScrollView style={{ flex: 1, }}>
    <View style={{ flex: 1,backgroundColor: COLORS.primary ,padding:scale(10),alignItems:"center",justifyContent:"flex-start"}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={()=>setStateDetails('bride')}
          style={[styles.headerState, { backgroundColor: stateDetails == 'bride' ? "#09F2DF" : "white" }]}>
          <Text style={styles.headerFont}>Bride Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>setStateDetails('Groom')}
          style={[styles.headerState, { backgroundColor: stateDetails == 'Groom' ? "#09F2DF" : "white" }]}>
        <Text style={styles.headerFont}>Groom Details</Text>
          </TouchableOpacity>
      </View>
      <View style={{width:'100%',borderRadius:moderateScale(20),height:verticalScale(137),alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
              <Image source={ICONS.Upload} style={{ width: scale(60), height: verticalScale(60)}} />
          {stateDetails  == 'bride' && <Text style={{ fontSize: moderateScale(14), color: 'black', fontFamily: "Poppins-Medium", fontWeight: '800' }}>Upload Bride's Image</Text>}
          {stateDetails == 'Groom' && <Text style={{ fontSize: moderateScale(14), color: 'black', fontFamily: "Poppins-Medium", fontWeight: '800' }}>Upload Groom's Image</Text>}
              <Text style={{ fontSize: moderateScale(10), color:'black'}}>Drag & Drop Photo Here or Browse</Text>
        </View>
      { stateDetails  == 'bride' &&  <View style={{width:'100%',marginTop:verticalScale(10),borderRadius:moderateScale(20), backgroundColor:"white",padding:moderateScale(10)}}>
        <Text style={styles.inputHeader}>Bride's Name</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        // placeholder="Bride Name"
          />
              <Text style={styles.inputHeader}>Bride's father Name</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        // placeholder="Bride Name"
          />
              <Text style={styles.inputHeader}>Bride's mother Name</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        // placeholder="Bride Name"
          />
                  <Text style={styles.inputHeader}>Place</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        // placeholder="Bride Name"
          />
          <View style={{ width: '100%', height: verticalScale(100), marginTop:verticalScale(10), alignItems:"center",justifyContent:"center" }}>
            <TouchableOpacity
              onPress={()=>props.navigation.navigate('GuestsList')}
              style={{ borderRadius: moderateScale(5), alignItems: "center", justifyContent: "center", width: '100%', height: verticalScale(52), backgroundColor: "#09F2DF" }}>
              <Text style={styles.buttonFont}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>}
        { stateDetails  == 'Groom' &&  <View style={{width:'100%',marginTop:verticalScale(10),borderRadius:moderateScale(20), backgroundColor:"white",padding:moderateScale(10)}}>
        <Text style={styles.inputHeader}>Groom's Name</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        // placeholder="Bride Name"
          />
              <Text style={styles.inputHeader}>Groom's father Name</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        // placeholder="Bride Name"
          />
              <Text style={styles.inputHeader}>Groom's mother Name</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        // placeholder="Bride Name"
          />
                  <Text style={styles.inputHeader}>Place</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        // placeholder="Bride Name"
          />
          <View style={{ width: '100%', height: verticalScale(100), marginTop:verticalScale(10), alignItems:"center",justifyContent:"center" }}>
            <TouchableOpacity
              onPress={()=>props.navigation.navigate('GuestsList')}
              style={{ borderRadius: moderateScale(5), alignItems: "center", justifyContent: "center", width: '100%', height: verticalScale(52), backgroundColor: "#09F2DF" }}>
              <Text style={styles.buttonFont}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>}
        </View>
    </ScrollView>
  )
}

export default WeddingDetails

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: verticalScale(32),
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: verticalScale(5),
    marginBottom:verticalScale(15)
  },
  headerState: {
    width: scale(150),
    height: verticalScale(32),
    borderRadius:moderateScale(5),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent:"center"
  },
  headerFont: {
    fontFamily: "Roboto-Medium",
    fontSize:moderateScale(14)
  },
  input: {
    width: '100%',
    height: verticalScale(45),
    backgroundColor:"#F7F7F9"
  },
  inputHeader: {
    marginTop: verticalScale(10),
    fontFamily:"Poppins-Medium"
  },
  buttonFont: {
    fontFamily: "Roboto-Medium",
    fontSize:moderateScale(16)
  }
})