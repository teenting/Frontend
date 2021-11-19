import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const success = require('../styles/images/icon/successCheck.png');

const Screen = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const SuccessContainer = styled.View`
  /* background-color: thistle; */
  width: 100%;
  height: 35%;
  display: flex;
`;

const SuccessImageContainer = styled.View`
  /* background-color: yellowgreen; */
  width: 100%;
  height: 60%;
  justify-content: center;
  align-items: center;
`;

const SuccessImage = styled.Image`
  width: 120px;
  height: 120px;
`;

// '아무개님에게'
const ReciverInfoContainer = styled.View`
  /* background-color: wheat; */
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;

const RecieverInfo = styled.Text`
  font-size: 23px;
`;

// 3000원 송금완료
const SuccessTextContainer = styled.View`
  /* background-color: seashell; */
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MoneyText = styled.Text`
  color: #00ac84;
  font-size: 23px;
`;

const SuccessText = styled.Text`
  font-size: 23px;
`;

// 입금계좌 농협 2403580454035930
const AccountInfoContainer = styled.View`
  /* background-color: royalblue; */
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

//입금계좌
const RecieveInfoText = styled.Text`
  color: #bab9b9;
  font-size: 15px;
  margin-right: 8px;
`;

// 농협 2403580454035930
const AccountInfoText = styled.Text`
  color: #6e6e6e;
  font-size: 15px;
`;


export default function TransferSuccess() {
  return (
    <Screen>
      <SuccessContainer>
        <SuccessImageContainer>
          <SuccessImage source={success} />
        </SuccessImageContainer>
        
        <ReciverInfoContainer>
          <RecieverInfo>민수님께</RecieverInfo>
        </ReciverInfoContainer>
        <SuccessTextContainer>
          <MoneyText>1500원</MoneyText>
          <SuccessText> 전송 완료</SuccessText>
        </SuccessTextContainer>
        <AccountInfoContainer>
          <RecieveInfoText>입금계좌</RecieveInfoText>
          <AccountInfoText>농협 39482053052</AccountInfoText>
        </AccountInfoContainer>

      </SuccessContainer>
    </Screen>
  )
}