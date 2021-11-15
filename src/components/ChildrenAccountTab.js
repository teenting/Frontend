// 메인화면에서 자녀 계좌 보여줄 수 있는 탭
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const AccountTab = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: white;
  width: 48%;
  height: 100%;
  box-shadow: 0px 7px 8px rgba(100, 100, 111, 0.2) ;
`;

export default function ChildrenAccountTab() {
  const navigation = useNavigation()

  return (
      <AccountTab onPress={() => {navigation.navigate('ChildMain')}}>
        <Text>Hi</Text>
      </AccountTab>
  )
}