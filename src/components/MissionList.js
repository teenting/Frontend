import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

// Each 미션 리스트
const EachMissionContainer = styled.TouchableOpacity`
  /* background-color: #E5C1C5; */
  width: 100%;
  height: 18%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding: 20px;
`;

// 미션 진행 상황(green, red, gray)
const MissionResultContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MissionResultPhoto = styled.View`
  background-color: #00be92;
  width: 50px;
  height: 50px;
  border-radius: 15;
  opacity: 0.2;
`;

// 미션 제목, 비용
const MissionListContainer = styled.View`
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
        <MissionResultPhoto/>
      </MissionResultContainer>

      <MissionListContainer>
        <MissionTitle>영어 숙제 하기</MissionTitle>
        <MissionMoney>15000원</MissionMoney>
      </MissionListContainer>

    </EachMissionContainer>
  )
}