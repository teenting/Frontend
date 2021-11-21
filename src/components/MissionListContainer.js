import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const success = require('../styles/images/icon/check_green.png');
const failure = require('../styles/images/icon/x_red.png');


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
`;

// 미션 진행 상황(green, red, gray)
const MissionResultContainer = styled.View`
  /* background-color: powderblue; */
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MissionResultBox = styled.View`
  background-color: #B3F0E2;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const ResultImage = styled.Image`
  width: 20px;
  height: 20px;
  overflow: visible;
`;

// 미션 제목, 비용
const MissionListContainer = styled.View`
  /* background-color: peru; */
  flex: 4;
  justify-content: center;
`;

const MissionTitle = styled.Text`
  font-size: 15px; 
`;

const MissionMoney = styled.Text`
  font-size: 10px; 
  color: #505050;
  margin-top: 5px;
`;

export default function MissionList() {
  return (
    <EachMissionContainer>

      <MissionResultContainer>
        <MissionResultBox>
          <ResultImage source={success} />
        </MissionResultBox>
      </MissionResultContainer>

      <MissionListContainer>
        <MissionTitle>영어 숙제 하기</MissionTitle>
        <MissionMoney>15000원</MissionMoney>
      </MissionListContainer>

    </EachMissionContainer>
  )
}