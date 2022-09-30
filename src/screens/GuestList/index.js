import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState, version } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import {ICONS, IMAGE} from '../../common/constants'
import { Dropdown } from 'react-native-element-dropdown';
import GroupList from './GroupList';


const data = [
  { label: 'All', value: 'all' },
];

const ModalPopup = ({isModalVisble , toggleModal , navigation}) => {
  return (
    <Modal transparent visible={isModalVisble}>
      <View style={styles.ModalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.headerTextContainer}>
             <Text style={styles.modalHeaderText}>Add Contact</Text> 
            <TouchableOpacity onPress={e=> toggleModal()}><Text style={styles.modalCloseIcon}>X</Text></TouchableOpacity>
            </View>
            <Text style={styles.modalText}>Choose what you'd like to do</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity onPress={e=> navigation.navigate('AddNewContact')}><Text style={styles.modalButton}>New</Text></TouchableOpacity>
              <TouchableOpacity onPress={e=> navigation.navigate('ImportContact')}><Text style={styles.modalButton}>Import</Text></TouchableOpacity>
            </View>
          </View>
      </View>
    </Modal>
  )
}

const GuestList = (props) => {
  const [isModalVisble, setModalVisible] = useState(false);
  const [value, setValue] = useState('');

  const toggleModal = () =>{
    setModalVisible(!isModalVisble);
  }
  return (
    <>
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.firstContainer}>
          <View styles={styles.TextContainer}>
           <Text style={styles.TextStyles}>Guest List</Text>
          </View>
          <Image source={IMAGE.searchIcon} style={styles.searchIcon}/>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity onPress={e=>props.navigation.navigate('AnalyticsScreen')}><Text style={styles.TextStyles}>Analytics</Text></TouchableOpacity>
          <Dropdown
          data={data}
          labelField="label"
          valueField="value"
          style={styles.dropDownStyles}
          onChange = {e=>{setValue(e.value);}}
        />
        </View>
      </View>
        <GroupList/>
    </View>
    </ScrollView>
    <ModalPopup navigation={props.navigation} isModalVisble={isModalVisble} toggleModal={toggleModal}/>
        <TouchableOpacity onPress={e=>setModalVisible(!isModalVisble)} style={styles.addButtonContainer}>
            {/* <Image style={styles.addIconStyle} source={ICONS.addIcon}/> */}
            <Text style={styles.plusICon}>+</Text>
        </TouchableOpacity></>
  )
}

export default GuestList

const styles = StyleSheet.create({
  container:{
    height:'auto',
    backgroundColor:"#F4F8FB",
    paddingTop:verticalScale(20),
    paddingBottom:verticalScale(20),
  },  
  topBar:{
    width:"100%",
    height:verticalScale(50),
    backgroundColor:'#FFF',
    flexDirection:'row',
    justifyContent:'space-between'
  },searchIcon:{
    height:scale(20),
    width:scale(20),
  },firstContainer:{
    flexDirection:'row',
    width:scale(105),
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:scale(15),
  },TextStyles:{
    fontSize: scale(16),
    fontFamily: "Metropolis",
    fontWeight: "600",
  },TextContainer:{
    height:'100%',
    width:scale(20),
    borderBottomColor:'#3DBA91',
    borderBottomWidth:3,
    backgroundColor:'red',
  },secondContainer:{
    flexDirection:'row',
    width:scale(180),
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:scale(15),
  },
  dropDownStyles:{
    width:scale(100),
    borderColor:'#33DBE8',
    borderWidth: 2,
    borderRadius: 8,
    marginRight:4,
  },  
  addButtonContainer:{
    height:scale(40),
    width:scale(40),
    position:'absolute',
    bottom:verticalScale(70),
    right:scale(50),
    borderRadius:verticalScale(100),
    backgroundColor:"#09F2DF",
    elevation: 10,
    alignItems:'center',
    justifyContent:'center',
  },
  addIconStyle:{
    height:'100%',
    width:'100%',
  },
  ModalBackground:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center'
  },  
  modalContainer:{
    width:'80%',
    backgroundColor:"white",
    paddingHorizontal:scale(10),
    paddingVertical:verticalScale(10),
  },  
  headerTextContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:scale(10),
  },
  modalHeaderText:{
    fontSize:scale(20),
    fontWeight:"500",
    color:'green',
    marginBottom:verticalScale(20)
  },
  modalCloseIcon:{
    fontSize:scale(20),
    fontWeight:"500",
    marginBottom:verticalScale(20)
  },
  modalText:{
    fontSize:scale(16),
    marginBottom:verticalScale(20),
  },
  modalButtonContainer:{
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  modalButton:{
    color:'#FF0C3D',
    fontSize:scale(16),
    fontWeight:"500",
    margin:scale(9)
  },
  plusICon:{
    fontSize:scale(29),
    color:'#FFF',
    fontWeight:'bold'
  }
})