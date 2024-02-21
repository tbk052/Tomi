/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home.screen';
import ManageScreen from '../screens/manage.screen';
import TransferenceScreen from '../screens/transference.screen';
import ExperienceScreen from '../screens/experience.screen';
import ExploreScreen from '../screens/explore.screen';
import {Image, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const tabBarIcon = () => {
  return (
    <Image
      source={require('../res/icon/tomi-homeicon.png')}
      style={{width: 18, height: 18}}
    />
  );
};

const AppTab = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Hello Worldsad</Text>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarActiveTintColor: 'red'}}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarLabelStyle: {fontSize: 12},
            tabBarIcon(props) {
              console.log(props);
              tabBarIcon();
            },
          }}
        />
        <Tab.Screen
          name="ManageScreen"
          component={ManageScreen}
          options={{
            tabBarLabel: 'Quản trị',
            tabBarLabelStyle: {fontSize: 12},
            tabBarIcon(props) {
              console.log(props);
              return (
                <Image
                  source={require('../res/icon/tomi-homeicon.png')}
                  style={{width: 18, height: 18}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="TransferenceScreen"
          component={TransferenceScreen}
          options={{
            tabBarLabel: 'Chuyển tiền',
          }}
        />
        <Tab.Screen
          name="ExperienceScreen"
          component={ExperienceScreen}
          options={{
            tabBarLabel: 'Trải nghiệm',
          }}
        />
        <Tab.Screen
          name="ExploreScreen"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Khám phá',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
export default AppTab;
