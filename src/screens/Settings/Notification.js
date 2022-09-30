import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { COLORS } from '../../common/constants'

const Notification = () => {
    const data = [
        {
            id: 1,
            title: 'Lorem Ipsom',
            para: 'you jasd 100s buks List',
            time:'5:45 PM'
        },
        {
            id: 2,
            title: 'Melvin',
            para:'you jasd 100s buks List',
            time:'5:45 PM',
active:true
        },
        {
            id: 3,
            title: 'Duane McDonald',
            para:'you jasd 100s buks List',
            time:'5:45 PM',
active:true
        },
        {
            id: 4,
            title: 'addie Cain',
            para:'you jasd 100s buks List',
            time:'5:45 PM',
active:false
        },
        {
            id: 5,
            title: 'isabella Clayton',
            para:'you jasd 100s buks List',
            time:'5:45 PM',
active:true
        },
    ]
    const NotificationList = ({item}) => {
        return (
            <View style={styles.boxContainer}>
                <View style={{
                    justifyContent: "space-between", alignItems:"flex-start",height:verticalScale(40)
                }}>
                    <Text style={{fontSize:moderateScale(17),color:item.active == true ? '#E9446A':'#161F3D',fontWeight:'700'}}>{item.title}</Text>
                    <Text style={{fontSize:moderateScale(11),color:"#161F3D", fontFamily:"Poppins-Regular"}}>{ item.para}</Text>
                </View>
                <View style={{
                    justifyContent: "space-between", alignItems:"flex-start",height:verticalScale(40)
                }}>
                <Text style={{width:scale(15),borderRadius:moderateScale(50),color:'white',textAlign:"center",left:scale(20), height:verticalScale(15),backgroundColor:"#E9446A"}}>1</Text>
                    <Text>{ item.time}</Text>
                </View>
             
            </View>
        )
    }
  return (
    <View style={{flex:1,backgroundColor:COLORS.primary}}>
       <FlatList
          data={data}
          renderItem={({item}) => <NotificationList item={item} />}
          // horizontal={true}
          numColumns={1}
          showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
    boxContainer: {
        width: '100%',
        height: verticalScale(70),
        backgroundColor: "white",
        marginTop: verticalScale(5),
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding:moderateScale(15)
    }
})