import { PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Contacts from 'react-native-contacts';




const ImportContact = () => {
    const requestContactpermission = async()=> {
        if(Platform.OS === 'ios'){
            return true
        }
        else{
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
            ])
            if(granted['android.permission.READ_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED && granted['android.permission.WRITE_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED){
                return true;
            }else{
                return false;
            }
        }
    }
    
    useEffect(()=>{
        requestContactpermission().then((didGotPermission)=>{
            console.log("didGotPermission",didGotPermission)
            if(didGotPermission){
                const count =  Contacts.getAll().then((contact)=>{
                    console.log("count",contact[0].phoneNumbers)
                })
            }else{
                console.log("No permissoon");
            }
        })
    },[])

    // useEffect(() => {
    //     if(Platform.OS == 'android'){
    //         PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS,{
    //             title:'Contacts',
    //             message:'This appwould like to view your contact'
    //         }).then(()=>{
    //             Contacts.getAll((err,contacts)=>{
    //                 if(err=='denied'){

    //                 }else{
    //                     console.log(contacts)
    //                 }
    //             })
    //         })
    //     }

    //     Contacts.getAll().then(contacts => {
    //         console.log(contacts);
    //     });
    //   }, []);
  return (
    <View>
      <Text>ImportContact</Text>
    </View>
  )
}

export default ImportContact

const styles = StyleSheet.create({})