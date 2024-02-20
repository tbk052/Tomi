import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TwoFactorsAuthen from '../screens/2fa.screen';
import AuthScreen from '../screens/auth.screen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AuthScreen">
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="TwoFactorsAuthen" component={TwoFactorsAuthen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
