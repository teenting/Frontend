import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import BackButtonHeader from '../components/BackButtonHeader';
import CategoryContainer from '../components/CategoryContainer';
import { useFonts } from 'expo-font';
import { useIsFocused } from '@react-navigation/core';
import { API_URL } from '../../utils/API_URL';
import { USER_TOKEN } from '../../utils/Token';
import axios from 'axios';

const DateList = [
  {
    id: 0,
    value: '1년',
    period: 'annual',
  },
  {
    id: 1,
    value: '6개월',
    period: 'semiannual',
  },
  {
    id: 2,
    value: '1개월',
    period: 'month',
  }, 
  {
    id: 3,
    value: '1주',
    period: 'week',
  }
]

const greencircle = require('../styles/images/icon/greenCircle.png');

const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const TitleContainer = styled.View`
  /* background-color: skyblue; */
  width: 100%;
  height: 13%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const AnalysisTitle = styled.Text`
  position: absolute;
  bottom: 20px;
  font-family: Helvetica_Bold;
  font-size: 18px;
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

export default function Analysis({ id }) {
  const [clicked, setClicked] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [period, setPeriod] = useState('week');
  const [analysisData, setAnalysisData] = useState([]);
  const isFocused = useIsFocused();
  const [loaded] = useFonts({
    ModernSans: require('../styles/fonts/ModernSans_Font/ModernSans_Light.ttf'),
    Helvetica_Bold: require('../styles/fonts/Helvetica_Font/Helvetica_Bold.ttf'),
    Helvetica_Light: require('../styles/fonts/Helvetica_Font/Helvetica_Light.ttf'),
    Helvetica: require('../styles/fonts/Helvetica_Font/Helvetica.ttf'),
  });
  
  let today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  let lastYear = today.getFullYear();
  let lastMonth = today.getMonth() + 1;
  let lastDate = today.getDate() - 7;

  const [changeYear, setChangeYear] = useState(lastYear);
  const [changeMonth, setChangeMonth] = useState(lastMonth);
  const [changeDate, setChangeDate] = useState(lastDate);


  const handleDate = (id) => {
    if (id == 0) {
      lastYear = new Date(today);
      lastYear.setFullYear(today.getFullYear() - 2);
      lastYear = lastYear.getFullYear();
      setChangeYear(lastYear);
      setChangeMonth(today.getMonth() + 1);
      setChangeDate(today.getDate());
    } else if (id == 1) {
      lastMonth = new Date(today);
      lastMonth.setMonth(today.getMonth() - 5);
      lastMonth = lastMonth.getMonth();
      setChangeMonth(lastMonth);
      setChangeYear(today.getFullYear());
      setChangeDate(today.getDate());
    } else if (id == 2) {
      lastMonth = new Date(today);
      lastMonth.setMonth(today.getMonth());
      lastMonth = lastMonth.getMonth();
      setChangeMonth(lastMonth);
      setChangeYear(today.getFullYear());
      setChangeDate(today.getDate());
    } else {
      lastDate = new Date(today);
      lastDate.setDate(today.getDate() - 7);
      lastDate = lastDate.getDate();
      setChangeDate(lastDate);
      setChangeYear(today.getFullYear());
      setChangeMonth(today.getMonth() + 1);
    }
  }


  useEffect(() => {
    setPeriod('week');
    setClicked(3);
    lastYear = today.getFullYear();
    lastMonth = today.getMonth() + 1;
    lastDate = today.getDate() - 7;
    const AuthStr = `Token ${USER_TOKEN}`;
    
    async function getAnalysis() {
      await axios.get(`${API_URL}/api/finance/analysis?childId=${id}&period=${period}`, { headers: { Authorization: AuthStr } })
      .then((response) => {
        setAnalysisData(response.data);
      })
      .catch((error) => {
        console.log("================getAnalysis===============");
        console.log(error);
      })
      .finally(() => setIsLoading(false));
    }

    getAnalysis();
  }, [isFocused])

  useEffect(() => {
    const AuthStr = `Token ${USER_TOKEN}`;
    
    async function getAnalysis() {
      await axios.get(`${API_URL}/api/finance/analysis?childId=${id}&period=${period}`, { headers: { Authorization: AuthStr } })
      .then((response) => {
        setAnalysisData(response.data);
      })
      .catch((error) => {
        console.log("================getAnalysis===============");
        console.log(error);
      })
      .finally(() => setIsLoading(false));
    }

    getAnalysis();
  }, [period])

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (isLoading) {
    return (
      <ActivityIndicator color="#00ac84"/>
    )
  }

  return (
    <Screen>
      <TitleContainer>
        <AnalysisTitle>분석하기</AnalysisTitle>
      </TitleContainer>
      <BackButtonHeader />
      
      <DateScrollContainer>
        { DateList.map(({id, value, period}) => (
          <DateScrollButton key={id} active={clicked === id} onPress={() => {
            setClicked(id);
            setPeriod(period);
            handleDate(id);
            }}>
            <DateScrollText active={clicked === id}>{value}</DateScrollText>
          </DateScrollButton>
        )) }
      </DateScrollContainer>
      <DateContainer>
        <DateText>{changeYear}.{changeMonth}.{changeDate} - {year}.{month}.{date}</DateText>
      </DateContainer>
      <WholeUsageViewContainer>
        <UsageCircle source={greencircle} />
        <WholeUsageInnerContainer>
          <WholeUsageInnerText>총 지출</WholeUsageInnerText>
          <WholeUsageInnerMoney>{analysisData.total}</WholeUsageInnerMoney>
          <WholeUsageInnerText width={'30'}>원</WholeUsageInnerText>
        </WholeUsageInnerContainer>
      </WholeUsageViewContainer>
      <OuterCategoryContainer>
        <CategoryTitleContainer>
          <CategoryTitle>카테고리별</CategoryTitle>
        </CategoryTitleContainer>
        <CategoryContainer data={analysisData} />
      </OuterCategoryContainer>
    </Screen>
  )
}