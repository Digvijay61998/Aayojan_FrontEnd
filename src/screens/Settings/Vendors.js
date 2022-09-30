import {StyleSheet, Text, FlatList, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Dropdown} from 'react-native-element-dropdown';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../common/constants';

const Vendors = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  const contactDetails = [
    {
      id: 1,
      name: 'saten singh',
      category: 'Accomodation',
      email: 'satyen singh',
      PhoneNo: '+91-9898989405',
      location: 'Noida, Sector 4',
      status: 'Hired',
    },
    {
      id: 2,
      name: 'saten singh',
      category: 'Accomodation',
      email: 'satyen singh',
      PhoneNo: '+91-9898989405',
      location: 'Noida, Sector 4',
      status: 'Hired',
    },
    {
      id: 3,
      name: 'saten singh',
      category: 'Accomodation',
      email: 'satyen singh',
      PhoneNo: '+91-9898989405',
      location: 'Noida, Sector 4',
      status: 'Hired',
    },
    {
      id: 4,
      name: 'saten singh',
      category: 'Accomodation',
      email: 'satyen singh',
      PhoneNo: '+91-9898989405',
      location: 'Noida, Sector 4',
      status: 'Hired',
    },
  ];
  const VenderList = ({item}) => {
    return (
      <View style={styles.listContainer}>
        <View
          style={{
            width: '100%',
            height: verticalScale(30),
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={styles.innerContainer}>
            <Text style={styles.fontStyles}>Name</Text>
            <Text>{item.name}</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.fontStyles}>Phone Number</Text>
            <Text>{item.PhoneNo}</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: verticalScale(30),
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={styles.innerContainer}>
            <Text style={styles.fontStyles}>Category</Text>
            <Text>{item.category}</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.fontStyles}>Location</Text>
            <Text>{item.location}</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: verticalScale(30),
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={styles.innerContainer}>
            <Text style={styles.fontStyles}>Email</Text>
            <Text>{item.email}</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.fontStyles}>Status</Text>
            <Text style={styles.subFontStyle}>{item.status}</Text>
          </View>
        </View>
      </View>
    );
  };

    return (
      <>
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={styles.container}>
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
          placeholder={'Reception'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <FlatList
          data={contactDetails}
          renderItem={({item}) => <VenderList item={item} />}
          // horizontal={true}
          numColumns={1}
          showsHorizontalScrollIndicator={false}
              />
             
          </View>
            </ScrollView>
            <TouchableOpacity
          // onPress={e => setModalVisible(!isModalVisble)} 
          style={styles.addButtonContainer}
        >
            {/* <Image style={styles.addIconStyle} source={ICONS.addIcon}/> */}
            <Text style={styles.plusICon}>+</Text>
        </TouchableOpacity>
            </>
  );
};

export default Vendors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
        marginTop: verticalScale(10),
    padding:moderateScale(20)
  },
  dropdown: {
    width: '100%',
    height: verticalScale(45),
    paddingLeft: scale(10),
    paddingRight: scale(10),
    backgroundColor: '#F7F7F9',
    marginTop: verticalScale(10),
  },
  placeholderStyle: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(14),
    color: '#B2B2B2',
  },
  selectedTextStyle: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(14),
  },
  fontStyles: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(14),
    color: '#4b4f53',
  },
  listContainer: {
    width: '100%',
    marginTop: verticalScale(15),
    height: verticalScale(200),
    backgroundColor: '#F7F7F9',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
  },
  innerContainer: {
    width: scale(100),
    justifyContent: 'flex-start',
  },
    subFontStyle: {
        fontFamily: 'Roboto-Medium',
        color: '#636363'
    },
    addButtonContainer:{
        height:scale(40),
        width:scale(40),
        position:'absolute',
        bottom:verticalScale(100),
        right:scale(40),
        borderRadius:verticalScale(100),
        backgroundColor:"#09F2DF",
        elevation: 10,
        alignItems:'center',
        justifyContent: 'center',
        zIndex:100,
      },
      plusICon:{
        fontSize:scale(29),
        color:'#FFF',
        fontWeight:'bold'
      },
});
