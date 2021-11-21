import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const inactive_home = require('./src/styles/images/icon/home_gray.png');
const inactive_mission = require('./src/styles/images/icon/mission_gray.png');
const inactive_graph = require('./src/styles/images/icon/graph_gray.png');

const active_home = require('./src/styles/images/icon/home_green.png');
const active_mission = require('./src/styles/images/icon/mission_green.png');
const active_graph = require('./src/styles/images/icon/graph_green.png');

const Stack = createNativeStackNavigator();
const ChildTab = createBottomTabNavigator();

function childrenTabScreen() {
  return (
      <ChildTab.Navigator
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#00ac84',
        tabBarInactiveTintColor: '#7F7F7F',
        // cardStyle: { backgroundColor: 'white' }
        }}
      >
        <ChildTab.Screen name="ChildMain" component={ChildMain} options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image source={focused ? active_home : inactive_home} style={{width: 20, height: 20, overflow: 'visible'}}/>
            )
          }
        }}/>
        <ChildTab.Screen name="Mission" component={Mission} options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image source={focused ? active_mission : inactive_mission} style={{width: 19, height: 19, overflow: 'visible'}}/>
            )
          }
        }}/>
        <ChildTab.Screen name="Analysis" component={Analysis} options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image source={focused ? active_graph : inactive_graph} style={{width: 16, height: 16, overflow: 'visible'}}/>
            )
          }
        }}/>
      </ChildTab.Navigator>
  )
}

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
          <Stack.Screen name="ChildTabScreen" component={childrenTabScreen} />
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
        {/* <Stack.Group
          screenOptions={{
            headerShown: false,
            // cardStyle: { backgroundColor: 'white' }
          }}
        >
          <ChildStack.Screen name="ChildMain" component={ChildMain} />
          <ChildStack.Screen name="Mission" component={Mission} />
          <ChildStack.Screen name="Analysis" component={Analysis} />
        </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}