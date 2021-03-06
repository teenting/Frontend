import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useIsFocused } from '@react-navigation/native';
import { API_URL } from '../../utils/API_URL';
import { USER_TOKEN } from '../../utils/Token';
import axios from 'axios';

const refresh = require('../styles/images/icon/refresh.png');

const MyAccountContainerBox = styled.TouchableOpacity`
  background-color: white;
  margin-top: ${(props) => props.marginTop ? props.marginTop : '40%'};
  width: 80%;
  height: 18%;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0px 7px 15px rgba(100, 100, 111, 0.2) ;
`;

// 내 계좌 제목 컨테이너 + 새로고침 버튼
const MyAccountHeaderContainer = styled.View`
  /* background-color: antiquewhite; */
  width: 100%;
  height: 35%;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
`;

const MyAccountTitle = styled.Text`
  /* background-color: sienna; */
  flex: 9;
  color: #BAB9B9;
  font-size: 15px;
  font-family: Helvetica;
`;

const RefreshImageContainer = styled.TouchableOpacity`
  flex: 1;
`;

const RefreshImage = styled.Image`
  width: 24px;
  height: 20px;
`;

const MyMoneyContainer = styled.View`
  /* background-color: aqua; */
  width: 100%;
  height: 30%;
  justify-content: center;
  padding: 0px 25px;
`;

const MyMoney = styled.Text`
  color: #6E6E6E;
  font-size: 50px;
  font-family: ModernSans;
`;

// 은행 이름 + 계좌번호
const MyAccountInfoContainer = styled.View`
  /* background-color: bisque; */
  width: 100%;
  height: 35%;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 0px 20px;
`;

const BankName = styled.Text`
  color: #BAB9B9;
  font-size: 14px;
  margin-right: 5px;
  font-family: Helvetica;
`;

const AccountNumber = styled.Text`
  color: #6E6E6E;
  font-size: 14px;
  font-family: Helvetica;
`;

export default function MyAccountContainer({ children, ...rest }) {
  const navigation = useNavigation();
  const [userBalance, setUserBalance] = useState([]);
  const [update, setUpdate] = useState(false);
  const isFocused = useIsFocused();
  const route = useRoute();
  const [loaded] = useFonts({
    ModernSans: require('../styles/fonts/ModernSans_Font/ModernSans_Light.ttf'),
    Helvetica_Bold: require('../styles/fonts/Helvetica_Font/Helvetica_Bold.ttf'),
    Helvetica_Light: require('../styles/fonts/Helvetica_Font/Helvetica_Light.ttf'),
    Helvetica: require('../styles/fonts/Helvetica_Font/Helvetica.ttf'),
  });

  const handleRefresh = () => {
    setUpdate(!update);
  }

  useEffect(() => {
    const AuthStr = `Token ${USER_TOKEN}`;
    async function getUserBalance() {
      await axios.get(`${API_URL}/api/finance/balance/`, { headers: { Authorization: AuthStr } })
      .then((response) => {
        setUserBalance(response.data);
      })
      .catch((error) => {
        console.log("================MyAccountContainer===============");
        console.log(error);
      })
    }

    getUserBalance();
  }, [isFocused])

  useEffect(() => {
    const AuthStr = `Token ${USER_TOKEN}`;
    async function getUserBalance() {
      await axios.get(`${API_URL}/api/finance/balance/`, { headers: { Authorization: AuthStr } })
      .then((response) => {
        setUserBalance(response.data);
      })
      .catch((error) => {
        console.log("================MyAccountContainer===============");
        console.log(error);
      })
    }

    getUserBalance();
  }, [update])

  
  if (!loaded) {
    return null;
  }

  return (
    <MyAccountContainerBox {...rest} onPress={() => route.name == 'Main' ? navigation.navigate('MyAccountDetails') : null}>
      <MyAccountHeaderContainer>
        <MyAccountTitle>내 계좌</MyAccountTitle>
        <RefreshImageContainer onPress={() => handleRefresh()}>
          <RefreshImage source={refresh} />
        </RefreshImageContainer>
      </MyAccountHeaderContainer>
      <MyMoneyContainer>
        <MyMoney>{userBalance.balance}</MyMoney>
      </MyMoneyContainer>
      <MyAccountInfoContainer>
        <BankName>농협</BankName>
        <AccountNumber>{userBalance.acno}</AccountNumber>
      </MyAccountInfoContainer>
    </MyAccountContainerBox>
  )
}