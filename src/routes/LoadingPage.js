import React, {useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const logo = require('../styles/images/logo/logo_green_square.png');

// 전체 화면
const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Header = styled.View`
  /* background-color: red; */
  width: 100%;
  height: 40%;
`;

// 로고
const LogoImageContainer = styled.View`
  /* background-color: #FDF2F0; */
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.Image`
  width: 90px;
  height: 90px;
`;

// 타이틀
const TitleContainer = styled.View`
  /* background-color: black; */
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.Text` 
  font-size: 15px;
  color: #00ac84;
  text-align: center;
`;

// 푸터
const Footer = styled.View`
  /* background-color: orange; */ 
  width: 100%;
  height: 40%;
`;

// 로딩 바
const styles = StyleSheet.create({
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

export default function LoadingPage({navigation}){
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      if(setAnimating==false){
      } else{
      navigation.push('Login');
      }
    }, 3000);
  }, []);

  return(
    <Screen>
      <Header />
      <LogoImageContainer>
        <LogoImage source={logo} />
      </LogoImageContainer>
      <TitleContainer>
        <TitleText>올바른 금융 습관,{"\n"}틴팅</TitleText>
      </TitleContainer>
      <Footer>
        <ActivityIndicator
          animating={animating}
          color="#00ac84"
          size="large"
          style={styles.activityIndicator}
        />
      </Footer>
    </Screen>
  )
}