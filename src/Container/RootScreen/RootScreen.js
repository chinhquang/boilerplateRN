import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExampleScreen from '../ExampleScreen/ExampleScreen'

const rootStack = createStackNavigator();


export default function RootScreen() {
  return (
    <NavigationContainer>
      <rootStack.Navigator>
        <rootStack.Screen name="ExampleScreen" component={ExampleScreen} />
      </rootStack.Navigator>
    </NavigationContainer>
  );
}