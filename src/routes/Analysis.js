import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import BackButtonHeader from '../components/BackButtonHeader';

const DateList = ['1년', '6개월', '1개월', '1주']

const greencircle = require('../styles/images/icon/greenCircle.png');

const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`;

// 날짜 조정 버튼있는 컨테이너
const DateScrollContainer = styled.View`
  /* background-color: silver; */
  height: 6%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const DateScrollButton = styled.TouchableOpacity`
  background-color: white;
  width: 18%;
  height: 70%;
  border-radius: 10px;
  margin: 0px 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(100, 100, 111, 0.2) ;
`;

const DateScrollText = styled.Text`
  font-size: 15px;
`;

// 조정된 날짜 보여주는 컨테이너 (ex: 2021.03.01 - 2021.04.01)
const DateContainer = styled.View`
  /* background-color: slateblue; */
  width: 100%;
  height: 6%;
  justify-content: center;
  align-items: center;
`;

const DateText = styled.Text`
  font-size: 15px;
`;

const WholeUsageViewContainer = styled.View`
  /* background-color: teal; */
  width: 100%;
  height: 43%;
  justify-content: center;
  align-items: center;
`;

const UsageCircle = styled.Image`
  width: 270px;
  height: 270px;
`;

// '카테고리별' 제목과 카테고리 리스트가 있는 컨테이너
const OuterCategoryContainer = styled.View`
  background-color: wheat;
  width: 100%;
  height: 32%;
  display: flex;
`;

const CategoryTitleContainer = styled.View`
  background-color: violet;
  width: 100%;
  height: 10%;
  justify-content: center;
  padding: 0px 15px;
`;

const CategoryTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

// 카테고리 리스트가 있는 컨테이너
const CategoryListContainer = styled.View`
  background-color: palegreen;
  width: 100%;
  height: 90%;
`;


export default function Analysis() {
  return (
    <Screen>
      <BackButtonHeader />
      <DateScrollContainer>
        { DateList.map((date) => (
          <DateScrollButton>
            <DateScrollText>{date}</DateScrollText>
          </DateScrollButton>
        )) }
      </DateScrollContainer>
      <DateContainer>
        <DateText>2021.03.01 - 2021.04.01</DateText>
      </DateContainer>
      <WholeUsageViewContainer>
        <UsageCircle source={greencircle} />
      </WholeUsageViewContainer>
      <OuterCategoryContainer>
        <CategoryTitleContainer>
          <CategoryTitle>카테고리별</CategoryTitle>
        </CategoryTitleContainer>
        <CategoryListContainer>

        </CategoryListContainer>
      </OuterCategoryContainer>
    </Screen>
  )
}