import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import BackButtonHeader from '../components/BackButtonHeader';

const NotificationList = ['영어 숙제하기', '학원 다녀오기', '편식하지 않기', '게임 시간 줄이기', '집에 일찍 돌아오기', '저축 하기']

// 전체 화면
const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`;

// 알림 내역 Layout
const TitleContainer = styled.View`
  /* background-color: #C3E2DD; */
  width: 100%;
  height: 13%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.Text`
  position: absolute;
  bottom: 20px;
  font-family: Helvetica_Bold;
  font-size: 18px;
`;

// 알림 리스트 Layout
const NotificationContainer = styled.View`
  /* background-color: #6ECEDA; */
  width: 100%;
  height: 100%;
`;

// Each 알림 리스트 컨테이너
const EachNotificationContainer = styled.View`
  /* background-color: #E5C1C5; */
  width: 100%;
  height: 10%;
  display: flex;
  padding: 10px;
`;

const NotificationManage = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

const NotificationPhotoContainer = styled.View`
  justify-content: center;
  flex: 1.2;
  left: 10;
`;

const NotificationPhoto = styled.View`
  background-color: #7E7E7E;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  opacity: 0.2;
`;

const NotificationTitleContainer = styled.View`
  flex: 2.5;
  justify-content: center;
`;

const NotificationTitle = styled.Text`
  font-size: 15px;
  color: #6E6E6E;
`;

const NotificationMoney = styled.Text`
  font-size: 10px; 
  color: #6E6E6E;
  margin-top: 5px;
`;

const NotificationTimeContainer = styled.View`
  /* background-color: #E8E7D2; */
  width: 10%;
  height: 100%;
  justify-content: center;
  flex: 0.5;
`;

const NotificationTime = styled.Text`
  font-size: 9px; 
  color: #505050;
  text-align: center;
`;

// 진행 상황(송금, 완료)
const NotificationResultContainer = styled.View`
  /* background-color: #D2D5B8; */
  width: 10%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex: 1.5;
`;

const NotificationResult = styled.View`
  background-color: #00AC84;
  width: 50%;
  height: 50%;
  border-radius: 15px;
  justify-content: center;
`;

const NotificationResultTitle = styled.Text`
  font-size: 10px;
  text-align: center;
  color: white;
`;

export default function Notification() {
  return (
    <Screen>
      <TitleContainer>
        <MainTitle>알림 내역</MainTitle>
      </TitleContainer>
      <BackButtonHeader/>

      <NotificationContainer>

        <EachNotificationContainer>
        { NotificationList.map((eachNotification) => (
          <NotificationManage>

            <NotificationPhotoContainer>
              <NotificationPhoto/>
            </NotificationPhotoContainer>
            
              <NotificationTitleContainer>
                <NotificationTitle >{eachNotification}</NotificationTitle>
                <NotificationMoney>15000원</NotificationMoney>
              </NotificationTitleContainer>

            <NotificationTimeContainer>
              <NotificationTime>3시간 전</NotificationTime>
            </NotificationTimeContainer>

            <NotificationResultContainer>
              <NotificationResult>
                <NotificationResultTitle>송금</NotificationResultTitle>
              </NotificationResult>
            </NotificationResultContainer>
          </NotificationManage>
        )) }
        </EachNotificationContainer>
      </NotificationContainer>
    </Screen>
  )
}