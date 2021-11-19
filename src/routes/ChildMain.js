import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import BackButtonHeader from '../components/BackButtonHeader';
import NavigationBar from '../components/NavigationBar';
import MyAccountContainer from '../components/MyAccountContainer';
import UsageBox from '../components/UsageBox';

const refresh = require('../styles/images/icon/refresh.png')

// 전체 화면
const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

// 헤더
const Header = styled.View`
`;

// const ChildPhotoContainer = styled.View`
//   background-color: #00ac84;
//   width: 40px;
//   height: 40px;
//   border-radius: 40px;
//   bottom: 0;
//   `;

const OuterAccountContainer = styled.View`
  /* background-color: salmon; */
  width: 100%;
  height: 35%;
`;

// 송금하기, 한도 설정 버튼
const ButtonsContainer = styled.View`
  /* background-color: royalblue; */
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

// 버튼 공통양식
const Button = styled.View`
  width: 35%;
  height: 40%;
  border-radius: 10px;
  justify-content: center;
  margin: 0px 5px;
`;

const TransferButton = styled(Button)`
  background-color: #00ac84;
`;

const LimitButton = styled(Button)`
  background-color: #00be92;
`;

// 버튼 글씨 공통 양식
const ButtonTitle = styled.Text`
  text-align: center;
  width: 100%;
  height: 50%;
  color: #ffffff;
`;

// 사용 내역 컨테이너
const UsageContationer = styled.View`
  /* background-color: blue; */
  width: 100%;
  height: 55%;
  display: flex;
`;

const UsageTitleContainer = styled.View`
  /* background-color: yellow; */
  width: 100%;
  height: 10%;
  justify-content: center;
  padding: 0px 20px;
`;

// 사용 내역
const UsageTitle = styled.Text`
  color: #6E6E6E;
  font-size: 20px;
`;

// 사용 내역 목록 컨테이너
const UsageListContainer = styled.View`
  /* background-color: black; */
  width: 100%;
  height: 95%;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
`;

// 사용 내역 목록
const UsageList = styled.View`
  background-color: white;
  width: 90%;
  height: 100%;
  border-radius: 20px;
  padding-top: 10px;
`;

// Each 사용 내역
const UsageInfo = styled.View`
  /* background-color: blue; */
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

// 회색 동그라미 컨테이너
const UsageInfoPhotoContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

// 회색 동그라미
const UsageInfoPhoto = styled.View`
  background-color: #D5D5D5;
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;

// 사용 내역 정보
const UsageInfoContainer = styled.View`
  /* background-color: red; */
  flex: 7;
  justify-content: center;
`;

const UsageInfoText = styled.Text`
  font-size: 18px;
  margin-bottom: 4px;
`;

const UsageInfoBank = styled.Text`
  font-size: 12px;
  color: #505050;
`;

// 돈 정보 컨테이너
const UsageInfoPayContainter = styled.View`
  /* background-color: green; */
  flex: 2.5;
  justify-content: center;
`;

const UsageInfoPay = styled.Text`
  color: #00BE92;
  font-size: 15px;
`;

export default function ChildMain() {
  return (
    <Screen>
        {/* <ChildPhotoContainer /> */}
      <BackButtonHeader />
      <OuterAccountContainer>
        <ButtonsContainer>
          <TransferButton>
            <ButtonTitle>송금 하기</ButtonTitle>
          </TransferButton>
          <LimitButton>
            <ButtonTitle>한도 설정</ButtonTitle>
          </LimitButton>
        </ButtonsContainer>
      </OuterAccountContainer>
      <MyAccountContainer marginTop='33%'/>
      
      <UsageContationer>
        <UsageTitleContainer>
          <UsageTitle>사용 내역</UsageTitle>
        </UsageTitleContainer>

        <UsageListContainer>
          <UsageList>
            <UsageBox />
          </UsageList>
        </UsageListContainer>
      </UsageContationer>
    </Screen>
  )
}