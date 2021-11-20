// 메인화면에서 자녀 계좌 보여줄 수 있는 탭
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const rightArrow = require('../styles/images/icon/rightArrow.png');
const unitWon = require('../styles/images/icon/unitWon.png');

const AccountTab = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: white;
  width: 140px;
  height: 160px;
  box-shadow: 0px 7px 8px rgba(100, 100, 111, 0.2);
  margin: 0px 6px;
`;

// 자녀 이름 컨테이너
const ChildrenNameContainer = styled.View`
  /* background-color: blueviolet; */
  width: 100%;
  height: 23%;
  justify-content: center;
  padding: 0px 13px;
`;

const ChildrenName = styled.Text`
  color: #00ac84;
  font-size: 14px;
`;


// 화폐 단위 컨테이너
const MoneyUnitContainer = styled.View`
  /* background-color: chartreuse; */
  width: 100%;
  height: 22%;
  padding: 0px 13px;
`;

const MoneyUnitImage = styled.Image`
  width: 30px;
  height: 30px;
`;


// 자녀 잔액 컨테이너
const ChildrenMoneyContainer = styled.View`
  /* background-color: coral; */
  width: 100%;
  height: 24%;
  padding: 0px 13px;
  justify-content: center;
`;

const ChildrenMoney = styled.Text`
  color: #6E6E6E;
  font-size: 28px;
`;


// 송금하기 버튼 컨테이너
const TransferTabContainer = styled.View`
  /* background-color: cornsilk; */
  width: 100%;
  height: 33%;
  justify-content: center;
  align-items: center;
`;

const TransferTab = styled.TouchableOpacity`
  background-color: #00ac84;
  width: 85%;
  height: 50%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const InnerTransferTabContainer = styled.View`
  /* background-color: lightskyblue; */
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TransferTabText = styled.Text`
  color: white;
  font-size: 12px;
`;

const TransferTabImage = styled.Image`
  width: 10px;
  height: 10px;
`;

export default function ChildrenAccountTab() {
  const navigation = useNavigation()

  return (
      <AccountTab onPress={() => {navigation.push('ChildTabScreen', { screen: 'ChildMain' })}}>
        <ChildrenNameContainer>
          <ChildrenName>민수</ChildrenName>
        </ChildrenNameContainer>
        <MoneyUnitContainer>
          <MoneyUnitImage source={unitWon} />
        </MoneyUnitContainer>
        <ChildrenMoneyContainer>
          <ChildrenMoney>
            65,000
          </ChildrenMoney>
        </ChildrenMoneyContainer>
        <TransferTabContainer>
          <TransferTab onPress={() => navigation.push('Transfer')}>
            <InnerTransferTabContainer>
              <TransferTabText>송금하기</TransferTabText>
              <TransferTabImage source={rightArrow}/>
            </InnerTransferTabContainer>
          </TransferTab>
        </TransferTabContainer>
      </AccountTab>
  )
}