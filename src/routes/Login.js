import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styled from 'styled-components';

const background = require('../styles/images/triangle.png');
const logo = require('../styles/images/logo/logo_white_square.png');

// 전체 화면
const Screen = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
`;

const BackgroundImage = styled.Image`
  width: 100%;
  height: 97%;
  margin-top: -280px;
`;

// 로고
const LogoImageContainer = styled.View`
  /* background-color: blue; */
  width: 100%;
  height: 10%;
  position: absolute;
  margin-top: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoImage = styled.Image`
  width: 90px;
  height: 90px;
  position: absolute;
`;

// 아이디 + 패스워드 컨테이너, 아이디, 패스워드
const LoginContainer = styled.View`
  /* background-color: red; */
  width: 100%;
  height: 20%;
  margin: 380px;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const ID = styled.TextInput`
  background-color: #fff;
  width: 80%;
  height: 30%;
  margin: 30px;
  position: absolute;
  flex-direction: row;
  flex: 1;
  paddingLeft: 10;
  border-radius: 10;
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  };
  shadowOpacity: 0.2;
  shadowRadius: 2.22;

  elevation: 3;
`;

const Password = styled.TextInput`
  background-color: white;
  width: 80%;
  height: 30%;
  margin: 100px;
  position: absolute;
  flex-direction: row;
  flex: 1;
  paddingLeft: 10;
  border-radius: 10;
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  };
  shadowOpacity: 0.2;
  shadowRadius: 2.22;

  elevation: 3;
`;

// 버튼
const LoginButtonContainer = styled.View`
  /* background-color: orange; */
  width: 100%;
  height: 10%;
  position: absolute;
  margin-top: 680px;
  display: flex;
  align-items: center;
`;

const LoginButton = styled.View`
  background-color: #00AC84;
  width: 80%;
  height: 65%;
  margin-top: 20px;
  position: absolute;
  text-align: center;
  border-radius: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginButtonTitle = styled.Text`
  /* background-color: purple; */
  width: 100%;
  height: 30%;
  color: white;
  font-size: 15px;
  text-align: center;
  justify-content: center;
`;

const Footer = styled.Text`
  /* background-color: purple; */
  width: 100%;
  height: 3%;
  position: absolute;
  margin: 770px;
  font-size: 10px;
  color: #00AC84;
  text-align: center;
`;

export default function Login() {
  return (
    <Screen>
        <BackgroundImage source={background} />
          
          <LogoImageContainer>
            <LogoImage source={logo}/>
          </LogoImageContainer>
          
          <LoginContainer>
            <ID placeholder = "ID"/>
            <Password placeholder = "Password"/>
          </LoginContainer>
          
          <LoginButtonContainer>
              <LoginButton>
                <LoginButtonTitle>시작하기</LoginButtonTitle>
              </LoginButton>
          </LoginButtonContainer>

          <Footer>
          By creating an account you agree to our{"\n"}
          Terms of Service and Privacy Policy</Footer>
    </Screen>
  )
}