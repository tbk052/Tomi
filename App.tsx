/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import AuthScreen from './screens/authscreen';

function App() {
  return (
    <View style={{flex: 1}}>
      {/* <AppStack /> */}
      <AuthScreen />
    </View>
  );
}

export default App;
