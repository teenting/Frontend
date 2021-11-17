// 메인화면에서 자녀 계좌 보여줄 수 있는 탭
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const AccountTab = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: white;
  width: 48%;
  height: 100%;
  box-shadow: 0px 7px 8px rgba(100, 100, 111, 0.2) ;
`;

// 자녀 이름 컨테이너
const ChildrenNameContainer = styled.View`
  /* background-color: blueviolet; */
  width: 100%;
  height: 20%;
`;


// 화폐 단위 컨테이너
const MoneyUnitContainer = styled.View`
  /* background-color: chartreuse; */
  width: 100%;
  height: 25%;
`;


// 자녀 잔액 컨테이너
const ChildrenMoneyContainer = styled.View`
  /* background-color: coral; */
  width: 100%;
  height: 27%;
`;


// 송금하기 버튼 컨테이너
const TransferTabContainer = styled.View`
  /* background-color: cornsilk; */
  width: 100%;
  height: 28%;
  justify-content: center;
  align-items: center;
`;

const TransferTab = styled.TouchableOpacity`
  background-color: #00ac84;
  width: 85%;
  height: 65%;
  border-radius: 10px;
`;

export default function ChildrenAccountTab() {
  const navigation = useNavigation()

  return (
      <AccountTab onPress={() => {navigation.navigate('ChildMain')}}>
        <ChildrenNameContainer></ChildrenNameContainer>
        <MoneyUnitContainer></MoneyUnitContainer>
        <ChildrenMoneyContainer></ChildrenMoneyContainer>
        <TransferTabContainer>
          <TransferTab onPress={() => navigation.navigate('Transfer')}>

          </TransferTab>
        </TransferTabContainer>
      </AccountTab>
  )
}