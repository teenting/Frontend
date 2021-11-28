import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Modal, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import BackButtonHeader from '../components/BackButtonHeader';
import { useFonts } from 'expo-font';
import TransferPasswordModal from '../components/TransferPasswordModal';
import { useIsFocused } from '@react-navigation/core';

const NumberList = [ {id: 1, text: '1'}, {id: 2, text: '2'}, {id: 3, text: '3'}, {id: 4, text: '4'}, {id: 5, text: '5'}, {id: 6, text: '6'}, {id: 7, text: '7'}, {id: 8, text: '8'}, {id: 9, text: '9'}, {id: 10, text: ''}, {id: 11, text: '0'} ];

const closeButtonImage = require('../styles/images/icon/closeButton.png');
const rightArrowImage = require('../styles/images/icon/rightArrow.png');
const backspace = require('../styles/images/icon/backspace.png');

const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`;

const TitleContainer = styled.View`
  /* background-color: skyblue; */
  width: 100%;
  height: 13%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const TransferTitle = styled.Text`
  position: absolute;
  bottom: 20px;
  font-family: Helvetica_Bold;
  font-size: 18px;
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
  font-family: ModernSans;
`;

const MoneyUnitText = styled.Text`
  color: #414141;
  font-size: 40px;
  font-family: Helvetica;
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
  align-items: center;
`;

const NumberText = styled.Text`
  /* background-color: forestgreen; */
  width: 100%;
  font-size: 28px;
  text-align: center;
  font-family: Helvetica;
`;

const DeleteImage = styled.Image`
  width: 30px;
  height: 20px;
`;

// 송금하기 버튼있는 구역
const SubmitButtonContainer = styled.View`
  /* background-color: firebrick; */
  width: 100%;
  height: 12%;
  justify-content: center;
  align-items: center;
`;

const TransferButton = styled.TouchableOpacity`
  background-color: #00ac84;
  width: 75%;
  height: 55%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TransferButtonText = styled.Text`
  color: white;
  font-size: 15px;
  font-family: Helvetica;
`;

const TransferButtonImage = styled.Image`
  position: absolute;
  right: 15px;
  width: 15px;
  height: 15px;
`;

export default function Transfer({ route }) {
  const [num, setNum] = useState(String(route.params.reward));
  const [modalVisible, setModalVisible] = useState(false);
  const isFocused = useIsFocused();
  const [loaded] = useFonts({
    ModernSans: require('../styles/fonts/ModernSans_Font/ModernSans_Light.ttf'),
    Helvetica_Bold: require('../styles/fonts/Helvetica_Font/Helvetica_Bold.ttf'),
    Helvetica_Light: require('../styles/fonts/Helvetica_Font/Helvetica_Light.ttf'),
    Helvetica: require('../styles/fonts/Helvetica_Font/Helvetica.ttf'),
  });

  let id = route.params.childId;
  let childName = route.params.childname;

  const handleNumClick = (number) => {
    setNum(num => num + number);
  };

  const handleDelete = () => {
    setNum(num => num.substring(0, num.length-1));
  }

  const handleTransfer = () => {
    if (num.length === 0) {
      alert('송금할 금액을 입력하세요!');
    } else {
      setNum(num);
      setModalVisible(true);
    }
  };

  if (!loaded) {
    return null;
  }

  return (
    <Screen> 
      <TitleContainer>
        <TransferTitle>송금하기</TransferTitle>
      </TitleContainer>
      <BackButtonHeader>
      </BackButtonHeader>
      <MoneyInputContainer>
        <InnerMoneyInputContainer>
            <MoneyInput value={num} maxLength={10} onChangeText={setNum}></MoneyInput>
          <MoneyUnitText>원</MoneyUnitText>
        </InnerMoneyInputContainer>
      </MoneyInputContainer>
      <NumberPadContainer>
        { NumberList.map(({id, text}) => (
          <NumberPad key={id} disabled={id === 11 && num.length === 0} keyboardType = 'numeric' onPress={() => handleNumClick(text)}>
              <NumberText>{text}</NumberText>
          </NumberPad>
        )) }
        <NumberPad onPress={() => handleDelete()}>
          <DeleteImage source={backspace} />
        </NumberPad>
      </NumberPadContainer>
      <SubmitButtonContainer>
        <TransferButton onPress={() => handleTransfer()}>
          <TransferButtonText>송금하기</TransferButtonText>
          <TransferButtonImage source={rightArrowImage}/>
        </TransferButton>
      </SubmitButtonContainer>

        {/* 모달 화면 */}
      <TransferPasswordModal childname={childName} missionId={route.params.missionId} childId={id} money={num} visible={modalVisible} setVisible={setModalVisible} />
    </Screen>
  )
}