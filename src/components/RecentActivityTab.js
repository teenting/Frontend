// 메인화면에서 자녀 계좌 보여줄 수 있는 탭
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const ActivityTab = styled.View`
  background-color: white;
  width: 100%;
  height: 55px;
  border-radius: 10px;
  margin: 5px 0px;
`;

export default function ChildrenAccountTab() {
  const navigation = useNavigation()

  return (
    <ActivityTab></ActivityTab>
  )
}