/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './navigators/root.stack';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './navigators/main.stack';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <RootStack /> */}
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
