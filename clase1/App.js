import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ToDoList from './src/screens/ToDoList';
import PantallaDos from './src/screens/PantallaDos';
import Calculadora from './src/screens/Calculadora';

const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDoList">
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="Calculadora" component={Calculadora} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

