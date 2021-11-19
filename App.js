import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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
import Login from './src/routes/Login';
import MyAccountDetails from './src/routes/MyAccountDetails';
import TransferSuccess from './src/routes/TransferSuccess';


const Stack = createNativeStackNavigator();
const ChildStack = createNativeStackNavigator();

export default function App() {
  const [login, setLogin] = useState(true);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        {login ? (
          <Stack.Group
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
          <Stack.Screen name="MyAccountDetails" component={MyAccountDetails} />
          <Stack.Screen name="TransferSuccess" component={TransferSuccess} />
        </Stack.Group>
        ) : (
          <Stack.Group
            screenOptions={{
              headerShown: false,
              // cardStyle: { backgroundColor: 'white' }
            }}
          >
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        )}
        <Stack.Group
          screenOptions={{
            headerShown: false,
            // cardStyle: { backgroundColor: 'white' }
          }}
        >
          <ChildStack.Screen name="ChildMain" component={ChildMain} />
          <ChildStack.Screen name="Mission" component={Mission} />
          <ChildStack.Screen name="Analysis" component={Analysis} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}