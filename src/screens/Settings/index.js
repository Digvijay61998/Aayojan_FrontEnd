import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {ICONS, IMAGE} from '../../common/constants';

const Settings = (props) => {
    const drawerData = [
        {
            id: 1,
            image: ICONS.home,
            boxText: 'Home',
            color: '#e6fcfc',
            navigation: 'HomeScreen',
        },
        {
            id: 2,
            image: require('../../assets/icons/settingHome.svg'),
            color: '#fefae8',
            boxText: 'My event',
            navigation: `ViewMyEvent`,
    },
    {
      id: 3,
      image: ICONS.home,
      color: '#e7f7fb',
      boxText: 'Vendor',
      navigation: "Vendors",
    },
    {
      id: 4,
      image: require('../../assets/icons/subscription.png'),
      color: '#ece9e7',
      boxText: 'Subscription',
      navigation: "",
    },
    {
      id: 5,
      image: require('../../assets/icons/settingProfile.png'),
      color: '#fbecf4',
      boxText: `Settings`,
      navigation: "",
    },
    {
      id: 6,
      image: require('../../assets/icons/feedback.png'),
      color: '#fbe8ec',
      boxText: 'Feedback',
      navigation: "",
    },
    {
      id: 7,
      image: require('../../assets/icons/notification.png'),
      color: '#e6fcfc',
      boxText: 'Notification',
      navigation: "Notification",
    },
    {
      id: 8,
      image: require('../../assets/icons/rateApp.png'),
      color: '#fefae8',
      boxText: 'Rate this app',
      navigation: "",
    },
    {
      id: 9,
      image: require('../../assets/icons/becomeVendor.png'),
      color: '#e7f7fb',
      boxText: 'Became a vendor',
      navigation: "BecomeVendor",
    },
    {
      id: 10,
      image: require('../../assets/icons/memberManagement.png'),
      color: '#ece9e7',
      boxText: 'Member management',
      navigation: "",
    },
    {
      id: 11,
      image: require('../../assets/icons/recommend.png'),
      color: '#fbecf4',
      boxText: 'Recommend this app',
      navigation: "",
    },
    {
      id: 12,
      image: require('../../assets/icons/createInvitation.png'),
      color: '#e6fcfc',
      boxText: 'Create invitation card',
      navigation: "",
    },
    {
      id: 13,
      image: require('../../assets/icons/logout.png'),
      color: '#fcebef',
      boxText: 'Logout',
      navigation: "",
    },
  ];

  const SettingList = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate(item.navigation)}
        style={styles.settingListContainer}>
        <View style={styles.subSettingContainer}>
          <View
            style={{
              width: scale(30),
              height: verticalScale(30),
              borderRadius: moderateScale(50),
              padding: moderateScale(7),
              backgroundColor:item.color,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={item.image} style={styles.imagedev} />
          </View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              textAlign: 'left',
              marginLeft: scale(15),
            }}>
            {item.boxText}
          </Text>
        </View>
        <Text style={{fontSize: moderateScale(30), color: '#9B9B9B'}}>
          {'>'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.primaryContainer}>
        <View style={styles.imageContainer}>
          <Image source={IMAGE.man1} style={styles.image} />
        </View>
        <Text style={styles.nameFont}>Satyen Singh</Text>
      </View>
      <View style={styles.secondaryContainer}>
        <FlatList
          data={drawerData}
          renderItem={({item}) => <SettingList item={item} />}
          // horizontal={true}
          numColumns={1}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF4FC',
  },
  primaryContainer: {
    flex: 1,
    minHeight: verticalScale(180),
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryContainer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopRightRadius: moderateScale(50),
    borderTopLeftRadius: moderateScale(50),
    padding: moderateScale(30),
  },
  imageContainer: {
    width: scale(96),
    height: verticalScale(85),
    borderRadius: moderateScale(200),
    overflow: 'hidden',
  },
  nameFont: {
    color: '#575757',
    fontSize: scale(18),
    fontFamily: 'Roboto-Medium',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  settingListContainer: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imagedev: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  subSettingContainer: {
    width: scale(150),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
