import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthScreen from '../screens/auth.screen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
    </Stack.Navigator>
  );
};
export default MainStack;
