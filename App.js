import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/routes/Main';
import Notification from './src/routes/Notification';
import Settings from './src/routes/Settings';
import ChildMain from './src/routes/ChildMain';
import Mission from './src/routes/Mission';
import Analysis from './src/routes/Analysis';
import Transfer from './src/routes/Transfer';


const Stack = createNativeStackNavigator();
const ChildStack = createNativeStackNavigator();


const ChildStackScreen = () => {
  return (
    <ChildStack.Navigator
        screenOptions={{
          headerShown: false,
          // cardStyle: { backgroundColor: 'white' }
        }}
    >
      <ChildStack.Screen name="ChildMain" component={ChildMain} />
      <ChildStack.Screen name="Mission" component={Mission} />
      <ChildStack.Screen name="Analysis" component={Analysis} />
      <ChildStack.Screen name="Transfer" component={Transfer} />
    </ChildStack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          // cardStyle: { backgroundColor: 'white' }
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="ChildScreen" component={ChildStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}