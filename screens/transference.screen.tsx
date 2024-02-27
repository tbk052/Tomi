/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import VirtualKeyboard from '../components/virtual-keyboard';
import Users from '../data/users';

const TransferenceScreen = () => {
  const userData = Users;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{label: 'Tomi', value: 'tomi'}]);
  const [userName, setUserName] = useState('');
  const [bankNumberInput, setBankNumberInput] = useState('');
  const [virtualKeyState, setVirtualKeyState] = useState(true);

  const getKeyInput = (keyInput: React.SetStateAction<string>) => {
    setBankNumberInput(keyInput);
  };
  const filterBankAccount = (input: any) => {
    const foundUser = userData.find(user => user.bankNumber === input);
    if (foundUser) {
      setUserName(foundUser.fullName);
    } else {
      setUserName('Vui lòng kiểm tra lại Số Tài Khoản');
    }
  };
  if (bankNumberInput.includes('Xóa')) {
    setBankNumberInput(pre => pre.slice(0, -4));
  }

  useEffect(() => {
    if (bankNumberInput.length === 13 && value === 'tomi') {
      filterBankAccount(bankNumberInput);
    } else if (value !== 'tomi') {
      setUserName('Vui lòng chọn ngân hàng');
    } else if (bankNumberInput.length < 13) {
      setUserName('');
    }
  }, [bankNumberInput]);

  console.log(virtualKeyState);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.7,
          paddingHorizontal: ' 8%',
          paddingTop: ' 10%',
        }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="TÊN NGÂN HÀNG"
          placeholderStyle={{
            fontSize: 20,
            color: 'grey',
            paddingLeft: 15,
          }}
          labelStyle={{fontWeight: '500', fontSize: 20, paddingLeft: 10}}
        />
        <TextInput
          placeholder=" SỐ TÀI KHOẢN"
          value={bankNumberInput}
          maxLength={13}
          showSoftInputOnFocus={false}
          style={{
            marginTop: 15,
            paddingLeft: 20,
            borderWidth: 1,
            borderRadius: 10,
            fontSize: 20,
            color: 'grey',
            backgroundColor: '#fff',
            zIndex: -4,
          }}
        />
        <Text style={{paddingTop: 15, fontSize: 20}}> {userName}</Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: ' 8%',
        }}>
        <TextInput
          maxLength={13}
          showSoftInputOnFocus={false}
          style={{
            marginTop: 15,
            paddingLeft: 20,
            borderWidth: 1,
            borderRadius: 10,
            fontSize: 20,
            color: 'grey',
            backgroundColor: '#fff',
          }}
          placeholder={'Nhập số tiền'}
        />

        <TextInput
          onFocus={() => {
            setVirtualKeyState(false);
          }}
          onBlur={() => {
            setVirtualKeyState(true);
          }}
          style={{
            height: 130,
            marginTop: 15,
            paddingLeft: 20,
            borderWidth: 1,
            borderRadius: 10,
            fontSize: 20,
            color: 'grey',
            backgroundColor: '#fff',
          }}
          placeholder={'Lời nhắn'}
        />
      </View>
      <View style={{flex: 1}}>
        {virtualKeyState === true && (
          <VirtualKeyboard getKeyInput={getKeyInput} />
        )}
      </View>
    </View>
  );
};
export default TransferenceScreen;
