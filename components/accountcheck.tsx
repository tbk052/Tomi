/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Animated, {SlideInDown} from 'react-native-reanimated';

const AccountCheck = ({onChangeState}: any) => {
  return (
    <Animated.View
      entering={SlideInDown.delay(200).duration(500)}
      style={{alignItems: 'center', paddingBottom: 33, paddingHorizontal: 20}}>
      <TouchableOpacity
        onPress={() => {
          onChangeState();
        }}
        activeOpacity={0.9}
        style={{
          backgroundColor: '#e075a0',
          width: '100%',
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          marginBottom: 15,
        }}>
        <Text style={{fontSize: 19, fontWeight: '500', color: '#FFF'}}>
          ĐĂNG NHẬP
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          backgroundColor: '#f2e9ec',
          width: '100%',
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 19, fontWeight: '500'}}>ĐĂNG KÝ</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AccountCheck;
