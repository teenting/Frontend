import React, { useEffect, useState } from 'react'; 
import { StyleSheet, Text, View, Modal, TouchableOpacity, Button} from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const closeButtonImage = require('../styles/images/icon/closeButton.png');
const baby = require('../styles/images/icon/baby.png');
const clock = require('../styles/images/icon/clock.png');
const mission = require('../styles/images/icon/mission_customgray.png');
const money = require('../styles/images/icon/money.png');
const green_dropdown = require('../styles/images/icon/green_dropdown.png');

const ModalHeader = styled.View`
  /* background-color: green; */
  width: 100%;
  height: 7%;
  justify-content: center;
  padding: 0px 15px;
`;

const CloseButton = styled.Image`
  width: 20px;
  height: 20px;
`;

// 프로필 사진 + from 엄마
const ModalProfileContainer = styled.View`
  /* background-color: rebeccapurple; */
  width: 100%;
  height: 23%;
  justify-content: center;
  align-items: center;
`;

const ModalProfile = styled.View`
  background-color: #6e6e6e;
  width: 60px;
  height: 60px;
  border-radius: 40px;
  margin-bottom: 7px;
`;

const ProfileText = styled.Text`
  font-size: 15px;
  margin-top: 7px;
`;

// 미션 커스텀하는 컨테이너(누가, 언제까지, 무엇을, 용돈)
const MissionCustomCotainer = styled.View`
  /* background-color: rosybrown; */
  width: 100%;
  height: 50%;
  justify-content: space-around;
  align-items: center;
`;

const EachMissionCustom = styled.View`
  background-color: #F0F0F0;
  width: 85%;
  height: 20%;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
`;

// 아이콘 + 커스텀 제목
const MissionCustomTitleContainer = styled.View`
  /* background-color: silver; */
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MissionCustomTitle = styled.Text`
  color: #6E6E6E;
  font-family: Helvetica;
  font-size: 16px;
  margin-left: 7px;
`;

const MissionCustomImage = styled.Image`
  /* background-color: skyblue; */
  width: 25px;
  height: 25px;
  margin-right: 7px;
  overflow: visible;
`;

// DatePicker 및 TextInput 위치한 컨테이너
const PickContainer = styled.View`
  /* background-color: steelblue; */
  width: 55%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const InputContainer = styled.TextInput`
  /* background-color: tomato; */
  font-size: 15px;
  font-family: Helvetica;
  padding: 0px 5px;
  text-align: center;
  
`;

const RecieverText = styled.Text`
  font-size: 15px;
`;

const MissionInputContainer = styled(InputContainer)`
  width: 95%;
  height: 95%;
`;
const MoneyInputContainer = styled(InputContainer)`

`;

const MoneyUnitText = styled.Text`
  /* background-color: teal; */
  font-size: 15px;
  margin-left: 3px;
`;

const DatePickerButton = styled.TouchableOpacity`
  /* background-color: thistle; */
  width: 55%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const DatePickerText = styled.Text`
  color: #00ac84;
  font-size: 15px;
  margin-right: 6px;
`;

const DatePickerDropDown = styled.Image`
  width: 12px;
  height: 12px;
  margin-left: 6px;
`;

const SubmitContainer = styled.View`
  /* background-color: salmon; */
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #00AC84;
  width: 70%;
  height: 45%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SubmitText = styled.Text`
  color: white;
  font-size: 15px;
  font-family: Helvetica;
`;


export default function NewMissionModal({ visible, setVisible }) {
  const [loaded] = useFonts({
    ModernSans: require('../styles/fonts/ModernSans_Font/ModernSans_Light.ttf'),
    Helvetica_Bold: require('../styles/fonts/Helvetica_Font/Helvetica_Bold.ttf'),
    Helvetica_Light: require('../styles/fonts/Helvetica_Font/Helvetica_Light.ttf'),
    Helvetica: require('../styles/fonts/Helvetica_Font/Helvetica.ttf'),
  });

  let today = new Date();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [date, setDate] = useState(today.getDate());
  const [missionEndDate, setMissionEndDate] = useState(today);
  const [missionDetail, setMissionDetail] = useState('');
  const [missionMoney, setMissionMoney] = useState('');

  // let year = today.getFullYear(); // 년도
  // let month = today.getMonth() + 1;  // 월
  // let date = today.getDate();  // 날짜
  // let day = today.getDay();  // 요일


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
    setDate(date.getDate());
    setMissionEndDate(date);
  };

  const handleSubmit = () => {
    if (missionDetail && missionMoney && !isNaN(missionMoney)) {
      alert('새로운 미션이 추가되었습니다!');
      setVisible(false);
    } else if (isNaN(missionMoney)) {
      alert('보상 칸은 숫자만 입력해주세요.');
    } else if (missionMoney.length == 0) {
      alert('보상 칸을 채워주세요!');
    } else if (missionDetail.length == 0){
      alert('미션 칸을 채워주세요!')
    }

  }

  useEffect(() => {
    today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setDate(today.getDate());
    setMissionEndDate(today);
    setMissionDetail('');
    setMissionMoney('');
  }, [visible])

  if (!loaded) {
    return null;
  }

  return (
    <Modal
        animationType="slide"
        visible={visible}
        presentationStyle="pageSheet"
        onRequestClose={() => setVisible(false)}
      >
        <ModalHeader>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <CloseButton source={closeButtonImage} />
            </TouchableOpacity>
        </ModalHeader>

        <ModalProfileContainer>
          <ModalProfile />
          <ProfileText>엄마가 민수에게</ProfileText>
        </ModalProfileContainer>

        <MissionCustomCotainer>
          <EachMissionCustom>
            <MissionCustomTitleContainer>
            <MissionCustomImage source={baby}/>
              <MissionCustomTitle>대상</MissionCustomTitle>
            </MissionCustomTitleContainer>
            <PickContainer>
              <RecieverText>민수</RecieverText>
            </PickContainer>
          </EachMissionCustom>

          <EachMissionCustom>
            <MissionCustomTitleContainer>
            <MissionCustomImage source={clock}/>
              <MissionCustomTitle>마감일</MissionCustomTitle>
            </MissionCustomTitleContainer>


              <DatePickerButton onPress={showDatePicker}>
                <DatePickerText>{year}-{month}-{date}</DatePickerText>
                <DatePickerDropDown source={green_dropdown} />
              </DatePickerButton>
              {/* <Button title= onPress={showDatePicker} /> */}
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />

          </EachMissionCustom>

          <EachMissionCustom>
            <MissionCustomTitleContainer>
              <MissionCustomImage source={mission}/>
              <MissionCustomTitle>미션내용</MissionCustomTitle>
            </MissionCustomTitleContainer>
            <PickContainer>
              <MissionInputContainer value={missionDetail} onChangeText={setMissionDetail} placeholder="클릭하세요!"></MissionInputContainer>
            </PickContainer>
          </EachMissionCustom>

          <EachMissionCustom>
            <MissionCustomTitleContainer>
            <MissionCustomImage source={money}/>
              <MissionCustomTitle>보상</MissionCustomTitle>
            </MissionCustomTitleContainer>
            <PickContainer>
              <MoneyInputContainer value={missionMoney} keyboardType = 'numeric' onChangeText={setMissionMoney} placeholder="1500"></MoneyInputContainer>
              <MoneyUnitText>원</MoneyUnitText>
            </PickContainer>
          </EachMissionCustom>
        </MissionCustomCotainer>

        <SubmitContainer>
          <SubmitButton onPress={() => handleSubmit()}>
            <SubmitText>새 미션 전송하기</SubmitText>
          </SubmitButton>
        </SubmitContainer>
    </Modal>
  )
}