import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';

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
  const route = useRoute();
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
    <MyAccountContainerBox {...rest} onPress={() => route.name == 'Main' ? navigation.navigate('MyAccountDetails') : null}>
      <MyAccountHeaderContainer>
        <MyAccountTitle>내 계좌</MyAccountTitle>
        <RefreshImageContainer>
          <RefreshImage source={refresh} />
        </RefreshImageContainer>
      </MyAccountHeaderContainer>
      <MyMoneyContainer>
        <MyMoney>130,000</MyMoney>
      </MyMoneyContainer>
      <MyAccountInfoContainer>
        <BankName>농협</BankName>
        <AccountNumber>44580259645844</AccountNumber>
      </MyAccountInfoContainer>
    </MyAccountContainerBox>
  )
}