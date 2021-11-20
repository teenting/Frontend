import React, { useState } from 'react';
import { StyleSheet, Text, Modal, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import BackButtonHeader from '../components/BackButtonHeader';
//import TouchableScale from 'react-native-touchable-scale';

const NumberList = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0' ]
const Password = []
const PasswordBubbleList = [
  {
    id: 1,
    text: '*'
  },
  {
    id: 2,
    text: '*'
  },
  {
    id: 3,
    text: '*'
  },
  {
    id: 4,
    text: '*'
  },
  {
    id: 5,
    text: '*'
  },
  {
    id: 6,
    text: '*'
  },
]

const closeButtonImage = require('../styles/images/icon/closeButton.png');
const rightArrowImage = require('../styles/images/icon/rightArrow.png');
const backspace = require('../styles/images/icon/backspace.png');

const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`;

const TransferTitle = styled.Text`
  position: absolute;
  top: 70px;
  left: 170px;
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
  align-items: center;
`;

const NumberText = styled.Text`
  /* background-color: forestgreen; */
  width: 100%;
  font-size: 28px;
  text-align: center;
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
`;

const TransferButtonImage = styled.Image`
  position: absolute;
  right: 15px;
  width: 15px;
  height: 15px;
`;

// 모달 화면 전체
const ModalScreen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// 모달 닫기 버튼 있는 헤더
const ModalHeader = styled.View`
  /* background-color: green; */
  width: 100%;
  height: 7%;
  justify-content: center;
  padding: 0px 15px;
`;

const CloseButton = styled.Image`
  width: 20px;
  height: 20px;
`;

// '비밀번호 입력' + 비밀번호 버블 + 송금 금액 뜨는 구역
const PasswordInfoContainer = styled.View`
  /* background-color: hotpink; */
  width: 100%;
  height: 33%;
`;

const PasswordInputTitleContainer = styled.View`
  /* background-color: ivory; */
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
`;

const PasswordInputTitle = styled.Text`
  color: #707070;
  font-size: 20px;
`;

const PasswordBubbleContainer = styled.View`
  /* background-color: lavender; */
  width: 100%;
  height: 35%;
  justify-content: center;
  align-items: center;
`;

// 버블 6개 전부
const PasswordBubble = styled.View`
  /* background-color: lawngreen; */
  width: 70%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EachBubble = styled.View`
  background-color: #BAB9B9;
  width: 10%;
  height: 85%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

// 비밀번호 * 표시 텍스트
const BlindStar = styled.Text`
  font-size: 32px;
`;

// 보내는 금액 표시된 컨테이너
const TransferedMoneyContainer = styled.View`
  /* background-color: lavenderblush; */
  width: 100%;
  height: 25%;
  justify-content: center;
  align-items: center;
`;

// 보내는 금액
const TransferedMoney = styled.Text`
  color: #707070;
  font-size: 15px;
`;

// 랜덤하게 번호 나오는 키패드 + 비밀번호 맞는지 확인하는 컨테이너
const KeyPadContainer = styled.View`
  /* background-color: lightblue; */
  width: 100%;
  height: 60%;
  display: flex;
`;

const KeyPad = styled.View`
  /* background-color: lightgreen; */
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const RandomButton = styled.TouchableOpacity`
  /* background-color: lightseagreen; */
  width: 30%;
  height: 25%;
  justify-content: center;
`;

const PasswordCheckContainer = styled.View`
  /* background-color: lightsalmon; */
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

const PasswordCheck = styled.Text`
  color: #707070;
  font-size: 15px;
`;


export default function Transfer() {
  const [num, setNum] = useState('');
  const [money, setMoney] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleNumClick = (number) => {
    setNum(num => num + number);
  };

  const handleTransfer = () => {
    setMoney(num);
    setModalVisible(true);
  };

  const handleBubble = () => {

  };

  return (
    <Screen>   
      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => {setModalVisible(!modalVisible)}}
      >
        <ModalScreen>
          <ModalHeader>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <CloseButton source={closeButtonImage} />
            </TouchableOpacity>
          </ModalHeader>

          <PasswordInfoContainer>
            <PasswordInputTitleContainer>
              <PasswordInputTitle>비밀번호 입력</PasswordInputTitle>
            </PasswordInputTitleContainer>
            <PasswordBubbleContainer>
              <PasswordBubble>
                { PasswordBubbleList.map(({id, text}) => (
                  <EachBubble key={id} onPress={handleBubble()}>
                    <BlindStar>{text}</BlindStar>
                  </EachBubble>
                )) }
              </PasswordBubble>
            </PasswordBubbleContainer>
            <TransferedMoneyContainer>
              <TransferedMoney>{money}원을 송금합니다.</TransferedMoney>
            </TransferedMoneyContainer>
          </PasswordInfoContainer>
          
          {/* 모달 비밀번호 키패드 */}
          <KeyPadContainer>
            <KeyPad>
            { NumberList.map((number) => (
                <NumberPad>
                  <NumberText>{number}</NumberText>
                </NumberPad>
            ) )}
              <NumberPad>
                  <DeleteImage source={backspace} />
              </NumberPad>
            </KeyPad>
            <PasswordCheckContainer>
              <PasswordCheck>비밀번호가 일치해야 합니다.</PasswordCheck>
            </PasswordCheckContainer>
          </KeyPadContainer>
          
        </ModalScreen>
      </Modal>

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
        )) }
        <NumberPad>
          <DeleteImage source={backspace} />
        </NumberPad>
      </NumberPadContainer>
      <SubmitButtonContainer>
        <TransferButton onPress={() => handleTransfer()}>
          <TransferButtonText>송금하기</TransferButtonText>
          <TransferButtonImage source={rightArrowImage}/>
        </TransferButton>
      </SubmitButtonContainer>

    </Screen>
  )
}