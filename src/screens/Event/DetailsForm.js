import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native'
import React,{useState} from 'react'
import { COLORS, ICONS } from '../../common/constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const DetailsForm = (props) => {
  const [stateDetails ,setStateDetails]=useState('Sangeet')

  return (
    <ScrollView style={{ flex: 1, }}>
    <View style={{ flex: 1,backgroundColor: COLORS.primary ,padding:scale(10),alignItems:"center",justifyContent:"flex-start"}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={()=>setStateDetails('Sangeet')}
          style={[styles.headerState, { backgroundColor: stateDetails == 'Sangeet' ? "#09F2DF" : "white" }]}>
          <Text style={styles.headerFont}>Sangeet</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>setStateDetails('Receptipon')}
          style={[styles.headerState, { backgroundColor: stateDetails == 'Receptipon' ? "#09F2DF" : "white" }]}>
        <Text style={styles.headerFont}>Receptipon</Text>
          </TouchableOpacity>
      </View>

      { stateDetails  == 'Sangeet' &&  <View style={{width:'100%',marginTop:verticalScale(10),borderRadius:moderateScale(20), backgroundColor:"white",padding:moderateScale(10)}}>
        <Text style={styles.inputHeader}>Sangeet date</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        // placeholder="Bride Name"
          />
              <Text style={styles.inputHeader}>Start Time</Text>
              <View style={{flexDirection:"row",width:'100%',justifyContent:"space-between"}}>
                  <TextInput
            style={[styles.input,{width:'48%',textAlign:"center"}]}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="--Hour--"
                  />
                       <TextInput
            style={[styles.input,{width:'48%',textAlign:"center"}]}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="--Min--"
          />
                  </View>
                  <Text style={styles.inputHeader}>End time</Text>
                  <View style={{flexDirection:"row",width:'100%',justifyContent:"space-between"}}>
                  <TextInput
            style={[styles.input,{width:'48%',textAlign:"center"}]}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="--Hour--"
                  />
                       <TextInput
            style={[styles.input,{width:'48%',textAlign:"center"}]}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="--Min--"
          />
                  </View>
                  <Text style={styles.inputHeader}>Wedding place</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        // placeholder="--Hour--"
                  />
                        <View style={{width:'100%',borderRadius:moderateScale(20),height:verticalScale(137),alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
              <Image source={ICONS.Upload} style={{ width: scale(60), height: verticalScale(60)}} />
          {stateDetails  == 'Sangeet' && <Text style={{ fontSize: moderateScale(14), color: 'black', fontFamily: "Poppins-Medium", fontWeight: '800' }}>Upload Bride's Image</Text>}
          {stateDetails == 'Receptipon' && <Text style={{ fontSize: moderateScale(14), color: 'black', fontFamily: "Poppins-Medium", fontWeight: '800' }}>Upload Groom's Image</Text>}
              <Text style={{ fontSize: moderateScale(10), color:'black'}}>Drag & Drop Photo Here or Browse</Text>
        </View>
          <View style={{ width: '100%', height: verticalScale(100), marginTop:verticalScale(10), alignItems:"center",justifyContent:"center" }}>
            <TouchableOpacity
              onPress={()=>props.navigation.navigate('MyEvents')}
              style={{ borderRadius: moderateScale(5), alignItems: "center", justifyContent: "center", width: '100%', height: verticalScale(52), backgroundColor: "#09F2DF" }}>
              <Text style={styles.buttonFont}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>}
        { stateDetails  == 'Receptipon' &&  <View style={{width:'100%',marginTop:verticalScale(10),borderRadius:moderateScale(20), backgroundColor:"white",padding:moderateScale(10)}}>
        <Text style={styles.inputHeader}>Reception date</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="17/08/2022"
          />
              <Text style={styles.inputHeader}>Start Time</Text>
              <View style={{flexDirection:"row",width:'100%',justifyContent:"space-between"}}>
                  <TextInput
            style={[styles.input,{width:'48%',textAlign:"center",textAlign:"center"}]}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="---Hour-----"
                  />
                       <TextInput
            style={[styles.input,{width:'48%',textAlign:"center"}]}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="--Min--"
          />
                  </View>
              <Text style={styles.inputHeader}>End Time</Text>
              <View style={{flexDirection:"row",width:'100%',justifyContent:"space-between"}}>
                  <TextInput
            style={[styles.input,{width:'48%',textAlign:"center"}]}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="--Hour--"
                  />
                       <TextInput
            style={[styles.input,{width:'48%',textAlign:"center"}]}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="--Min--"
          />
                  </View>
                  <Text style={styles.inputHeader}>Wedding place</Text>
      <TextInput
            style={styles.input}
            fullName='Bride Name'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        // placeholder="Bride Name"
                  />
                        <View style={{width:'100%',borderRadius:moderateScale(20),height:verticalScale(137),alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
              <Image source={ICONS.Upload} style={{ width: scale(60), height: verticalScale(60)}} />
          {stateDetails  == 'Sangeet' && <Text style={{ fontSize: moderateScale(14), color: 'black', fontFamily: "Poppins-Medium", fontWeight: '800' }}>Upload Sub Event Image</Text>}
          {stateDetails == 'Receptipon' && <Text style={{ fontSize: moderateScale(14), color: 'black', fontFamily: "Poppins-Medium", fontWeight: '800' }}>Upload Sub Event Image</Text>}
              <Text style={{ fontSize: moderateScale(10), color:'black'}}>Drag & Drop Photo Here or Browse</Text>
        </View>
          <View style={{ width: '100%', height: verticalScale(100), marginTop:verticalScale(10), alignItems:"center",justifyContent:"center" }}>
            <TouchableOpacity
              onPress={()=>props.navigation.navigate('MyEvents')}
              style={{ borderRadius: moderateScale(5), alignItems: "center", justifyContent: "center", width: '100%', height: verticalScale(52), backgroundColor: "#09F2DF" }}>
              <Text style={styles.buttonFont}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>}
        </View>
    </ScrollView>
  )
}

export default DetailsForm

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
          backgroundColor: "#F7F7F9",
        paddingLeft:scale(10)
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