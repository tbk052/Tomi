/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import VirtualKeyboard from '../components/virtual-keyboard';
import {useNavigation} from '@react-navigation/native';

const TwoFactorsAuthen = () => {
  // const [resendOTP, setResendOTP] = React.useState();
  const [otpInput, setOtpInput] = React.useState('');
  const navigation: any = useNavigation();

  const getKeyInput = (keyInput: React.SetStateAction<string>) => {
    setOtpInput(keyInput);
  };
  const handleOtp = () => {
    if (otpInput.includes('Xóa')) {
      setOtpInput(pre => pre.slice(0, -4));
    }
    if (otpInput.length === 4 && !otpInput.includes('Xóa')) {
      navigation.replace('MainStack', {screen: 'AppTab'});
    }
    console.log('stop it');
  };
  React.useEffect(() => {
    if (otpInput.length === 4) {
      handleOtp();
    }
  });
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.7, backgroundColor: '#f5e4ee'}}>
        <View style={{flex: 1, paddingTop: 10, flexDirection: 'row'}}>
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
              flex: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: '500'}}>
              Xác thực hai yếu tố
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 1.5,
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
          value={otpInput}
          maxLength={4}
          style={{
            borderWidth: 0.5,
            width: '80%',
            height: '10%',
            textAlign: 'center',
            fontSize: 18,
          }}
        />
        <TouchableOpacity activeOpacity={0.6}>
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
        </TouchableOpacity>
        <Text style={{paddingHorizontal: '12%', textAlign: 'center'}}>
          Vui lòng không tiết lộ OTP của bạn cho bất kỳ ai kể cả nhân viên Tomi
        </Text>
      </View>
      <View style={{flex: 1}}>
        <VirtualKeyboard getKeyInput={getKeyInput} />
      </View>
    </View>
  );
};
export default TwoFactorsAuthen;
