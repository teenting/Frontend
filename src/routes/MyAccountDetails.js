import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import BackButtonHeader from '../components/BackButtonHeader';
import MyAccountContainer from '../components/MyAccountContainer';
import UsageBox from '../components/UsageBox';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../../utils/API_URL';
import { USER_TOKEN } from '../../utils/Token';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/core';

const refresh = require('../styles/images/icon/refresh.png')

// 전체 화면
const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const TitleContainer = styled.View`
  /* background-color: skyblue; */
  width: 100%;
  height: 13%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.Text`
  position: absolute;
  bottom: 20px;
  font-family: Helvetica_Bold;
  font-size: 18px;
`;

const PhotoContainer = styled.View`
  position: absolute;
  background-color: #00ac84;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  right: 20px;
  bottom: 10px;
  box-shadow: 3px 3px 6px rgba(100, 100, 111, 0.3) ;
  `;

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
const Button = styled.TouchableOpacity`
  width: 35%;
  height: 40%;
  border-radius: 10px;
  justify-content: center;
  margin: 0px 5px;
`;

const TransferButton = styled(Button)`
  background-color: #00ac84;
`;

const ChildAddButton = styled(Button)`
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
const UsageContainer = styled.View`
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
  padding: 5px 0px;
`;

// 사용 내역 목록
const UsageList = styled.View`
  background-color: white;
  width: 90%;
  height: 90%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
`;

export default function MyAccountDetails() {
  const navigation = useNavigation();
  const [usageData, setUsageData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const AuthStr = `Token ${USER_TOKEN}`;
    async function getUsageData() {
      axios.get(`${API_URL}/api/finance/transaction`, { headers: { Authorization: AuthStr } })
      .then((response) => {
        setUsageData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    getUsageData();
  }, [isFocused])

  return (
    <Screen>
      <TitleContainer>
        <MainTitle>내 계좌</MainTitle>
        <PhotoContainer />
      </TitleContainer>
      <BackButtonHeader />
      
      <OuterAccountContainer>
        <ButtonsContainer>
          <TransferButton>
            <ButtonTitle>송금 하기</ButtonTitle>
          </TransferButton>
          <ChildAddButton>
            <ButtonTitle>자녀 추가</ButtonTitle>
          </ChildAddButton>
        </ButtonsContainer>
      </OuterAccountContainer>
      <MyAccountContainer marginTop='33%'/>
      
      <UsageContainer>
        <UsageTitleContainer>
          <UsageTitle>사용 내역</UsageTitle>
        </UsageTitleContainer>

        <UsageListContainer>
          <UsageList>
            <ScrollView>
              {usageData.map((data, index) => (
                <UsageBox key={index} data={data} />
              ))}
            </ScrollView>
          </UsageList>
        </UsageListContainer>
      </UsageContainer>
    </Screen>
  )
}