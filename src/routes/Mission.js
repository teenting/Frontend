import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import BackButtonHeader from '../components/BackButtonHeader';
import NavigationBar from '../components/NavigationBar';

const Screen = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
`;

export default function Mission() {
  return (
    <Screen>
      <BackButtonHeader/>
      <Text>This is mission page</Text>
      <NavigationBar/>
    </Screen>
  )
}