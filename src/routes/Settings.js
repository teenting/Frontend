import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import BackButtonHeader from '../components/BackButtonHeader';

const AccountSettingsList = ['인증 및 보안', '결제', '송금', '자동이체']
const AppSettingsList = ['앱 버전', '약관 및 개인정보 처리 내역', '탈퇴하기']

const more = require('../styles/images/icon/moreArrow.png');

const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`;

const MySettingsContainer = styled.View`
  /* background-color: thistle; */
  width: 100%;
  height: 6%;
  margin: 10px 0px;
`;

const AccountSettingsContainer = styled.View`
  /* background-color: springgreen; */
  width: 100%;
  height: 24%;
  margin: 10px 0px;
`;

const AppSettingsContainer = styled.View`
  /* background-color: steelblue; */
  width: 100%;
  height: 18%;
  margin: 10px 0px;
`;

const TabContainer = styled.TouchableOpacity`
  background-color: white;
  width: 100%;
  height: 50px;
  justify-content: center;
  position: relative;
  padding: 0px 50px;
`;

const TabText = styled.Text`
  font-size: 15px;
`;

const TabArrow = styled.Image`
  position: absolute;
  right: 40px;
  width: 8px;
  height: 12px;
`;


export default function Notification() {
  return (
    <Screen>
      <BackButtonHeader />
      <MySettingsContainer>
        <TabContainer>
          <TabText>내 정보</TabText>
          <TabArrow source={more} />
        </TabContainer>
      </MySettingsContainer>

      <AccountSettingsContainer>
        { AccountSettingsList.map((eachSetting) => (
          <TabContainer>
            <TabText>{eachSetting}</TabText>
            <TabArrow source={more} />
          </TabContainer>
        )) }
      </AccountSettingsContainer>

      <AppSettingsContainer>
        { AppSettingsList.map((eachSetting) => (
          <TabContainer>
          <TabText>{eachSetting}</TabText>
          <TabArrow source={more} />
        </TabContainer>
        )) }
      </AppSettingsContainer>
    </Screen>
  )
}