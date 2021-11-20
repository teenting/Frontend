// 카테고리별에 들어가는 각 카테고리 컨테이너
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const CategoryList = [
  {
    id: 0,
    name: '식비',
    image: 'food'
  },
  {
    id: 1,
    name: '교통비',
    image: 'bus'
  },
  {
    id: 2,
    name: '문화생활비',
    image: 'culture'
  },
  {
    id: 3,
    name: '기타',
    image: 'etc'
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

`;

const CategoryText = styled.Text`
  font-size: 15px;
`;

export default function CategoryContainer() {
  return (
    <CategoryListContainer>
      <ScrollView horizontal={true}>
        { CategoryList.map(({id, name, image}) => (
          <CategoryBox>
            <CategoryHeader>
              <CategoryText>{ name }</CategoryText>
            </CategoryHeader>
          </CategoryBox>
        )) }
      </ScrollView>
    </CategoryListContainer>
  )
}