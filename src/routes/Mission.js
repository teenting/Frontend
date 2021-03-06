import React,{ useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView } from 'react-native';
import styled from 'styled-components';
import BackButtonHeader from '../components/BackButtonHeader';
import MissionListContainer from '../components/MissionListContainer';
import MissionResultModal from '../components/MissionResultModal';
import NewMissionModal from '../components/NewMissionModal';
import { API_URL } from '../../utils/API_URL';
import { USER_TOKEN } from '../../utils/Token';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/core';

// 전체 화면
const Screen = styled.View`
  background-color: #00ac84;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

// 이름
const NameContainer = styled.View`
  /* background-color: rebeccapurple; */
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
`;

const NameTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
`;

const AcheivementTextContainer = styled.View`
  /* background-color: wheat; */
  width: 100%;
  height: 55%;
  justify-content: center;
`;

const AcheivementText = styled.Text`
  font-size: 25px;
  text-align: center;
  color: white;
`;

const AcheivementWarningContainer = styled.View`
  /* background-color: tomato; */
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

const AcheivementWarningText = styled.Text`
  color: #CECECE;
  font-size: 13px;
`;

// 퍼센트 바 Layout
const GoalContainer = styled.View`
  /* background-color: powderblue; */
  width: 100%;
  height: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 퍼센트 바 100%(=80%)
const GoalGraph = styled.View`
  background-color: #E8F8F5;
  width: 80%;
  height: 4%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// 퍼센트 바 진행도
const GoalGraphPercent = styled.View`
  background-color: #FDD4C0;
  width: ${(props) => props.width}%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 원 + 숫자 컨테이너
const GoalPointContainer = styled.View`
  /* background-color: black;
  opacity: 0.3; */
  width: 60px;
  height: 90px;
  position: absolute;
  right: 0;
  justify-content: center;
`;

const GoalNumberContainer = styled.View`
  background-color: #00BE92;
  width: 80%;
  height: 35%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  `;

const GoalNumberTitle = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #ffffff;
`;

const GoalPointCircle = styled.View`
  background-color: #ffffff;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  position: absolute;
  right: 0;
`;

// 미션
const MissionContainer = styled.View`
  /* background-color: plum; */
  width: 100%;
  height: 55%;
  position: absolute;
  bottom: 0;
`;

const MissionScroll = styled.ScrollView`
`;

const Footer = styled.View`
  /* background-color: wheat; */
  width: 100%;
  height: 65px;
`;

const MissionModal = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 8%;
`;

// 미선 추가 버튼
const PlusButtonContainer = styled.View`
  /* background-color: peru; */
  width: 100%;
  height: 15%;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const PlusButton = styled.TouchableOpacity`
  background-color: #00ac84;
  width: 80%;
  height: 65%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 7px 15px rgba(100, 100, 111, 0.2);
`;

const PlusButtonTitle = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export default function Mission({ parentid, childname, id }) {
  const [goalPercentage, setGoalPercentage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [missionData, setMissionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [missionAchievement, setMissionAchievement] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getMissionList() {
      const AuthStr = `Token ${USER_TOKEN}`;
      axios.get(`${API_URL}/api/assignment/mission/?childId=${id}`, { headers: { Authorization: AuthStr } })
      .then((response) => {
        setMissionData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    async function getAchievement() {
      const AuthStr = `Token ${USER_TOKEN}`;
      axios.get(`${API_URL}/api/assignment/achievement/?childId=${id}`, { headers: { Authorization: AuthStr } })
      .then((response) => {
        setMissionAchievement(response.data);
        let level = Number(response.data[0].level);
        let score = Number(response.data[0].score);
        let percentage = (score - ( 500 * ( level - 1 ))) / 500 * 100;
        percentage = Math.round(percentage);
        setGoalPercentage(percentage);
      }) 
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false))
    }

    getMissionList();
    getAchievement();
  }, [isFocused, modalVisible, refresh]);

  const handleNewMission = () => {
    setModalVisible(true);
  }

  if (isLoading) {
    return (
      <ActivityIndicator color="#00ac84"/>
    )
  }

  return (
    <Screen>
      <BackButtonHeader/>

      <NameContainer>
        <NameTitle>{childname}</NameTitle>
        <AcheivementTextContainer>
          <AcheivementText>{missionAchievement[0].level}단계</AcheivementText>
        </AcheivementTextContainer>
        <AcheivementWarningContainer>
          <AcheivementWarningText>*송금이 완료되면 성취도가 올라갑니다</AcheivementWarningText>
        </AcheivementWarningContainer>
      </NameContainer>

      <GoalContainer>
        <GoalGraph>
          <GoalGraphPercent width={goalPercentage}>
            <GoalPointContainer>
              <GoalNumberContainer>
                <GoalNumberTitle>{goalPercentage}%</GoalNumberTitle>
              </GoalNumberContainer>
              <GoalPointCircle />
            </GoalPointContainer>
          </GoalGraphPercent>
        </GoalGraph>
      </GoalContainer>

      <MissionContainer>
        <MissionModal>
          <MissionScroll>
          { missionData.reverse().map((mission) => (
            <MissionListContainer
              childId={id}
              childname={childname}
              key={mission.id}
              missionId={mission.id}
              mission={mission}
              refresh={refresh}
              setRefresh={setRefresh}
              >
            </MissionListContainer>
          )) }
          </MissionScroll>
          <Footer />
        </MissionModal>
        <PlusButtonContainer>
          <PlusButton onPress={() => handleNewMission()}>
            <PlusButtonTitle>미션 추가</PlusButtonTitle>
          </PlusButton>
        </PlusButtonContainer>
      </MissionContainer>

      
      <NewMissionModal parentId={parentid} childName={childname} childId={id} visible={modalVisible} setVisible={setModalVisible} />
    </Screen>
  )
}