import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import MissionResultModal from './MissionResultModal';

const success = require('../styles/images/icon/check_green.png');
const failure = require('../styles/images/icon/x_red.png');
const progress = require('../styles/images/icon/black_doing.png');

const MissionStatus = [
  {
    id: 0,
    value: 'fail',
    image: failure,
    color: '#FFDEDE',
  },
  {
    id: 1,
    value: 'success',
    image: success,
    color: '#B3F0E2',
  },
  {
    id: 2,
    value: 'doing',
    image: progress,
    color: '#E6E6E6',
  },
  {
    id: 3,
    value: 'finished',
    image: success,
    color: '#B3F0E2',
  }
]


// Each 미션 리스트
const EachMissionContainer = styled.TouchableOpacity`
  /* background-color: peachpuff; */
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 20px;
  margin: 3px 0px;
  position: relative;
`;

// 미션 진행 상황(green, red, gray)
const MissionResultContainer = styled.View`
  /* background-color: powderblue; */
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MissionResultBox = styled.View`
  background-color: ${(props) => props.color ? props.color : '#E6E6E6'};
  width: 50px;
  height: 50px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const ResultImage = styled.Image`
  width: ${(props) => props.width ? props.width : '20px'};
  height: ${(props) => props.width ? props.width : '20px'};
  overflow: visible;
`;

// 미션 제목, 비용
const MissionContentContainer = styled.View`
  /* background-color: peru; */
  flex: 3.5;
  justify-content: center;
  padding: 0px 5px;
`;

const MissionTitle = styled.Text`
  font-size: 15px;
`;

const MissionMoney = styled.Text`
  font-size: 10px; 
  color: #505050;
  margin-top: 5px;
`;

const TransferButtonContainer = styled.View`
  /* background-color: tomato; */
  flex: 1;
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TransferButton = styled.TouchableOpacity`
  background-color: #00ac84;
  border-radius: 10px;
  width: 80%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

const TransferText = styled.Text`
  font-size: 15px;
  color: white;
`;

export default function MissionListContainer({ childname, missionId, mission, resultModalVisible, setResultModalVisible} ) {
  const statusId = mission.status;

  return (
    <>
    <MissionResultModal childname={childname} missionId={missionId} contentData={mission} visible={resultModalVisible} setVisible={setResultModalVisible} />
    <EachMissionContainer onPress={() => {
      setResultModalVisible(true);
      console.log('Mission Open');
      console.log(mission);
    }}>

      <MissionResultContainer>
        <MissionResultBox color={MissionStatus[statusId].color} >
          <ResultImage width={ statusId == 2 ? '1.75px' : '20px' }  height={ statusId == 2 ? '1.75px' : '20px' } source={MissionStatus[statusId].image} />
        </MissionResultBox >
      </MissionResultContainer>

      <MissionContentContainer>
        <MissionTitle numberOfLines={1} ellipsizeMode="tail">{mission.content}</MissionTitle>
        <MissionMoney>{mission.reward}원</MissionMoney>
      </MissionContentContainer>

      <TransferButtonContainer>
        { statusId == 1 ? (
          <TransferButton>
          <TransferText>송금</TransferText>
        </TransferButton>
        ) : null}
      </TransferButtonContainer>

    </EachMissionContainer>
  </>
  )
}