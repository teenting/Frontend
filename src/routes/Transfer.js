import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import BackButtonHeader from '../components/BackButtonHeader';

const NumberList = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0', '2' ]

const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`;

const TransferTitle = styled.Text`
  position: absolute;
`;

// 입력한 액수가 나타나는 구역
const MoneyInputContainer = styled.View`
  /* background-color: dimgray; */
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
`;

const InnerMoneyInputContainer = styled.View`
  /* background-color: gainsboro; */
  height: 30%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const MoneyInput = styled.TextInput`
  /* background-color: gold; */
  font-size: 45px;
`;

const MoneyUnitText = styled.Text`
  color: #414141;
  font-size: 45px;
`;

const NumberPadContainer = styled.View`
  /* background-color: dodgerblue; */
  width: 100%;
  height: 45%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

const NumberPad = styled.TouchableOpacity`
  /* background-color: floralwhite; */
  width: 30%;
  height: 25%;
  justify-content: center;
`;

const NumberText = styled.Text`
  /* background-color: forestgreen; */
  width: 100%;
  font-size: 28px;
  text-align: center;
`;

// 송금하기 버튼있는 구역
const SubmitButtonContainer = styled.View`
  /* background-color: firebrick; */
  width: 100%;
  height: 12%;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #00ac84;
  width: 75%;
  height: 55%;
  border-radius: 10px;
`;

export default function Transfer() {
  const [num, setNum] = useState('');

  const handleNumClick = (number) => {
    setNum(num => num + number);
    console.log(typeof(num));
  }

  return (
    <Screen>
      <TransferTitle>송금하기</TransferTitle>
      <BackButtonHeader>
      </BackButtonHeader>
      <MoneyInputContainer>
        <InnerMoneyInputContainer>
          <MoneyInput value={num} maxLength={10} onChangeText={setNum}></MoneyInput>
          <MoneyUnitText>원</MoneyUnitText>
        </InnerMoneyInputContainer>
      </MoneyInputContainer>
      <NumberPadContainer>
        { NumberList.map((number) => (
          <NumberPad  keyboardType = 'numeric' onPress={() => handleNumClick(number)}>
            <NumberText>{number}</NumberText>
          </NumberPad>
        ) )}
      </NumberPadContainer>
      <SubmitButtonContainer>
        <SubmitButton onPress={() => console.log(Number(num))}></SubmitButton>
      </SubmitButtonContainer>
    </Screen>
  )
}