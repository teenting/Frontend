import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import BackButtonHeader from '../components/BackButtonHeader';
import CategoryContainer from '../components/CategoryContainer';
import { useFonts } from 'expo-font';

const DateList = [
  {
    id: 0,
    value: '1년',
  },
  {
    id: 1,
    value: '6개월',
  }, {
    id: 2,
    value: '1개월',
  }, {
    id: 3,
    value: '1주',
  }
]

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
  background-color: ${(props) => props.active ? '#00ac84' : 'white'};
  width: 18%;
  height: 70%;
  border-radius: 10px;
  margin: 0px 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(100, 100, 111, 0.2) ;
`;

const DateScrollText = styled.Text`
  color: ${(props) => props.active ? 'white' : 'black'};
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
  position: relative;
`;

const UsageCircle = styled.Image`
  width: 270px;
  height: 270px;
`;

const WholeUsageInnerContainer = styled.View`
  /* background-color: rebeccapurple; */
  width: 40%;
  height: 22%;
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const WholeUsageInnerText = styled.Text`
  /* background-color: rosybrown; */
  width: ${(props) => props.width ? props.width : '100%'};
  font-size: 25px;
  text-align: center;
  font-family: Helvetica;
`;

const WholeUsageInnerMoney = styled.Text`
  font-size: 40px;
  font-family: ModernSans;
  margin-top: 10px;
  color: #6E6E6E;
`;

// '카테고리별' 제목과 카테고리 리스트가 있는 컨테이너
const OuterCategoryContainer = styled.View`
  /* background-color: wheat; */
  width: 100%;
  height: 32%;
  display: flex;
`;

const CategoryTitleContainer = styled.View`
  /* background-color: violet; */
  width: 100%;
  height: 10%;
  justify-content: center;
  padding: 0px 15px;
`;

const CategoryTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  font-family: Helvetica_Bold;
`;

export default function Analysis() {
  const [clicked, setClicked] = useState(0);
  const [loaded] = useFonts({
    ModernSans: require('../styles/fonts/ModernSans_Font/ModernSans_Light.ttf'),
    Helvetica_Bold: require('../styles/fonts/Helvetica_Font/Helvetica_Bold.ttf'),
    Helvetica_Light: require('../styles/fonts/Helvetica_Font/Helvetica_Light.ttf'),
    Helvetica: require('../styles/fonts/Helvetica_Font/Helvetica.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Screen>
      <BackButtonHeader />
      <DateScrollContainer>
        { DateList.map(({id, value}) => (
          <DateScrollButton active={clicked === id} onPress={() => setClicked(id)}>
            <DateScrollText active={clicked === id}>{value}</DateScrollText>
          </DateScrollButton>
        )) }
      </DateScrollContainer>
      <DateContainer>
        <DateText>2021.03.01 - 2021.04.01</DateText>
      </DateContainer>
      <WholeUsageViewContainer>
        <UsageCircle source={greencircle} />
        <WholeUsageInnerContainer>
          <WholeUsageInnerText>총 지출</WholeUsageInnerText>
          <WholeUsageInnerMoney>12,300</WholeUsageInnerMoney>
          <WholeUsageInnerText width={'30'}>원</WholeUsageInnerText>
        </WholeUsageInnerContainer>
      </WholeUsageViewContainer>
      <OuterCategoryContainer>
        <CategoryTitleContainer>
          <CategoryTitle>카테고리별</CategoryTitle>
        </CategoryTitleContainer>
        <CategoryContainer />
      </OuterCategoryContainer>
    </Screen>
  )
}