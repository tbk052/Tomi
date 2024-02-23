/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home.screen';
import ManageScreen from '../screens/manage.screen';
import TransferenceScreen from '../screens/transference.screen';
import ExperienceScreen from '../screens/experience.screen';
import ExploreScreen from '../screens/explore.screen';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();

interface TomiIconType {
  name: string;
  props: {color: string};
}
const TomiIcon = ({name, props}: TomiIconType) => {
  return <Icon name={name} size={24} color={props.color} />;
};

const AppTab = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <View style={{height: '12%', flexDirection: 'row', paddingTop: 10}}>
        <TouchableOpacity style={{flex: 1}}>
          <Image
            source={require('../res/img/tomi-mascot.png')}
            style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text
            style={{
              textTransform: 'uppercase',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            THANH BINH
          </Text>
          <TouchableOpacity style={{flexDirection: 'row', paddingTop: 5}}>
            <Icon name={'shield-cat'} size={24} color={'#ffa02b'} />
            <Text
              style={{
                fontWeight: 'bold',
                color: '#ffa02b',
                fontSize: 14,
                paddingLeft: 5,
                paddingTop: 2,
              }}>
              123 điểm Tomi
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1.5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
            }}>
            <Icon name={'qrcode'} size={26} color={'#de5d9e'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
            }}>
            <Icon name={'comments'} size={26} color={'#de5d9e'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <Icon name={'bell'} size={26} color={'#de5d9e'} />
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                backgroundColor: '#ff3d3d',
                color: '#f2f2f2',
                textAlign: 'center',
                borderRadius: 8,
                height: 20,
                width: 25,
                marginTop: '-5%',
                marginLeft: '-30%',
                borderWidth: 3,
                borderColor: '#f2f2f2',
              }}>
              9+
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: '10%',
            paddingTop: '2%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderTopWidth: 3,
          },
          tabBarInactiveTintColor: '#c4c3c2',
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarLabelStyle: {
              fontSize: 12,
              paddingBottom: '10%',
            },
            tabBarActiveTintColor: '#4a81a1',
            tabBarIcon(props) {
              return <TomiIcon name={'house'} props={props} />;
            },
          }}
        />
        <Tab.Screen
          name="ManageScreen"
          component={ManageScreen}
          options={{
            tabBarLabel: 'Quản trị',
            tabBarLabelStyle: {
              fontSize: 12,
              paddingBottom: '10%',
            },
            tabBarActiveTintColor: '#de5d9e',
            tabBarIcon(props) {
              return <TomiIcon name={'chart-pie'} props={props} />;
            },
          }}
        />
        <Tab.Screen
          name="TransferenceScreen"
          component={TransferenceScreen}
          options={{
            tabBarLabel: 'Chuyển tiền',
            tabBarLabelStyle: {
              fontSize: 12,
              paddingBottom: '10%',
            },
            tabBarIcon(props) {
              return <TomiIcon name={'paper-plane'} props={props} />;
            },
          }}
        />
        <Tab.Screen
          name="ExperienceScreen"
          component={ExperienceScreen}
          options={{
            tabBarLabel: 'Trải nghiệm',
            tabBarLabelStyle: {
              fontSize: 12,
              paddingBottom: '10%',
            },
            tabBarActiveTintColor: '#f24413',
            tabBarIcon(props) {
              return <TomiIcon name={'gratipay'} props={props} />;
            },
          }}
        />
        <Tab.Screen
          name="ExploreScreen"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Khám phá',
            tabBarLabelStyle: {
              fontSize: 12,
              paddingBottom: '10%',
            },
            tabBarActiveTintColor: '#f2a41d',
            tabBarIcon(props) {
              return <TomiIcon name={'lightbulb'} props={props} />;
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
export default AppTab;
