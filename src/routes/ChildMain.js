import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import BackButtonHeader from '../components/BackButtonHeader';
import NavigationBar from '../components/NavigationBar';

const refresh = require('../styles/images/icon/refresh.png')

// 전체 화면
const Screen = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
`;

// 헤더
const Header = styled.View`
  /* background-color: yellow; */
  width: 100%;
  height: 11.8%;
  position: absolute;
`;

const ChildPhotoContainer = styled.View`
  background-color: #00ac84;
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 40px;
  right: 20px;
  bottom: 0;
  `;

// 계좌
const AccountContainer = styled.View`
  /* background-color: green; */
  width: 100%;
  height: 36%;
  position: absolute;
  margin: 80px;
  justify-content: center;
  align-items: center;
`;

const Account = styled.View`
  background-color:  #ffffff;
  width: 80%;
  height: 60%;
  border-radius: 10;
  position: absolute;
`;

const AccountHeader = styled.View`
  /* background-color: blue; */
  width: 100%;
  height: 35%;
  position: absolute;
  justify-content: center;
  padding: 10px 15px;
`;

const AccountTitle = styled.Text`    
  color: #BAB9B9;
  font-size: 17px;
  font-weight: bold;
`;

const RefreshImage = styled.Image`
  width: 24px;
  height: 20px;
  position: absolute;
  right: 20px;
`;

const MoneyContainer = styled.View`
  /* background-color: black; */
  width: 100%;
  height: 55%;
  margin-top: 35px;
  justify-content: center;
  padding: 25px;
`;

const MoneyTitle = styled.Text`
  color: #6E6E6E;
  font-size: 50px;
`;

const BankContainer = styled.View`
  /* background-color: red; */
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0px 15px;
`;

const BankName = styled.Text`
  font-size: 15px;
  margin-right: 5px;
  color: #BAB9B9;
`
const AccountNumber = styled.Text`
  font-size: 15px;
  color: #6E6E6E;
`;

// 송금하기, 한도 설정 버튼
const ButtonsImageContainer = styled.View`
  /* background-color:  black; */
  width: 80%;
  height: 10%;
  position: absolute;
  margin: 320px;
  display: flex;
  justify-content: center;
`;

const TransferButton = styled.View`
  background-color: #00be92;
  width: 35%;
  height: 40%;
  position: absolute;
  left: 30px;
  display: flex;
  border-radius: 10;
  margin: auto;
`;

const TransferButtonTitle = styled.Text`
  width: 100%;
  height: 50%;
  color: #ffffff;
  position: absolute;
  text-align: center;
  margin-top: 10px;
`;

const LimitButton = styled.View`
  background-color: #00be92;
  width: 35%;
  height: 40%;
  position: absolute;
  right: 30px;
  display: flex;
  border-radius: 10;
  margin: auto;
`;

const LimitButtonTitle = styled.Text`
  /* background-color: black; */
  width: 100%;
  height: 50%;
  color: #ffffff;
  position: absolute;
  text-align: center;
  margin-top: 10px;
`;

// 사용 내역
const UsageContationer = styled.View`
  /* background-color: blue; */
  width: 100%;
  height: 53%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const UsageTitle = styled.Text`
  /* background-color: yellow; */
  width: 100%;
  height: 10%;
  color: #6E6E6E;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  padding: 15px;
`;

const UsageBox = styled.View`
  /* background-color: black; */
  width: 100%;
  height: 95%;
  margin-top: 40px;
  align-items: center;
`;


const Usage = styled.View`
  background-color: white;
  margin-top: 10px;
  width: 90%;
  height: 100%;
  border-radius: 20;
  padding: 30px 20px 2px 20px;
`;

const UsageInfo = styled.View`
  /* background-color: blue; */
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
`;

const UsageInfoPhoto = styled.View`
  background-color: #D5D5D5;
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 30px;
`;

const UsageInfoContainer = styled.View`
  /* background-color: red; */
  text-align: center;
  position: absolute;
  left: 50px;
`;

const UsageInfoText = styled.Text`
  font-size: 18px;
  margin-bottom: 4px;
`;

const UsageInfoBank = styled.Text`
  font-size: 12px;
  color: #505050;
`;

const UsageInfoPayContainter = styled.View`
  /* background-color: green; */
  text-align: center;
  margin-left: auto;
`;

const UsageInfoPay = styled.Text`
  color: #00BE92;
  font-size: 15px;
`;

export default function ChildMain() {
  return (
    <Screen>
      <Header>
        <ChildPhotoContainer />
      </Header>
      <BackButtonHeader />
      <AccountContainer>
        <Account>
          <AccountHeader>
            <AccountTitle>민수 계좌</AccountTitle>
            <RefreshImage source={refresh}/>
          </AccountHeader>
          <MoneyContainer>
            <MoneyTitle>65,000</MoneyTitle>
          </MoneyContainer>
          <BankContainer>
            <BankName>농협</BankName>
            <AccountNumber>325935830493</AccountNumber>
          </BankContainer>
        </Account>
      </AccountContainer>
      <ButtonsImageContainer>
        <TransferButton>
          <TransferButtonTitle>송금 하기</TransferButtonTitle>
        </TransferButton>
        <LimitButton>
          <LimitButtonTitle>한도 설정</LimitButtonTitle>
        </LimitButton>
      </ButtonsImageContainer>
      <UsageContationer>
        <UsageTitle>사용 내역</UsageTitle>
        <UsageBox>
          <Usage>
            <UsageInfo>
              <UsageInfoPhoto/>
              <UsageInfoContainer>
                <UsageInfoText>김이나</UsageInfoText>
                <UsageInfoBank>농협은행</UsageInfoBank>
              </UsageInfoContainer>
              <UsageInfoPayContainter>
                <UsageInfoPay>+3000원</UsageInfoPay>
              </UsageInfoPayContainter>
            </UsageInfo>
          </Usage>
        </UsageBox>
      </UsageContationer>
      <NavigationBar/>
    </Screen>
  )
}