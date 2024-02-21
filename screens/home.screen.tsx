import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = () => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('TestScreen');
      }}>
      <Text>Hello World</Text>
    </TouchableOpacity>
  );
};
export default HomeScreen;
