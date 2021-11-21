import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import BackButtonHeader from '../components/BackButtonHeader';
import MissionList from '../components/MissionList';

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
  /* background-color: #E5C1C5; */
  width: 100%;
  height: 15%;
`;

const NameTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
`;

// 그래프
const GoalContainer = styled.View`
  /* background-color: #C3E2DD; */
  width: 100%;
  height: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoalGraph = styled.View`
  background-color: #E8F8F5;
  width: 80%;
  height: 4%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const GoalGraphPercent = styled.View`
  width: 70%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  background-color: #FDD4C0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoalPointContainer = styled.View`
  background-color: black;
  width: 20%;
  height: 20%;
`;

const GoalPointNumber = styled.View`
  background-color: white;
  width: 100%;
  height: 20%;
`;

const GoalPointTitle = styled.Text`
  font-size: 10px;
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
  /* background-color: #6ECEDA; */
  width: 100%;
  height: 55%;
  position: absolute;
  bottom: 0;
`;

const MissionModal = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  borderTopLeftRadius: 30;
  borderTopRightRadius: 30;
  padding-top: 15%;
`;

// 미선 추가 버튼
const PlusButtonContainer = styled.TouchableOpacity`
  /* background-color: #6ECEDA; */
  width: 100%;
  height: 15%;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const PlusButton = styled.View`
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

export default function Mission() {
  return (
    <Screen>
      <BackButtonHeader/>

      <NameContainer>
        <NameTitle>민수</NameTitle>
      </NameContainer>

      <GoalContainer>
        <GoalGraph>        
          <GoalGraphPercent>
              <GoalPointCircle/>
          </GoalGraphPercent>        
        </GoalGraph>
      </GoalContainer>

      <MissionContainer>
        <MissionModal>
          <MissionList/>
          <MissionList/>
          <MissionList/>
        </MissionModal>
        <PlusButtonContainer>
          <PlusButton>
            <PlusButtonTitle>미션 추가</PlusButtonTitle>
          </PlusButton>
        </PlusButtonContainer>
      </MissionContainer>
    </Screen>
  )
}