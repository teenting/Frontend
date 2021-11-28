// 메인화면에서 자녀 계좌 보여줄 수 있는 탭
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const ActivityList = [
  {
    id: 1,
    text: '진경님께 2개의 미션을 전송하였습니다'
  },
  {
    id: 2,
    text: '수경님 달성률이 3단계로 올라갔습니다'
  },
  {
    id: 3,
    text: '수경님을 자녀로 추가하였습니다'
  }
]

const ActivityTab = styled.View`
  background-color: white;
  width: 100%;
  height: 55px;
  border-radius: 10px;
  margin: 5px 0px;
  justify-content: center;
  padding: 0px 15px;
`;

const ActivityText = styled.Text`
  color: #6E6E6E;
  font-size: 15px;
`;

export default function RecentActivityTab() {
  const navigation = useNavigation()

  return (
    <>
    {ActivityList.map((activity) => (
      <ActivityTab key={activity.id}>
        <ActivityText>{activity.text}</ActivityText>
      </ActivityTab>
    ))}
    </>
  )
}