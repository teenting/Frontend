import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const closeButtonImage = require('../styles/images/icon/closeButton.png');
const baby = require('../styles/images/icon/baby.png');
const clock = require('../styles/images/icon/clock.png');
const mission = require('../styles/images/icon/mission_customgray.png');
const money = require('../styles/images/icon/money.png');

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

// 프로필 사진 + from 엄마
const ModalProfileContainer = styled.View`
  /* background-color: rebeccapurple; */
  width: 100%;
  height: 23%;
  justify-content: center;
  align-items: center;
`;

const ModalProfile = styled.View`
  background-color: #6e6e6e;
  width: 60px;
  height: 60px;
  border-radius: 40px;
  margin-bottom: 7px;
`;

const ProfileText = styled.Text`
  font-size: 15px;
  margin-top: 7px;
`;

// 미션 커스텀하는 컨테이너(누가, 언제까지, 무엇을, 용돈)
const MissionCustomCotainer = styled.View`
  /* background-color: rosybrown; */
  width: 100%;
  height: 50%;
  justify-content: space-around;
  align-items: center;
`;

const EachMissionCustom = styled.View`
  background-color: #F0F0F0;
  width: 85%;
  height: 20%;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
`;

// 아이콘 + 커스텀 제목
const MissionCustomTitleContainer = styled.View`
  /* background-color: silver; */
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MissionCustomTitle = styled.Text`
  color: #6E6E6E;
  font-family: Helvetica;
  font-size: 16px;
  margin-left: 7px;
`;

const MissionCustomImage = styled.Image`
  /* background-color: skyblue; */
  width: 25px;
  height: 25px;
  margin-right: 7px;
  overflow: visible;
`;

// DatePicker 및 TextInput 위치한 컨테이너
const PickContainer = styled.View`
  /* background-color: steelblue; */
  width: 55%;
  height: 100%;
`;

const SubmitContainer = styled.View`
  /* background-color: salmon; */
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #00AC84;
  width: 70%;
  height: 45%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SubmitText = styled.Text`
  color: white;
  font-size: 15px;
  font-family: Helvetica;
`;


export default function NewMissionModal({ visible, setVisible }) {
  const [loaded] = useFonts({
    ModernSans: require('../styles/fonts/ModernSans_Font/ModernSans_Light.ttf'),
    Helvetica_Bold: require('../styles/fonts/Helvetica_Font/Helvetica_Bold.ttf'),
    Helvetica_Light: require('../styles/fonts/Helvetica_Font/Helvetica_Light.ttf'),
    Helvetica: require('../styles/fonts/Helvetica_Font/Helvetica.ttf'),
  });

  const handleSubmit = () => {
    alert('전송이 완료되었습니다.')
    setVisible(false);
  }

  if (!loaded) {
    return null;
  }

  return (
    <Modal
        animationType="slide"
        visible={visible}
        presentationStyle="pageSheet"
        onRequestClose={() => setVisible(false)}
      >
        <ModalHeader>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <CloseButton source={closeButtonImage} />
            </TouchableOpacity>
        </ModalHeader>

        <ModalProfileContainer>
          <ModalProfile />
          <ProfileText>엄마가 민수에게</ProfileText>
        </ModalProfileContainer>

        <MissionCustomCotainer>
          <EachMissionCustom>
            <MissionCustomTitleContainer>
            <MissionCustomImage source={baby}/>
              <MissionCustomTitle>대상</MissionCustomTitle>
            </MissionCustomTitleContainer>
            <PickContainer></PickContainer>
          </EachMissionCustom>

          <EachMissionCustom>
            <MissionCustomTitleContainer>
            <MissionCustomImage source={clock}/>
              <MissionCustomTitle>마감일</MissionCustomTitle>
            </MissionCustomTitleContainer>
            <PickContainer></PickContainer>
          </EachMissionCustom>

          <EachMissionCustom>
            <MissionCustomTitleContainer>
              <MissionCustomImage source={mission}/>
              <MissionCustomTitle>미션내용</MissionCustomTitle>
            </MissionCustomTitleContainer>
            <PickContainer></PickContainer>
          </EachMissionCustom>

          <EachMissionCustom>
            <MissionCustomTitleContainer>
            <MissionCustomImage source={money}/>
              <MissionCustomTitle>보상</MissionCustomTitle>
            </MissionCustomTitleContainer>
            <PickContainer></PickContainer>
          </EachMissionCustom>
        </MissionCustomCotainer>

        <SubmitContainer>
          <SubmitButton onPress={() => handleSubmit()}>
            <SubmitText>새 미션 전송하기</SubmitText>
          </SubmitButton>
        </SubmitContainer>
    </Modal>
  )
}