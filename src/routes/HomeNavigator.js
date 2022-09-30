import React from 'react';
import {Image, Text, View} from 'react-native';
import {ICONS} from '../common/constants';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Event from '../screens/Event';
import GuestList from '../screens/GuestList';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {CustomHeader, CustomFooter} from '../common/component';
import ViewTodayEvent from '../screens/HomeScreen/TodayEvents/ViewTodayEvent';
import ViewMyEvent from '../screens/HomeScreen/MyEvent/ViewMyEvent';
import ViewEventAttend from '../screens/HomeScreen/InvitedEvents/ViewEventAttend';
import EventDetails from '../screens/HomeScreen/InvitedEvents/EventDetails';
import EventInvitedDetails from '../screens/HomeScreen/InvitedEvents/EventInvitedDetails';
import ViewInvitationCard from '../screens/HomeScreen/InvitedEvents/ViewInvitationCard';
import TravelDetail from '../screens/HomeScreen/InvitedEvents/TravelDetail';
import SubEventDetails from '../screens/HomeScreen/InvitedEvents/SubEventDetails';
import CustomHeaderGuestList from '../common/component/CustomHeaderGuestList';
import ImportContact from '../screens/ImportContact/ImportContact';
import AddNewContact from '../screens/ImportContact/AddNewContact';
import WeddingDetails from '../screens/Event/WeddingDetails';
import GuestsList from '../screens/Event/GuestsList';
import Sub_EventDetails from '../screens/Event/Sub_EventDetails';
import DetailsForm from '../screens/Event/DetailsForm';
import MyEvents from '../screens/Event/MyEvents';
import Settings from '../screens/Settings';
import Vendors from '../screens/Settings/Vendors';
import Notification from '../screens/Settings/Notification';
import BecomeVendor from '../screens/Settings/BecomeVendor';
import analytics from '../screens/ImportContact/AnalyticsScreen';
import AnalyticsScreen from '../screens/ImportContact/AnalyticsScreen';

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
      <CustomFooter props={props} />
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
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                Today events
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
      <RootStackNavigator.Screen
        name="ViewMyEvent"
        component={ViewMyEvent}
           options={{ gestureEnabled: true, headerShown: true, headerStyle: {
      },
                 headerTitle: () => (<View style={{width:'100%',justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
              <Text style={{fontSize:moderateScale(16),fontFamily:'Roboto-Medium'}}>My events</Text>
                   <Image style={{ width: scale(80), height: verticalScale(70) ,marginTop:verticalScale(10)}} source={ICONS.logo} />
                   </View>
      ),
      }}
      />
      <RootStackNavigator.Screen
        name="ViewEventAttend"
        component={ViewEventAttend}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                Event to attend
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
      <RootStackNavigator.Screen
        name="EventDetails"
        component={EventDetails}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                Event to attend
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
      <RootStackNavigator.Screen
        name="EventInvitedDetails"
        component={EventInvitedDetails}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                Event Details
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
      <RootStackNavigator.Screen
        name="ViewInvitationCard"
        component={ViewInvitationCard}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                View Invitation Card
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
      <RootStackNavigator.Screen
        name="TravelDetail"
        component={TravelDetail}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                Travel detail
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
      <RootStackNavigator.Screen
        name="SubEventDetails"
        component={SubEventDetails}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                Sub Event Details
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
    </RootStackNavigator.Navigator>
  );
};

const EventBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator initialRouteName="Event">
      <RootStackNavigator.Screen
        name="Event"
        component={Event}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                Create Event
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
      <RootStackNavigator.Screen
        name="WeddingDetails"
        component={WeddingDetails}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                Wedding Details
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
      <RootStackNavigator.Screen
        name="GuestsList"
        component={GuestsList}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                Wedding Details
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
      <RootStackNavigator.Screen
        name="Sub_EventDetails"
        component={Sub_EventDetails}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                Sub-Event Details
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />

      <RootStackNavigator.Screen
        name="DetailsForm"
        component={DetailsForm}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                Wedding Details
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
      <RootStackNavigator.Screen
        name="MyEvents"
        component={MyEvents}
        options={{
          gestureEnabled: true,
          headerShown: true,
          headerStyle: {},
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontFamily: 'Roboto-Medium',
                }}>
                My Events
              </Text>
              <Image
                style={{
                  width: scale(80),
                  height: verticalScale(70),
                  marginTop: verticalScale(10),
                }}
                source={ICONS.logo}
              />
            </View>
          ),
        }}
      />
    </RootStackNavigator.Navigator>
  );
};

const GuestBottomTabStack = props => {
  return (
    <>
      {/* <CustomHeaderGuestList /> */}
      <RootStackNavigator.Navigator initialRouteName="GuestList">
        <RootStackNavigator.Screen
          name="GuestList"
          component={GuestList}
          options={{
            gestureEnabled: true,
            headerShown: true,
            headerStyle: {},
            headerTitle: () => (
              <View
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(16),
                    fontFamily: 'Roboto-Medium',
                  }}>
                  Guest List
                </Text>
                <Image
                  style={{
                    width: scale(80),
                    height: verticalScale(70),
                    marginTop: verticalScale(10),
                  }}
                  source={ICONS.logo}
                />
              </View>
            ),
          }}
        />
        <RootStackNavigator.Screen
          name="ImportContact"
          component={ImportContact}
          options={{
            gestureEnabled: true,
            headerShown: true,
            headerStyle: {},
            headerTitle: () => (
              <View
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(16),
                    fontFamily: 'Roboto-Medium',
                  }}>
                  Import Contact
                </Text>
                <Image
                  style={{
                    width: scale(80),
                    height: verticalScale(70),
                    marginTop: verticalScale(10),
                  }}
                  source={ICONS.logo}
                />
              </View>
            ),
          }}
        />
        <RootStackNavigator.Screen
          name="AddNewContact"
          component={AddNewContact}
          options={{
            gestureEnabled: true,
            headerShown: true,
            headerStyle: {},
            headerTitle: () => (
              <View
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(16),
                    fontFamily: 'Roboto-Medium',
                  }}>
                  Add Guest
                </Text>
                <Image
                  style={{
                    width: scale(80),
                    height: verticalScale(70),
                    marginTop: verticalScale(10),
                  }}
                  source={ICONS.logo}
                />
              </View>
            ),
          }}
        />
        <RootStackNavigator.Screen
          name="AnalyticsScreen"
          component={AnalyticsScreen}
          options={{
            gestureEnabled: true,
            headerShown: true,
            headerStyle: {},
            headerTitle: () => (
              <View
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(16),
                    fontFamily: 'Roboto-Medium',
                  }}>
                  Guest Dashboard
                </Text>
                <Image
                  style={{
                    width: scale(80),
                    height: verticalScale(70),
                    marginTop: verticalScale(10),
                  }}
                  source={ICONS.logo}
                />
              </View>
            ),
          }}
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
    <RootStackNavigator.Navigator initialRouteName="Settings">
      <RootStackNavigator.Screen
        name="Settings"
        component={Settings}
        options={{ gestureEnabled: true, headerShown: true, headerStyle: {
        },
                   headerTitle: () => (<View style={{width:'100%',justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:moderateScale(16),fontFamily:'Roboto-Medium'}}>more menu</Text>
                     <Image style={{ width: scale(80), height: verticalScale(70) ,marginTop:verticalScale(10)}} source={ICONS.logo} />
                     </View>
        ),
        }}
      />
          <RootStackNavigator.Screen
        name="Vendors"
        component={Vendors}
        options={{ gestureEnabled: true, headerShown: true, headerStyle: {
        },
                   headerTitle: () => (<View style={{width:'100%',justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:moderateScale(16),fontFamily:'Roboto-Medium'}}>more menu</Text>
                     <Image style={{ width: scale(80), height: verticalScale(70) ,marginTop:verticalScale(10)}} source={ICONS.logo} />
                     </View>
        ),
        }}
      />
            <RootStackNavigator.Screen
        name="Notification"
        component={Notification}
        options={{ gestureEnabled: true, headerShown: true, headerStyle: {
        },
                   headerTitle: () => (<View style={{width:'100%',justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:moderateScale(16),fontFamily:'Roboto-Medium'}}>Notification</Text>
                     <Image style={{ width: scale(80), height: verticalScale(70) ,marginTop:verticalScale(10)}} source={ICONS.logo} />
                     </View>
        ),
        }}
      />
               <RootStackNavigator.Screen
        name="BecomeVendor"
        component={BecomeVendor}
        options={{ gestureEnabled: true, headerShown: true, headerStyle: {
        },
                   headerTitle: () => (<View style={{width:'100%',justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:moderateScale(16),fontFamily:'Roboto-Medium'}}>Become a Vendor</Text>
                     <Image style={{ width: scale(80), height: verticalScale(70) ,marginTop:verticalScale(10)}} source={ICONS.logo} />
                     </View>
        ),
        }}
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
      name="EventBottomTabStack"
      component={EventBottomTabStack}
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
