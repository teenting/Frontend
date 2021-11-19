import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from '../components/NavigationBar';

export default function Mission() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is mission page</Text>
      <NavigationBar/>
    </View>
  )
}