/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{flex: 1, backgroundColor: 'darkorange'}}>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>Hello World</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>Hello World</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>Hello World</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>Hello World</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>Hello World</Text>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
