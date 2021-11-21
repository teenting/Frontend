import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const loginbackground = require('../styles/images/loginbackground.png');
const logo = require('../styles/images/logo/logo_white_square.png');

// 전체 화면
const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`;

// 로고
const LogoImageContainer = styled.View`
  /* background-color: #FDF2F0; */
  width: 100%;
  height: 45%;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.Image`
  width: 90px;
  height: 90px;
`;

// 아이디 + 패스워드 컨테이너, 아이디, 패스워드
const LoginContainer = styled.View`
  /* background-color: #F8DAE2; */
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ID = styled.TextInput`
  background-color: #ffffff;
  width: 80%;
  height: 30%;
  padding-left: 20px;
  border-radius: 10px;
  box-shadow: 0px 7px 15px rgba(100, 100, 111, 0.2);
  margin-top: 20px;
  `;

const Password = styled(ID)``;

// 버튼
const LoginButtonContainer = styled.TouchableOpacity`
  /* background-color: #DEB3CF; */
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.View`
  background-color: #00ac84;
  width: 80%;
  height: 22%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 7px 15px rgba(100, 100, 111, 0.2);
`;

const LoginButtonTitle = styled.Text`
  color: white;
  font-size: 16px;
`;

// footer
const FooterContainer = styled.View`
  /* background-color: #B57FB3; */
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterTitle = styled.Text`
  color: #00AC84;
  font-size: 8px;
  text-align: center;
`;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  }
});
  
export default function Login() {
  return (
    <Screen>
      <ImageBackground source={loginbackground} resizeMode="cover" style={styles.image}>
        <LogoImageContainer>
          <LogoImage source={logo} />
        </LogoImageContainer>

        <LoginContainer>
          <ID placeholder="spongebob1123"/>
          <Password placeholder="Password please!"/>
        </LoginContainer>

        <LoginButtonContainer>
          <LoginButton>
            <LoginButtonTitle>시작하기</LoginButtonTitle>
          </LoginButton>
        </LoginButtonContainer>

        <FooterContainer>
          <FooterTitle>By creating an account you agree to our{"\n"}
          Terms of Service and Privacy Policy</FooterTitle>
        </FooterContainer>
      </ImageBackground>
    </Screen>
  )
}