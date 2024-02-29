/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react-native/no-inline-styles */
// import React, {useEffect, useState} from 'react';
// import {Text, TextInput, View} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import numeral from 'numeral';
// import VirtualKeyboard from '../components/virtual-keyboard';
// import Users from '../data/users';

import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Users from '../data/users';

// const TransferenceScreen = () => {
//   const userData = Users;

//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([{label: 'Tomi', value: 'tomi'}]);
//   const [userName, setUserName] = useState('');
//   const [bankNumberInput, setBankNumberInput] = useState('');
//   const [virtualKeyState, setVirtualKeyState] = useState(false);

//   const bankNumber = parseInt(bankNumberInput, 10);

//   const getKeyInput = (keyInput: React.SetStateAction<string>) => {
//     setBankNumberInput(keyInput);
//   };
//   const filterBankAccount = (input: any) => {
//     const foundUser = userData.find(user => user.bankNumber === input);
//     if (foundUser) {
//       setUserName(foundUser.fullName);
//     } else {
//       setUserName('Vui lòng kiểm tra lại Số Tài Khoản');
//     }
//   };
//   if (bankNumberInput.includes('Xóa')) {
//     setBankNumberInput(pre => pre.slice(0, -4));
//   }

//   useEffect(() => {
//     if (bankNumberInput.length === 13 && value === 'tomi') {
//       filterBankAccount(bankNumberInput);
//     } else if (bankNumberInput.length < 13) {
//       setUserName('');
//     }
//   }, [bankNumberInput]);

//   // console.log(numeral(10000).format('000.00'));
//   console.log(typeof bankNumber);
//   return (
//     <View style={{flex: 1}}>
//       <View
//         style={{
//           paddingHorizontal: ' 8%',
//           paddingTop: ' 10%',
//         }}>
//         <DropDownPicker
//           open={open}
//           value={value}
//           items={items}
//           onSelectItem={() => {
//             setUserName('');
//             setVirtualKeyState(true);
//           }}
//           setOpen={setOpen}
//           setValue={setValue}
//           setItems={setItems}
//           placeholder="TÊN NGÂN HÀNG"
//           placeholderStyle={{
//             fontSize: 20,
//             color: 'grey',
//             paddingLeft: 15,
//           }}
//           labelStyle={{fontWeight: '500', fontSize: 20, paddingLeft: 10}}
//         />
//         <TextInput
//           placeholder=" SỐ TÀI KHOẢN"
//           onFocus={() => {
//             if (value === 'tomi') {
//               setVirtualKeyState(true);
//             } else {
//               setUserName('Vui lòng chọn Ngân hàng');
//             }
//           }}
//           value={bankNumberInput}
//           maxLength={13}
//           style={{
//             marginTop: 15,
//             paddingLeft: 20,
//             borderWidth: 1,
//             borderRadius: 10,
//             fontSize: 20,
//             color: 'grey',
//             backgroundColor: '#fff',
//             zIndex: -4,
//           }}
//         />
//         {userName !== '' && (
//           <Text
//             style={{
//               paddingTop: 15,
//               fontSize: 20,
//               color: '#000',
//               fontWeight: '500',
//             }}>
//             {' '}
//             {userName}
//           </Text>
//         )}
//       </View>
//       <View
//         style={{
//           paddingHorizontal: ' 8%',
//         }}>
//         <TextInput
//           onFocus={() => {
//             setVirtualKeyState(true);
//           }}
//           onBlur={() => {
//             setVirtualKeyState(false);
//           }}
//           maxLength={13}
//           showSoftInputOnFocus={false}
//           style={{
//             marginTop: 15,
//             paddingLeft: 20,
//             borderWidth: 1,
//             borderRadius: 10,
//             fontSize: 20,
//             color: 'grey',
//             backgroundColor: '#fff',
//           }}
//           placeholder={'Nhập số tiền'}
//         />

//         <TextInput
//           onFocus={() => {
//             setVirtualKeyState(false);
//           }}
//           style={{
//             height: 130,
//             marginTop: 15,
//             paddingLeft: 20,
//             borderWidth: 1,
//             borderRadius: 10,
//             fontSize: 20,
//             color: 'grey',
//             backgroundColor: '#fff',
//           }}
//           placeholder={'Lời nhắn'}
//         />
//       </View>
//       {virtualKeyState === true && (
//         <View style={{}}>
//           <VirtualKeyboard getKeyInput={getKeyInput} />
//         </View>
//       )}
//     </View>
//   );
// };
// export default TransferenceScreen;

const TransferenceScreen = () => {
  const userData = Users;

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([{label: 'Tomi', value: 'tomi'}]);

  const [transferInfo, setTransferInfo] = useState({}); // Lưu thông tin chuyển khoản
  const [bankName, setBankName] = useState(null);
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState('');

  const [accountNote, setAccountNote] = useState();
  // console.log(transferInfo);
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
          onSelectItem={() => {}}
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
          placeholder="SỐ TÀI KHOẢN"
          onChangeText={input => {
            setBankAccountNumber(input);
          }}
        />
        {accountNote != null && (
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
