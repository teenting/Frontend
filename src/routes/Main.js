import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import MyAccountContainer from '../components/MyAccountContainer';

const background = require('../styles/images/background.png');
const logo = require('../styles/images/logo/logo_green_circle.png');

// 전체 화면
const Screen = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
`;

const BackgroundImage = styled.Image`
  width: 150%;
  height: 80%;
  margin-top: -250px;
`;

// 로고, 알림, 설정 있는 구역
const Header = styled.View`
  /* background-color: aliceblue; */
  width: 100%;
  height: 13%;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const LogoImageContainer = styled.View`
  /* background-color: aqua; */
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
`

const LogoImage = styled.Image`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 25px;
`;

const HeaderButtonsContainer = styled.View`
  /* background-color: antiquewhite; */
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const ButtonsContainer = styled.View`
  /* background-color: black; */
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 25px;
`;

const ButtonBackground = styled.View`
  width: 35px;
  height: 35px;
  margin-left: 5px;
  background-color: white;
  opacity: 0.64;
  border-radius: 5px;
`;

export default function Main() {
  return (
    <Screen>
        <BackgroundImage source={background} />
        <Header>
          <LogoImageContainer>
            <LogoImage source={logo} />
          </LogoImageContainer>

          <HeaderButtonsContainer>
            <ButtonsContainer>
              <ButtonBackground />
              <ButtonBackground />
            </ButtonsContainer>
          </HeaderButtonsContainer>
        </Header>
        <MyAccountContainer />
    </Screen>
  )
}