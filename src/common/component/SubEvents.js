import {StyleSheet, Text, Modal,TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';

const SubEvents = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return props.visible ? (
    <Modal transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.header}>
            <Text
              style={{
                fontSize: moderateScale(18),
                color: 'white',
                fontFamily: 'Poppins-Regular',
              }}>
              Sub Events
            </Text>
                  </View>
                  <View style={{width:'100%',justifyContent:"space-evenly",alignItems:"center",height:verticalScale(150),marginTop:verticalScale(20)}}>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text>Select All</Text>
                  </View>
                  <View style={styles.checkBoxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text>Ceremoney</Text>
                  </View>
                  <View style={styles.checkBoxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text>Cocktails</Text>
                  </View>
                  <View style={styles.checkBoxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text>Dancing</Text>
                  </View>
                  <View style={styles.checkBoxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text>Sangeet</Text>
                      </View>
                  </View>
                  <View  style={styles.buttonContainer}>
                      <TouchableOpacity
                          onPress={()=>props.handleFun()}
          style={styles.button}
          >
              <Text style={{fontFamily:"Poppins-Medium"}}>Add</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  ) : (
    <View />
  );
};

export default SubEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    // backgroundColor: "#ecf0f1",
    // opacity:0.6,
    // width:"100%"
  },
  boxContainer: {
    width: '80%',
    height: verticalScale(300),
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    height: verticalScale(40),
    backgroundColor: '#15AED6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxContainer: {
    width: '100%',
    padding: scale(20),
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:"flex-start",
    },
    buttonContainer: {
        width: '100%',
        height: verticalScale(100),
        alignItems: "center",
        justifyContent:"center"
    },
    button: {
        width: scale(120),
        height: verticalScale(45),
        backgroundColor: "#09F2DF",
        borderRadius: moderateScale(100),
        alignItems: "center",
        justifyContent:"center"
        
    },
});
