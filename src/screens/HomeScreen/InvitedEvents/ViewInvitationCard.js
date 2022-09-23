import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { IMAGE } from '../../../common/constants'
import { verticalScale } from 'react-native-size-matters'

const ViewInvitationCard = (props) => {
  return (
    <View style={{flex:1,paddingTop:verticalScale(10)}}>
          <Image source={IMAGE.invite} style={styles.imageStyle}/>
    </View>
  )
}

export default ViewInvitationCard

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height:'100%',
        resizeMode: 'stretch',
    },
})