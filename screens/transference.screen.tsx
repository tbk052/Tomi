/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Users from '../data/users';

const TransferenceScreen = () => {
  const userData = Users;

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([{label: 'Tomi', value: 'tomi'}]);

  const [transferInfo, setTransferInfo] = useState({}); // Lưu thông tin chuyển khoản
  const [bankName, setBankName] = useState(null);
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState('');

  const [accountNote, setAccountNote] = useState<string>('');
  return (
    <View style={{margin: 20, borderRadius: 14, backgroundColor: '#c9f0f5'}}>
      <View
        style={{
          paddingHorizontal: '5%',
          paddingTop: '6%',
        }}>
        <DropDownPicker
          open={open}
          value={bankName}
          items={items}
          onSelectItem={() => {
            setAccountNote('');
          }}
          setOpen={setOpen}
          setValue={setBankName}
          setItems={setItems}
          placeholder="TÊN NGÂN HÀNG"
          placeholderStyle={{
            fontSize: 20,
            color: 'grey',
            paddingLeft: 15,
            fontWeight: '500',
          }}
          style={{borderColor: 'grey', borderRadius: 12, height: 60}}
          labelStyle={{fontWeight: '500', fontSize: 20, paddingLeft: 10}}
          listItemContainerStyle={{
            height: 'auto',
            width: 'auto',
          }}
          listItemLabelStyle={{
            paddingLeft: 50,
            height: 50,
            fontWeight: '500',
            fontSize: 18,
            textAlign: 'left',
            textAlignVertical: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#9aa0a1',
          }}
        />
        <TextInput
          style={{
            height: 60,
            borderColor: '#9aa0a1',
            borderWidth: 1,
            backgroundColor: '#fff',
            borderRadius: 12,
            marginVertical: 20,
            fontSize: 20,
            color: 'grey',
            paddingLeft: 30,
            fontWeight: '500',
          }}
          maxLength={13}
          placeholder="SỐ TÀI KHOẢN"
          onChangeText={input => {
            setBankAccountNumber(input);
            if (input.length === 13 && bankName !== null) {
              const foundUser = userData.find(
                user => user.bankNumber === input,
              );
              if (foundUser) {
                setAccountNote(foundUser.fullName);
              } else {
                setAccountNote('Vui lòng kiểm tra lại Số Tài Khoản');
              }
            }
            if (input.length !== 13) {
              setAccountNote('');
            }
            if (bankName === null) {
              setAccountNote('Vui lòng chọn ngân hàng');
            }
          }}
        />
        {accountNote !== '' && (
          <Text style={{marginBottom: 20, fontSize: 18, paddingLeft: 20}}>
            {accountNote}
          </Text>
        )}
        <TextInput
          style={{
            height: 60,
            borderColor: '#9aa0a1',
            borderWidth: 1,
            backgroundColor: '#fff',
            borderRadius: 12,
            marginBottom: 20,
            fontSize: 20,
            color: 'grey',
            paddingLeft: 30,
            fontWeight: '500',
          }}
          placeholder="Nhập số tiền"
          onChangeText={input => {
            setAmount(parseInt(input, 10));
          }}
        />
        <Text
          style={{
            borderColor: '#9aa0a1',
            borderWidth: 1,
            borderBottomWidth: 0,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            backgroundColor: '#fff',
            paddingLeft: 30,
            paddingTop: 20,
            fontSize: 17,
            fontWeight: '500',
          }}>
          Lời nhắn (nếu có)
        </Text>
        <TextInput
          style={{
            height: 170,
            borderColor: '#9aa0a1',
            borderWidth: 1,
            borderTopWidth: 0,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            backgroundColor: '#fff',
            color: 'grey',
            paddingLeft: 30,
            fontSize: 20,
            fontWeight: '700',
            textAlignVertical: 'top',
          }}
          onChangeText={input => {
            setNote(input);
          }}
          multiline
          blurOnSubmit
          maxLength={50}
        />
      </View>
      <TouchableOpacity
        style={{
          height: 60,
          marginVertical: 20,
          marginHorizontal: '20%',
          borderRadius: 20,
          backgroundColor: '#51a7ad',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setTransferInfo({
            bankName: bankName,
            bankAccountNumber: bankAccountNumber,
            amount: amount,
            note: note,
          });
          console.log(transferInfo);
        }}>
        <Text style={{fontSize: 25, color: '#fff', fontWeight: '600'}}>
          XÁC NHẬN
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default TransferenceScreen;
