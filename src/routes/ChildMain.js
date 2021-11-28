import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styled from 'styled-components';
import BackButtonHeader from '../components/BackButtonHeader';
import ChildAccountContainer from '../components/ChildAccountContainer';
import ChildUsageBox from '../components/ChildUsageBox';
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

const ChildPhotoContainer = styled.View`
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
  /* justify-content: center; */
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



export default function ChildMain({ parentid, childname, id}) {
  const [childUsage, setChildUsage] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const AuthStr = `Token ${USER_TOKEN}`;

    async function getChildUsage() {
      axios.get(`${API_URL}/api/finance/transaction?childId=${id}`, { headers: { Authorization: AuthStr } })
      .then((response) => {
        setChildUsage(response.data);
      })
      .catch((error) => {
        console.log("================CHildMain===============")
        console.log(error);
      })
    }
    
    getChildUsage();
  }, [isFocused])

  return (
    <Screen>
      <TitleContainer>
        <MainTitle>자녀 계좌</MainTitle>
        <ChildPhotoContainer />
      </TitleContainer>
      <BackButtonHeader />
      
      <OuterAccountContainer>
        <ButtonsContainer>
          <TransferButton onPress={() => navigation.push('Transfer', { childId: id, childname: childname })}>
            <ButtonTitle>송금 하기</ButtonTitle>
          </TransferButton>
          <LimitButton>
            <ButtonTitle>한도 설정</ButtonTitle>
          </LimitButton>
        </ButtonsContainer>
      </OuterAccountContainer>
      <ChildAccountContainer childId={id} marginTop='33%'/>
      
      <UsageContationer>
        <UsageTitleContainer>
          <UsageTitle>사용 내역</UsageTitle>
        </UsageTitleContainer>

        <UsageListContainer>
          <UsageList>
            <ScrollView>
              {childUsage.map((data, index) => (
                <ChildUsageBox key={index} childUsageData={data} />
              ))}
            </ScrollView>
          </UsageList>
        </UsageListContainer>
      </UsageContationer>
    </Screen>
  )
}