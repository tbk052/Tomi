/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import VirtualKeyboard from '../components/virtual-keyboard';

const TwoFactorsAuthen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.6, marginTop: 5}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-start',
              paddingLeft: 20,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>Hủy</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 2.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: '500'}}>
              Xác thực hai yếu tố
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-end',
              paddingRight: 20,
              justifyContent: 'center',
            }}>
            <Text>Trợ giúp</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>****</Text>
          <Text style={{fontSize: 35, fontWeight: 'bold', marginTop: -38}}>
            ----
          </Text>
          <Text style={{fontSize: 18, marginTop: -10}}>Nhập mã OTP</Text>
        </View>
      </View>
      <View style={{flex: 2, alignItems: 'center', borderBottomWidth: 0.15}}>
        <Text style={{fontSize: 19, fontWeight: '500', paddingVertical: 20}}>
          Gửi qua SMS
        </Text>
        <TextInput
          showSoftInputOnFocus={false}
          autoFocus={true}
          style={{
            borderWidth: 0.5,
            width: '80%',
            height: '10%',
            textAlign: 'center',
          }}
        />
        <Text
          style={{
            color: '#36d19e',
            fontSize: 17,
            fontWeight: '500',
            paddingVertical: 20,
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
            textDecorationColor: '#36d19e',
          }}>
          Gửi lại mã OTP
        </Text>
        <Text style={{paddingHorizontal: '12%', textAlign: 'center'}}>
          Vui lòng không tiết lộ OTP của bạn cho bất kỳ ai kể cả nhân viên Tomi
        </Text>
      </View>
      <View style={{flex: 1}}>
        <VirtualKeyboard />
      </View>
    </View>
  );
};
export default TwoFactorsAuthen;
