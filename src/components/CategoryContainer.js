// 카테고리별에 들어가는 각 카테고리 컨테이너
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const food = require('../styles/images/icon/food.png');
const bus = require('../styles/images/icon/bus.png');
const game = require('../styles/images/icon/game.png');
const etc = require('../styles/images/icon/etc.png');

const CategoryList = [
  {
    id: 0,
    name: '식비',
    image: food,
    category: 'food'
  },
  {
    id: 1,
    name: '교통비',
    image: bus,
    category: 'transportation'
  },
  {
    id: 2,
    name: '문화생활비',
    image: game,
    category: 'hobby'
  },
  {
    id: 3,
    name: '기타',
    image: etc,
    category: 'etc'
  },
]

// 카테고리 리스트가 있는 컨테이너
const CategoryListContainer = styled.View`
  /* background-color: palegreen; */
  height: 90%;
  align-items: center;
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
`;


const CategoryBox = styled.View`
  /* background-color: palevioletred; */
  background-color: white;
  width: 150px;
  height: 200px;
  border-radius: 15px;
  margin: 0px 5px;
`;

// 카테고리 이름이랑 아이콘 담겨있는 컨테이너
const CategoryHeader = styled.View`
  /* background-color: rebeccapurple; */
  width:100%;
  height: 20%;
  margin-top: 10px;
  align-items: center;
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
`;

const CategoryImage = styled.Image`
  width: 25px;
  height: 20px;
  margin-right: 8px;
  overflow: visible;
`;

const CategoryText = styled.Text`
  font-size: 15px;
`;

const UsageContainer = styled.View`
  /* background-color: thistle; */
  width: 100%;
  height: 60%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const UsageText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: ModernSans;
  margin-right: 2px;
`;

const UnitText = styled.Text`
  font-size: 18px;
  font-family: Helvetica;
  margin-left: 2px;
`;

export default function CategoryContainer({ data }) {
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
    <CategoryListContainer>
      <ScrollView horizontal={true}>
        { CategoryList.map(({id, name, image, category}) => (
          <CategoryBox>
            <CategoryHeader>
              <CategoryImage source={image} />
              <CategoryText>{ name }</CategoryText>
            </CategoryHeader>
            <UsageContainer>
              <UsageText>{data[category]}</UsageText>
              <UnitText>원</UnitText>
            </UsageContainer>
          </CategoryBox>
        )) }
      </ScrollView>
    </CategoryListContainer>
  )
}