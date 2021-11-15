import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const MyAccountContainerBox = styled.View`
  background-color: white;
  margin-top: 40%;
  width: 80%;
  height: 18%;
  position: absolute;
  border-radius: 15px;
  box-shadow: 0px 7px 15px rgba(100, 100, 111, 0.2) ;
`;

export default function MyAccountContainer() {
  return (
    <MyAccountContainerBox>

    </MyAccountContainerBox>
  )
}