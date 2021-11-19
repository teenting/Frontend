import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const bellImage = require('../styles/images/icon/bell.png');

const NavigationBarContainer = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 8%;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: space-around;
`;

// 미션 버튼
const MissionButtonContainer = styled.View`
  /* background-color: powderblue; */
  width: 50px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const MissionButton = styled.View`
  width: 35px;
  height: 35px;
  background-color: white;
  margin-left: 5px;
  opacity: 0.64;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MissionButtonImage = styled.Image`
  width: 20px;
  height: 25px;
`;


// 홈 버튼
const HomeButtonContainer = styled.View`
  /* background-color: skyblue; */
  width: 50px;
  height: 50px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const HomeButton = styled(MissionButton)``;
const HomeButtonImage = styled(MissionButtonImage)``;

// 통계 버튼
const AnalysisButtonContainer = styled.View`
  /* background-color: steelblue; */
  width: 50px;
  height: 50px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const AnalysisButton = styled(MissionButton)``;
const AnalysisButtonImage = styled(MissionButtonImage)``;

export default function NavigationBar() {
const navigation = useNavigation();

  return (
    <NavigationBarContainer>

      <MissionButtonContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Mission')}>
          <MissionButton>
            <MissionButtonImage source={bellImage}/>
          </MissionButton>
        </TouchableOpacity>
      </MissionButtonContainer>

      <HomeButtonContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <HomeButton>
            <HomeButtonImage source={bellImage}/>
          </HomeButton>
        </TouchableOpacity>
      </HomeButtonContainer>

      <AnalysisButtonContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Analysis')}>
          <AnalysisButton>
            <AnalysisButtonImage source={bellImage}/>
          </AnalysisButton>
        </TouchableOpacity>
      </AnalysisButtonContainer>

    </NavigationBarContainer>
  )
}