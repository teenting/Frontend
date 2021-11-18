// BackButton이 있는 헤더

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const greenBackButtonImage = require('../styles/images/icon/greenBackButton.png');

const HeaderContainer = styled.View`
/* background-color: crimson; */
  width: 100%;
  height: 13%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
`;

const BackButtonContainer = styled.View`
  /* background-color: darkgoldenrod; */
  position: absolute;
  left: 0;
  width: 25%;
  height: 100%;
`;

const BackButton = styled.TouchableOpacity`
  background-color: white;
  opacity: 0.70;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  bottom: 10px;
  left: 20px;
  justify-content: center;
  align-items: center;
`;

const BackButtonImage = styled.Image`
  width: 12px;
  height: 20px;
`;


export default function BackButtonHeader() {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      <BackButtonContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonImage source={greenBackButtonImage} />
        </BackButton>
      </BackButtonContainer>
    </HeaderContainer>
  )
}