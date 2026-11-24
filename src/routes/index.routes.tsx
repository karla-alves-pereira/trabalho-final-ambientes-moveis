import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomRoutes from './bottom.routes';
import Login from '../pages/login';

export type RootStackParamList = {
  Login: undefined;
  Principal: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
      />

      <Stack.Screen
        name="Principal"
        component={BottomRoutes}
      />
    </Stack.Navigator>
  );
}