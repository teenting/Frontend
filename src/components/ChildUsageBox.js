import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';

// Each 사용 내역
const EachUsageContainer = styled.View`
  /* background-color: blue; */
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin: 7px 0px;
  padding: 0px 5px;
`;

// 회색 동그라미 컨테이너
const UsageInfoPhotoContainer = styled.View`
  /* background-color: teal; */
  flex: 1.5;
  justify-content: center;
  align-items: center;
`;

// 회색 동그라미
const UsageInfoPhoto = styled.View`
  background-color: #D5D5D5;
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;

// 사용 내역 정보
const UsageInfoContainer = styled.View`
  /* background-color: red; */
  flex: 5.5;
  justify-content: center;
`;

const UsageInfoText = styled.Text`
  font-size: 18px;
  margin-bottom: 4px;
`;

const UsageInfoBank = styled.Text`
  font-size: 12px;
  color: #505050;
`;

// 돈 정보 컨테이너
const UsageInfoPayContainter = styled.View`
  /* background-color: green; */
  flex: 4;
  justify-content: center;
`;

const UsageInfoPay = styled.Text`
  color: ${(props) => props.color};
  font-size: 15px;
  text-align: right;
  padding-right: 10px;
`;



export default function ChildUsageBox({ childUsageData }) {

  return (
    <EachUsageContainer>
      <UsageInfoPhotoContainer>
        <UsageInfoPhoto/>
      </UsageInfoPhotoContainer>
      <UsageInfoContainer>
        <UsageInfoText>{childUsageData.bnprCntn}</UsageInfoText>
        <UsageInfoBank>농협은행</UsageInfoBank>
      </UsageInfoContainer>
      <UsageInfoPayContainter>
        { childUsageData.mnrcDrotDsnc <= 2 ? (
          <UsageInfoPay color='#00BE92'>+ {childUsageData.tram}원</UsageInfoPay>
        ) : (
          <UsageInfoPay color='#f05c5c'>- {childUsageData.tram}원</UsageInfoPay>
        ) }
      </UsageInfoPayContainter>
    </EachUsageContainer>
  )
}