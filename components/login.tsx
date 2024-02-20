/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  // StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {SlideInLeft, SlideInRight} from 'react-native-reanimated';

const Login = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{paddingHorizontal: 30}}>
      <Animated.View
        entering={SlideInLeft.duration(400)}
        style={{
          flexDirection: 'row',
          marginBottom: 15,
          borderRadius: 10,
          backgroundColor: '#FFF',
        }}>
        <TextInput
          placeholder="Tên đăng nhập / Số điện thoại"
          style={{
            flex: 5,
            backgroundColor: '#FFF',
            height: 55,
            paddingLeft: 20,
            borderRadius: 10,
            fontSize: 16,
            fontWeight: '500',
          }}
        />
        <Image
          source={require('../res/img/tomi-edit.png')}
          style={{
            opacity: 0.5,
            width: 18,
            height: 18,
            marginRight: 12,
            alignSelf: 'center',
          }}
        />
      </Animated.View>

      <Animated.View
        entering={SlideInRight.duration(400)}
        style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 2.5,
            flexDirection: 'row',
            backgroundColor: '#FFF',
            height: 55,
            marginRight: 15,
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="Mật khẩu"
            style={{
              flex: 8,
              paddingLeft: 20,
              fontWeight: '500',
            }}
          />
          <TouchableOpacity
            style={{flex: 1, alignSelf: 'center', marginRight: 5}}>
            <Image
              source={require('../res/img/tomi-showpass.png')}
              style={{
                opacity: 0.5,
                width: 15,
                height: 15,
                backgroundColor: '#FFF',
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TwoFactorsAuthen', {name: 'TwoFactorsAuthen'});
          }}
          activeOpacity={0.8}
          style={{
            flex: 1.5,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f2dce3',
          }}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </Animated.View>
      <View
        style={{
          paddingTop: 10,
        }}>
        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <TouchableOpacity activeOpacity={0.9}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 17,
                color: 'darkgreen',
                borderRightWidth: 1.2,
                paddingRight: 8,
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
                textDecorationColor: 'darkgreen',
              }}>
              Đăng ký
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={{paddingLeft: 8}}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 17,
                color: 'darkgreen',
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
                textDecorationColor: 'darkgreen',
              }}>
              Không thể đăng nhập?
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: '#de4979'}} />
          <View style={{flex: 1, backgroundColor: 'lightblue'}} />
          <View style={{flex: 1, backgroundColor: '#f26d6d'}} />
          <View style={{flex: 1, backgroundColor: '#f7a654'}} />
        </View> */}
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   topTabbar: {
//     backgroundColor: '#888888',
//     flex: 1,
//     marginRight: 5,
//     height: 4,
//     borderRadius: 14,
//     alignSelf: 'center',
//   },
// });
export default Login;
