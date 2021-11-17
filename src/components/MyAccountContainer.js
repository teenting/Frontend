import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const MyAccountContainerBox = styled.TouchableOpacity`
  background-color: white;
  margin-top: 40%;
  width: 80%;
  height: 18%;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0px 7px 15px rgba(100, 100, 111, 0.2) ;
`;

// 내 계좌 제목 컨테이너 + 새로고침 버튼
const MyAccountHeaderContainer = styled.View`
  /* background-color: antiquewhite; */
  width: 100%;
  height: 35%;
  justify-content: center;
  padding: 0px 15px;
`;

const MyAccountTitle = styled.Text`
  color: #BAB9B9;
  font-size: 15px;
`;

const MyMoneyContainer = styled.View`
  /* background-color: aqua; */
  width: 100%;
  height: 30%;
  justify-content: center;
  padding: 0px 25px;
`;

const MyMoney = styled.Text`
  color: #6E6E6E;
  font-size: 40px;
`;

const MyAccountInfoContainer = styled.View`
  /* background-color: bisque; */
  width: 100%;
  height: 35%;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 0px 15px;
`;

const BankName = styled.Text`
  color: #BAB9B9;
  font-size: 14px;
  margin-right: 5px;
`;

const AccountNumber = styled.Text`
  color: #6E6E6E;
  font-size: 14px;
`;

export default function MyAccountContainer() {
  const navigation = useNavigation()

  return (
    <MyAccountContainerBox onPress={() => navigation.navigate('MyAccountDetails')}>
      <MyAccountHeaderContainer>
        <MyAccountTitle>내 계좌</MyAccountTitle>
      </MyAccountHeaderContainer>
      <MyMoneyContainer>
        <MyMoney>130,000</MyMoney>
      </MyMoneyContainer>
      <MyAccountInfoContainer>
        <BankName>농협</BankName>
        <AccountNumber>44580259645844</AccountNumber>
      </MyAccountInfoContainer>
    </MyAccountContainerBox>
  )
}