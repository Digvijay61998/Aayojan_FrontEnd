import { StyleSheet, ScrollView,Text, TextInput,View } from 'react-native'
import React from 'react'
import { COLORS } from '../../common/constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BecomeVendor = () => {
  return (
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.primary }}>
          <View style={{flex:1,backgroundColor:"white",padding:moderateScale(15),marginTop: verticalScale(10)}}>
          <View style={{ width: "100%", height: verticalScale(80), backgroundColor: "white", justifyContent: "center", alignItems: "center", paddingLeft: scale(20), paddingRight: scale(20) }}>
          <Text style={{textAlign:"center",fontFamily:"Poppins-Regular"}}>Register Your Business Profile Now !</Text>
      <Text style={{textAlign:"center",fontFamily:"Poppins-Regular"}}>Aayojan App for business is coming soon! Register now and start managing your clients!</Text>
          </View>
          <TextInput
            style={styles.input}
                  fullName='Bride Name'
                  placeholderTextColor='#575757'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="Name"
              />
                  <TextInput
            style={styles.input}
                  fullName='Bride Name'
                  placeholderTextColor='#575757'
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="Email"
              />
                  <TextInput
            style={styles.input}
                  fullName='Contact Number'
                  placeholderTextColor='#575757'
                  
            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="Contact Number"
              />
                        <TextInput
            style={styles.input}
            fullName='Contact Number'
            placeholderTextColor='#575757'

            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="Category"
              />
                              <TextInput
            style={styles.input}
            fullName='Contact Number'
            placeholderTextColor='#575757'

            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="Business Name"
              />
                              <TextInput
            style={styles.input}
            fullName='Business Name'
            placeholderTextColor='#575757'

            // onChangeText={handleChange('last_date_of_prohibited_substance_used')}
            // value={values.last_date_of_prohibited_substance_used}
        placeholder="Business Name"
              />
          </View>
          <View
          style={{width:'100%',height:verticalScale(100), alignItems:"center",justifyContent:"center"}}
          >
              <TouchableOpacity
              style={{width:scale(300),height:verticalScale(52),backgroundColor:"#09F2DF",justifyContent:"center",alignItems:"center",borderRadius:moderateScale(10)}}
              >
           <Text style={{fontSize:moderateScale(16), fontFamily:"Poppins-Medium"}}>Create</Text>
              </TouchableOpacity>
          </View>
              
    </ScrollView>
  )
}

export default BecomeVendor

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: verticalScale(45),
          backgroundColor: "#F7F7F9",
        paddingLeft: scale(10),
        marginTop:verticalScale(20)
      },
})