import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Modal, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import TransferSuccess from '../routes/TransferSuccess';
import axios from 'axios';
import { API_URL } from '../../utils/API_URL';
import { USER_TOKEN } from '../../utils/Token';
import { useNavigation, useRoute } from '@react-navigation/core';

const NumberList = [ {id: 1, text: '1'}, {id: 2, text: '2'}, {id: 3, text: '3'}, {id: 4, text: '4'}, {id: 5, text: '5'}, {id: 6, text: '6'}, {id: 7, text: '7'}, {id: 8, text: '8'}, {id: 9, text: '9'}, {id: 10, text: ''}, {id: 11, text: '0'} ];
const testPassword = 123456;
const Password = [];
let PasswordBubbleList = [
  {
    id: 0,
    text: '*',
    active: false
  },
  {
    id: 1,
    text: '*',
    active: false
  },
  {
    id: 2,
    text: '*',
    active: false
  },
  {
    id: 3,
    text: '*',
    active: false
  },
  {
    id: 4,
    text: '*',
    active: false
  },
  {
    id: 5,
    text: '*',
    active: false
  },
];

const closeButtonImage = require('../styles/images/icon/closeButton.png');
const backspace = require('../styles/images/icon/backspace.png');

const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
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
  font-family: Helvetica;
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
  background-color: ${(props) => props.active ? '#ADEFDF' : '#BAB9B9'};
  width: 10%;
  height: 85%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

// 비밀번호 * 표시 텍스트
const BlindStar = styled.Text`
  color: ${(props) => props.active ? '#00AC84' : 'black'};
  font-size: 32px;
  font-family: Helvetica;
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
  font-family: Helvetica_Light;
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
  font-family: Helvetica_Light;
`;


export default function TransferPasswordModal({ childname, missionId, childId, money, visible, setVisible }) {
  const [passNum, setPassNum] = useState(0);
  const [splash, setSplash] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const [loaded] = useFonts({
    ModernSans: require('../styles/fonts/ModernSans_Font/ModernSans_Light.ttf'),
    Helvetica_Bold: require('../styles/fonts/Helvetica_Font/Helvetica_Bold.ttf'),
    Helvetica_Light: require('../styles/fonts/Helvetica_Font/Helvetica_Light.ttf'),
    Helvetica: require('../styles/fonts/Helvetica_Font/Helvetica.ttf'),
  });

  const transferringMoney = Number(money);

  const handleInput = (number) => {
    let form = new FormData();
    const AuthStr = `Token ${USER_TOKEN}`;
    Password.push(Number(number));
    PasswordBubbleList[passNum].active = true;
    setPassNum(passNum => passNum >= 5 ? passNum = 5 : passNum + 1);
    if (Password.length !== 6) {
      null
    } else { 
      let numPassword = Number(Password.join(''));
      Password.length = 0;
      setPassNum(0);
      PasswordBubbleList[0].active = false;
      PasswordBubbleList[1].active = false;
      PasswordBubbleList[2].active = false;
      PasswordBubbleList[3].active = false;
      PasswordBubbleList[4].active = false;
      PasswordBubbleList[5].active = false;
      if (numPassword === testPassword) {
        form.append('tram', transferringMoney);
        axios.post(`${API_URL}/api/finance/remittance?childId=${childId}`, form, { headers: { Authorization : AuthStr } })
        .then((response) => {
          if ( missionId ) {
            let missionForm = new FormData();
            missionForm.append('status', 3);
            const AuthStr = `Token ${USER_TOKEN}`;
            axios.put(`${API_URL}/api/assignment/mission/${missionId}/`, missionForm, { headers : { Authorization: AuthStr }})
            .then((response) => {
              alert('송금 성공!');
              setVisible(false);
              navigation.pop();
            })
            .catch((error) => {
              console.log(error);
            })
          } else {
            alert('송금 성공!');
            setVisible(false);
            navigation.pop();
          }
        })
        .catch((error) => {
          console.log(error);
        })
      } else {
        alert('비밀번호가 틀렸습니다.')
      }
    }
  };

  const handleDelete = () => {
    Password.pop();
    setPassNum(passNum => passNum <= 0 ? passNum = 0 : passNum - 1);
    if ( passNum > 0 ) {
      PasswordBubbleList[passNum - 1].active = false;
    } else {
      null
      setPassNum(0);
    }
  }

  useEffect(() => {
    Password.length = 0;
    setPassNum(0);
    PasswordBubbleList[0].active = false;
    PasswordBubbleList[1].active = false;
    PasswordBubbleList[2].active = false;
    PasswordBubbleList[3].active = false;
    PasswordBubbleList[4].active = false;
    PasswordBubbleList[5].active = false;
  },[visible])

  if (!loaded) {
    return null;
  }

  return (
    <Screen>
        {/* 모달 화면 */}
      <Modal
        animationType="slide"
        visible={visible}
        presentationStyle="pageSheet"
        onRequestClose={() => setVisible(false)}
      >
        <ModalScreen>
          <ModalHeader>
            <TouchableOpacity onPress={() => {
              setVisible(false);
            }}>
              <CloseButton source={closeButtonImage} />
            </TouchableOpacity>
          </ModalHeader>

          <PasswordInfoContainer>
            <PasswordInputTitleContainer>
              <PasswordInputTitle>비밀번호 입력</PasswordInputTitle>
            </PasswordInputTitleContainer>
            <PasswordBubbleContainer>
              <PasswordBubble>
                { PasswordBubbleList.map(({id, text, active}) => (
                  <EachBubble key={id} active={active}>
                    <BlindStar active={active}>{text}</BlindStar>
                  </EachBubble>
                )) }
              </PasswordBubble>
            </PasswordBubbleContainer>
            <TransferedMoneyContainer>
              <TransferedMoney>{childname}에게 {transferringMoney}원을 송금합니다.</TransferedMoney>
            </TransferedMoneyContainer>
          </PasswordInfoContainer>
          
          {/* 모달 비밀번호 키패드 */}
          <KeyPadContainer>
            <KeyPad>
            { NumberList.map((number) => (
                <NumberPad key={number.id} onPress={() => handleInput(number.text)}>
                  <NumberText>{number.text}</NumberText>
                </NumberPad>
            ) )}
              <NumberPad onPress={() => {
                handleDelete()
                }}>
                  <DeleteImage source={backspace} />
              </NumberPad>
            </KeyPad>
            <PasswordCheckContainer>
              <PasswordCheck>비밀번호가 일치해야 합니다.</PasswordCheck>
            </PasswordCheckContainer>
          </KeyPadContainer>
          
        </ModalScreen>
      </Modal>

    </Screen>
  )
}