import React from 'react';
import {Image, View} from 'react-native';
import {ICONS} from '../common/constants';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Event from '../screens/Event';
import GuestList from '../screens/GuestList';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {CustomHeader} from '../common/component';
import ViewTodayEvent from '../screens/HomeScreen/TodayEvents/ViewTodayEvent';
import ViewMyEvent from '../screens/HomeScreen/MyEvent/ViewMyEvent';
import ViewEventAttend from '../screens/HomeScreen/InvitedEvents/ViewEventAttend';
import EventDetails from '../screens/HomeScreen/InvitedEvents/EventDetails';
import EventInvitedDetails from '../screens/HomeScreen/InvitedEvents/EventInvitedDetails';
import CustomHeaderGuestList from '../common/component/CustomHeaderGuestList'
import ImportContact from '../screens/ImportContact/ImportContact';

const RootStackNavigator = createStackNavigator();
const HomeStack = props => {
  return (
    <View style={{flex: 1}}>
    <CustomHeader props={props} />
    <RootStackNavigator.Navigator initialRouteName="HomeScreen">
    <RootStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{gestureEnabled: false, headerShown: false}}
      />
      </RootStackNavigator.Navigator>
      </View>
  );
};
const RootBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator initialRouteName="HomeStack">
          <RootStackNavigator.Screen
        name="HomeStack"
        component={HomeStack}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <RootStackNavigator.Screen
        name="ViewTodayEvent"
        component={ViewTodayEvent}
        options={{gestureEnabled: true, headerShown: true}}
      />
      <RootStackNavigator.Screen
        name="ViewMyEvent"
        component={ViewMyEvent}
        options={{gestureEnabled: true, headerShown: true}}
      />
      <RootStackNavigator.Screen
        name="ViewEventAttend"
        component={ViewEventAttend}
        options={{gestureEnabled: true, headerShown: true}}
      />
      <RootStackNavigator.Screen
        name="EventDetails"
        component={EventDetails}
        options={{gestureEnabled: true, headerShown: true}}
      />
      <RootStackNavigator.Screen
        name="EventInvitedDetails"
        component={EventInvitedDetails}
        options={{gestureEnabled: true, headerShown: true}}
      />
    </RootStackNavigator.Navigator>
  );
};

const SecondBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator initialRouteName="Event">
      <RootStackNavigator.Screen
        name="Event"
        component={Event}
        options={{gestureEnabled: false, headerShown: false}}
      />
    </RootStackNavigator.Navigator>
  );
};

const  GuestBottomTabStack = props => {
  return (
    <>
    <CustomHeaderGuestList />
    <RootStackNavigator.Navigator initialRouteName="GuestList">
      <RootStackNavigator.Screen
        name="GuestList"
        component={GuestList}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <RootStackNavigator.Screen
        name="ImportContact"
        component={ImportContact}
        options={{gestureEnabled: false, headerShown: false}}
      />
    </RootStackNavigator.Navigator>
    </>
  );
};

const ThardBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator initialRouteName="Favorites">
      <RootStackNavigator.Screen
        name="Favorites"
        component={Favorites}
        options={{gestureEnabled: false, headerShown: false}}
      />
    </RootStackNavigator.Navigator>
  );
};
const FourthBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator initialRouteName="Menu">
      <RootStackNavigator.Screen
        name="Menu"
        component={Menu}
        options={{gestureEnabled: false, headerShown: false}}
      />
    </RootStackNavigator.Navigator>
  );
};


const HomeNavigator = props => (
    <RootStackNavigator.Navigator
      initialRouteName="RootBottomTabStack"
      tabBarOptions={{
        style: {
          height: verticalScale(30),
          paddingVertical: 5,
          backgroundColor: '#FFFFFF',
          width: scale(380),
          paddingBottom: moderateScale(5),
          justifyContent: 'center',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.2,
          shadowRadius: 8,
          borderColor: '#000',
          borderWidth: 1,
          borderStyle: 'solid',
        },
        indicatorStyle: {
          borderBottomColor: 'red',
          borderBottomWidth: 125552,
        },
      }}>
      <RootStackNavigator.Screen
        name="RootBottomTabStack"
        component={RootBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top: verticalScale(10),
                width: scale(24),
                height: scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? ICONS.Activehome : ICONS.home}
            />
          ),
        }}
      />

      <RootStackNavigator.Screen
        name="GuestBottomTabStack"
        component={GuestBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top: verticalScale(10),
                width: scale(24),
                height: scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? ICONS.time : ICONS.time}
            />
          ),
        }}
      />

      <RootStackNavigator.Screen
        name="SecondBottomTabStack"
        component={SecondBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top: verticalScale(10),
                width: scale(24),
                height: scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? ICONS.scene : ICONS.scene}
            />
          ),
        }}
      />

      <RootStackNavigator.Screen
        name="ThardBottomTabStack"
        component={ThardBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top: verticalScale(10),
                width: scale(24),
                height: scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? ICONS.favorites : ICONS.favorites}
            />
          ),
        }}
      />
      <RootStackNavigator.Screen
        name="FourthBottomTabStack"
        component={FourthBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top: verticalScale(10),
                width: scale(24),
                height: scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? ICONS.setting : ICONS.setting}
            />
          ),
        }}
      />
    </RootStackNavigator.Navigator>
);

export default HomeNavigator;
