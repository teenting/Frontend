import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const closeButtonImage = require('../styles/images/icon/closeButton.png');
const baby = require('../styles/images/icon/baby.png');
const clock = require('../styles/images/icon/clock.png');
const mission = require('../styles/images/icon/mission_customgray.png');
const money_green = require('../styles/images/icon/money_green.png');

const ModalContainer = styled.View`
  background-color: #000000cc;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalMain = styled.View`
  background-color: #EDEDED;
  border-radius: 10px;
  width: 320px;
  height: 400px;
  display: flex;
  align-items: center;
  box-shadow: 0px 7px 8px rgba(100, 100, 111, 0.2);
`;

const ModalHeader = styled.View`
  /* background-color: green; */
  width: 100%;
  height: 12%;
  justify-content: center;
  padding: 0px 15px;
`;

const CloseButton = styled.Image`
  width: 20px;
  height: 20px;
`;

// 프로필 사진 + '엄마가 민수에게'
const ModalProfileContainer = styled.View`
  /* background-color: steelblue; */
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

const ModalProfileImage = styled.View`
  background-color: #6e6e6e;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-bottom: 3px;
`;

const ModalProfileText = styled.Text`
  font-size: 15px;
  margin-top: 3px;
`;

// 세부 미션 내용
const MissionDetailContainer = styled.View`
  /* background-color: tan; */
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  padding: 15px 0px;
`;

// 각각의 세부 내용(내용, 마감일)
const EachMissionDetailContainer = styled.View`
  background-color: white;
  width: 80%;
  height: 30%;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0px 15px;
`;

// 아이콘 + 제목
const MissionCustomTitleContainer = styled.View`
  /* background-color: tomato; */
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MissionCustomImage = styled.Image`
  width: 18px;
  height: 18px;
  overflow: visible;
  margin-right: 8px;
`;

const MissionCustomTitle = styled.Text`
  color: #6e6e6e;
  font-size: 14px;
`;

// 제목에 맞는 내용
const PickedContainer = styled.View`
  /* background-color: turquoise; */
  width: 60%;
  height: 100%;
`;

// 추가 용돈 컨테이너
const ResultMoneyContainer = styled.View`
  /* background-color: violet; */
  width: 50%;
  height: 20%;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ResultMoneyImage = styled.Image`
  width: 27px;
  height: 27px;
  overflow: visible;
  margin-right: 8px;
`;

const ResultMoneyText = styled.Text`
  color: #7F7F7F;
  font-size: 13px;
  margin-right: 7px;
`;

const ResultMoney = styled.Text`
  color: #00AC84;
  font-size: 18px;
  font-family: ModernSans;
  margin-left: 7px;
`;

const ResultButtonContainer = styled.View`
  /* background-color: thistle; */
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonStyle = styled.TouchableOpacity`
  width: 40%;
  height: 90%;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;

const SuccessButton = styled(ButtonStyle)`
  background-color: #00AC84;
  margin-right: 6px;
`;

const FailureButton = styled(ButtonStyle)`
  background-color: #f05c5c;
  margin-left: 6px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 15px;
`;



export default function MissionResultModal({ visible, setVisible }) {
  const [loaded] = useFonts({
    ModernSans: require('../styles/fonts/ModernSans_Font/ModernSans_Light.ttf'),
    Helvetica_Bold: require('../styles/fonts/Helvetica_Font/Helvetica_Bold.ttf'),
    Helvetica_Light: require('../styles/fonts/Helvetica_Font/Helvetica_Light.ttf'),
    Helvetica: require('../styles/fonts/Helvetica_Font/Helvetica.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        // presentationStyle="pageSheet"
        onRequestClose={() => setVisible(false)}
      >
        <ModalContainer>
          <ModalMain>
            <ModalHeader>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <CloseButton source={closeButtonImage} />
                </TouchableOpacity>
            </ModalHeader>

            <ModalProfileContainer>
              <ModalProfileImage />
              <ModalProfileText>엄마가 민수에게</ModalProfileText>
            </ModalProfileContainer>

            <MissionDetailContainer>
              <EachMissionDetailContainer>
                <MissionCustomTitleContainer>
                  <MissionCustomImage source={mission} />
                  <MissionCustomTitle>미션내용</MissionCustomTitle>
                </MissionCustomTitleContainer>
                <PickedContainer></PickedContainer>
              </EachMissionDetailContainer>
              <EachMissionDetailContainer>
                <MissionCustomTitleContainer>
                  <MissionCustomImage source={clock} />
                  <MissionCustomTitle>마감일</MissionCustomTitle>
                </MissionCustomTitleContainer>
                <PickedContainer></PickedContainer>
              </EachMissionDetailContainer>
              <ResultMoneyContainer>
                <ResultMoneyImage source={money_green} />
                <ResultMoneyText>추가용돈</ResultMoneyText>
                <ResultMoney>1500</ResultMoney>
                <ResultMoneyText>원</ResultMoneyText>
              </ResultMoneyContainer>
            </MissionDetailContainer>

            <ResultButtonContainer>
              <SuccessButton>
                <ButtonText>성공</ButtonText>
              </SuccessButton>
              <FailureButton>
                <ButtonText>실패</ButtonText>
              </FailureButton>
            </ResultButtonContainer>
          </ModalMain>
        </ModalContainer>
    </Modal>
  )
}