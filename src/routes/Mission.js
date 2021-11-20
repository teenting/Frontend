import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import BackButtonHeader from '../components/BackButtonHeader';

const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`;


export default function Analysis() {
  return (
    <Screen>
      <BackButtonHeader />
    </Screen>
  )
}