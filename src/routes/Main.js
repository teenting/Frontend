import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import MyAccountContainer from '../components/MyAccountContainer';
import ChildrenAccountTab from '../components/ChildrenAccountTab';
import RecentActivityTab from '../components/RecentActivityTab';
import { useFonts } from 'expo-font';

const background = require('../styles/images/background.png');
const logo = require('../styles/images/logo/logo_green_circle.png');
const bellImage = require('../styles/images/icon/bell.png');
const settingsImage = require('../styles/images/icon/settings.png');

// 전체 화면
const Screen = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  display: flex;
`;

const BackgroundImage = styled.Image`
  width: 150%;
  height: 80%;
  margin-top: -280px;
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
  justify-content: center;
  align-items: center;
`;

const NoticeButton = styled(ButtonBackground)``;

const NoticeButtonImage = styled.Image`
  width: 15px;
  height: 17px;
`;

const SettingsButton = styled(ButtonBackground)``;

const SettingsButtonImage = styled.Image`
  width: 17px;
  height: 17px;
`;

// 자녀 관리 + AccountContainer
const ChildrenAccountContainer = styled.View`
  /* background-color: blue; */
  width: 100%;
  height: 30%;
  padding: 15px 20px;
`;

// 자녀 전체의 계좌 Tab을 담고 있는 컨테이너
const AccountContainer = styled.View`
  /* background-color: blueviolet; */
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ChildrenAccoutTitle = styled.Text`
  color: #00ac84;
  font-size: 20px;
  font-family: Helvetica;
  margin-top: 3px;
  margin-bottom: 15px;
`;

// '최근 활동' 제목과 탭
const RecentActivityContainer = styled.View`
  /* background-color: rosybrown; */
  width: 100%;
  height: 17%;
  display: flex;
`;

const RecentActivityTextContainer = styled.View`
  /* background-color: salmon; */
  width: 100%;
  height: 15%;
  padding: 0px 20px;
`;

const RecentActivityText = styled.Text`
  color: #6E6E6E;
  font-size: 20px;
  font-family: Helvetica;
`;

const RecentActivityListContainer = styled.View`
  /* background-color: sienna; */
  width: 100%;
  height: 100%;
  padding: 5px 20px;
`;


export default function Main() {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    ModernSans: require('../styles/fonts/ModernSans_Font/ModernSans_Light.ttf'),
    Helvetica_Bold: require('../styles/fonts/Helvetica_Font/Helvetica_Bold.ttf'),
    Helvetica_Light: require('../styles/fonts/Helvetica_Font/Helvetica_Light.ttf'),
    Helvetica: require('../styles/fonts/Helvetica_Font/Helvetica.ttf'),
  });

  
  if (!loaded) {
    return null;
  }

  return (
    <Screen>
        <BackgroundImage source={background} />
        <Header>
          <LogoImageContainer>
            <LogoImage source={logo} />
          </LogoImageContainer>

          <HeaderButtonsContainer>
            <ButtonsContainer>
              <TouchableOpacity onPress={() => navigation.push('Notification')}>
                <NoticeButton>
                  <NoticeButtonImage source={bellImage} />
                </NoticeButton>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.push('Settings')}>
                <SettingsButton>
                  <SettingsButtonImage source={settingsImage} />
                </SettingsButton>
              </TouchableOpacity>
            </ButtonsContainer>
          </HeaderButtonsContainer>
        </Header>
        <MyAccountContainer />
        
        <ChildrenAccountContainer>
          <ChildrenAccoutTitle>자녀 관리</ChildrenAccoutTitle>
          <AccountContainer>
            <ScrollView horizontal={true} style={{width: 100, height: 180}}>
              <ChildrenAccountTab />
              <ChildrenAccountTab />
              <ChildrenAccountTab />
            </ScrollView>
          </AccountContainer>
        </ChildrenAccountContainer>

        <RecentActivityContainer>
          <RecentActivityTextContainer>
            <RecentActivityText>최근 활동</RecentActivityText>
          </RecentActivityTextContainer>
          <RecentActivityListContainer>
            <ScrollView >
              <RecentActivityTab />
              <RecentActivityTab />
              <RecentActivityTab />
            </ScrollView>
          </RecentActivityListContainer>
        </RecentActivityContainer>
    </Screen>
  )
}