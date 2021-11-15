import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const MyAccountContainerBox = styled.TouchableOpacity`
  background-color: white;
  margin-top: 40%;
  width: 80%;
  height: 18%;
  position: absolute;
  border-radius: 15px;
  box-shadow: 0px 7px 15px rgba(100, 100, 111, 0.2) ;
`;

export default function MyAccountContainer() {
  const navigation = useNavigation()

  return (
    <MyAccountContainerBox onPress={() => navigation.navigate('MyAccountDetails')}>

    </MyAccountContainerBox>
  )
}