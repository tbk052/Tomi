/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Login from '../components/login';
import AccountCheck from '../components/accountcheck';
// import Register from '../components/register';

const AuthScreen = () => {
  const [loginComponent, setLoginComponent] = useState('');
  useEffect(() => {
    const backAction = () => {
      setLoginComponent('');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);
  return (
    <ImageBackground
      source={require('../res/img/tomi-background.png')}
      style={{width: '100%', height: '100%', flex: 1}}>
      <View style={{flex: 1}}>
        {/* <View style={{flex: 0.2, flexDirection: 'row', paddingHorizontal: 5}}>
        <View style={styles.topTabbar} />
        <View style={styles.topTabbar} />
        <View style={styles.topTabbar} />
        <View style={styles.topTabbar} />
        <View style={styles.topTabbar} />
        <View style={styles.topTabbar} />
      </View> */}
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <View
            style={{
              flex: 1.5,
              padding: 15,
              paddingTop: 20,
            }}>
            <Image
              source={require('../res/img/tomi-logo.png')}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 20,
            }}>
            <Text style={{fontSize: 16}}>Ver 0.0.1</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity style={{paddingRight: 4, borderRightWidth: 0.5}}>
              <Text style={{fontSize: 18}}>VN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingLeft: 4}}>
              <Text style={{fontSize: 18}}>EN</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'flex-end',
            paddingBottom: 40,
            paddingRight: 10,
          }}>
          <Image
            source={require('../res/img/tomi-mascot.png')}
            style={{
              flex: 1,
              width: '55%',
              height: '55%',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              backgroundColor: '#FFF',
              width: 65,
              height: 65,
              borderRadius: 50,
              alignItems: 'center',
              alignSelf: 'flex-end',
            }}>
            <Image
              source={require('../res/img/tomi-support.png')}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontSize: 12,
              }}>
              Hỗ trợ
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom: 30}}>
          {loginComponent === 'login' ? (
            <Login />
          ) : (
            <AccountCheck
              onChangeState={() => {
                setLoginComponent('login');
              }}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};
export default AuthScreen;
