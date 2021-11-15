// 메인화면에서 자녀 계좌 보여줄 수 있는 탭
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

// 자녀 전체의 계좌 Tab을 담고 있는 컨테이너
const AccountContainer = styled.View`
  /* background-color: blueviolet; */
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AccountTab = styled.View`
  border-radius: 10px;
  background-color: white;
  width: 48%;
  height: 100%;
  box-shadow: 0px 7px 8px rgba(100, 100, 111, 0.2) ;
`;

export default function ChildrenAccountTab() {
  return (
    <AccountContainer>
      <AccountTab>
        {/* text here */}
      </AccountTab>
      <AccountTab>
        {/* text here */}
      </AccountTab>
    </AccountContainer>
  )
}