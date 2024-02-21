/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';

const keys = [
  {
    name: '1',
    img: '', //should be: require('imagePath') if use
  },
  {
    name: '2',
    img: '',
  },
  {
    name: '3',
    img: '',
  },
  {
    name: '4',
    img: '',
  },
  {
    name: '5',
    img: '',
  },
  {
    name: '6',
    img: '',
  },
  {
    name: '7',
    img: '',
  },
  {
    name: '8',
    img: '',
  },
  {
    name: '9',
    img: '',
  },
  {
    name: '',
    img: '',
  },
  {
    name: '0',
    img: '',
  },
  {
    name: 'Xóa',
    img: '',
  },
];

const Keyboard = ({getKeyInput, name}: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        getKeyInput((pre: string) => pre + name);
      }}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.15,
        borderColor: 'grey',
        height: 57,
      }}>
      <Text style={{fontSize: 25}}>{name}</Text>
    </TouchableOpacity>
  );
};

const VirtualKeyboard = ({getKeyInput}: any) => {
  return (
    <FlatList
      data={keys}
      renderItem={({item}) => (
        <Keyboard getKeyInput={getKeyInput} name={item.name} />
      )}
      numColumns={3}
      keyExtractor={item => item.name}
    />
  );
};
export default VirtualKeyboard;
