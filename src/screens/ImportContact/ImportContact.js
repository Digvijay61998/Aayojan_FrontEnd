import { Image, PermissionsAndroid, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Contacts from 'react-native-contacts';
import { s, scale, verticalScale } from 'react-native-size-matters';
import { ICONS, IMAGE } from '../../common/constants';
import CheckBox from '@react-native-community/checkbox';




const ImportContact = ({navigation}) => {
    const [allContacts,setAllContacts] = useState([]);
    const [reloadPage , setReloadPage] = useState();
    const [selectedContacts, setSelectedContacts] = useState([]);

    const alphabates = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
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
            if(didGotPermission){
                const contacts =  Contacts.getAll().then((contact)=>{
                    contact.map((con)=>{
                        con['isChecked'] = false;
                    })
                    setAllContacts(contact)
                })
                setReloadPage(Math.random());
            }else{
                console.log("No permissoon");
            }
        })
    },[])

    const toggleIsChecked = (index) =>{
        let bool =!allContacts[index].isChecked
        setAllContacts((contacts)=>{
            contacts[index].isChecked = !contacts[index].isChecked
            return contacts
        })
        if(bool){
            setSelectedContacts((contacts)=>{
                return[...contacts,allContacts[index]]
            })
        }else{
            setSelectedContacts((ele)=>{
                const eleIndex = ele.findIndex(el => el.phoneNumbers[0].number == allContacts[index].phoneNumbers[0].number);
                ele.splice(eleIndex,1)
                return ele;
            })
        }
        setReloadPage(Math.random())
    }

    const importGuestHandler = () =>{
        console.log(selectedContacts)
    }

  return (
    <ScrollView>
        <Text style={{display:'none'}}>{reloadPage}</Text>
        <View style={styles.topBar}>
            <TouchableOpacity onPress={e=> navigation.navigate('AddNewContact')} style={styles.topBarElement}><Text style={styles.topBarText}>Add new</Text></TouchableOpacity>
            <TouchableOpacity style={{...styles.topBarElement,...styles.activeELement}}><Text style={styles.topBarText}>Contacts</Text></TouchableOpacity>
        </View>
        <View style={styles.SearchBar}>
            <TextInput style={styles.searchBox} placeholder='Search guest'/>
            <Image style={styles.searchIcon} source={IMAGE.searchIcon}/>
        </View>
        <View style={styles.allContacts}>
            <ScrollView style={styles.contactList}>
                {allContacts.map((contact,index)=>{
                    return(
                        <View style={styles.contactContainer}>
                            <CheckBox
                            disabled={false}
                            value={contact.isChecked}
                            onValueChange={e=> toggleIsChecked(index)}
                            />
                            <View style={styles.NameContainer}><Text style={styles.displayName}>{contact.displayName}</Text></View>
                            <Text>{contact?.phoneNumbers[0]?.number}</Text>
                        </View>
                    )
                })}
            </ScrollView>
            <View>
                {alphabates.map((ele)=>{
                    return(
                        <TouchableOpacity><Text>{ele}</Text></TouchableOpacity>
                    )
                })}                
            </View>
        </View>
        <View style ={styles.bottomBar}>
            <TouchableOpacity onPress={importGuestHandler} style={styles.bottomBarButton}><Text style={styles.bottomBarButtonTect}>Import Guest</Text></TouchableOpacity>
            <View style={styles.numberBox}><Text style={styles.NumberOfSelectedContacts}>{selectedContacts.length}</Text></View>
        </View>
    </ScrollView>
  )
}

export default ImportContact

const styles = StyleSheet.create({
    topBar:{
        backgroundColor:'#fff',
        marginVertical:verticalScale(15),
        flexDirection:'row',
    },
    topBarElement:{
        width:'50%',
        height:"100%",
        alignItems:'center',
        paddingVertical:verticalScale(5),
    } ,
    activeELement:{
        borderBottomColor:'#3DBA91',
        borderBottomWidth:3
    },
    topBarText:{
        fontFamily:" normal normal normal 17px/20px Roboto",
        color:" #0E2A47",
        fontSize:scale(18)
    },  
    SearchBar:{
        // height:verticalScale(50),
        backgroundColor:'#FFF',
        marginBottom:verticalScale(15),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    searchBox:{
        paddingHorizontal:scale(20),
        paddingVertical:verticalScale(13),
        fontSize:scale(13)
    },
    searchIcon:{
        height:scale(30),
        width:scale(30),
        marginRight:scale(15)
    },  
    allContacts:{
        backgroundColor:'#fff',
        flexDirection:'row',
        // height:verticalScale(435),
    },
    contactList:{
        padding:verticalScale(10),
        height:verticalScale(400),
    },
    contactContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'rgba(159, 159, 159, 0.1)',
        borderBottomWidth:1,
        paddingVertical:verticalScale(5)
    },
    displayName:{
        color: "#242424",
        fontFamily:"normal normal normal 12px/22px Roboto",
        marginLeft:scale(10)
    },  
    NameContainer:{
        width:scale(180)
    },  
    bottomBar:{
        backgroundColor:'#FFF',
        flexDirection:"row",
        paddingHorizontal:scale(18),
        paddingVertical:verticalScale(10)
    },
    bottomBarButton:{
        backgroundColor:'#09F2DF',
        height:verticalScale(40),
        alignItems:'center',
        width:scale(200),
        justifyContent:'center',
        elevation:30,
        borderRadius:scale(5)
    },
    bottomBarButtonTect:{
        fontFamily:'Roboto',
        fontSize:scale(15),
        fontWeight:'600'
    },
    numberBox:{
        marginLeft:scale(30),
        borderColor:'#09F2DF',
        borderWidth:2,
        width:scale(60),
        alignItems:'center',
        justifyContent:'center',
    },
    NumberOfSelectedContacts:{
        fontSize:scale(18),
        fontWeight:'600'
    }
})