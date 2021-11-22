import React from "react";
import axios from "axios";


export default function URI() {
  // url 넣기
  const url = '';

  // 로그인 함수
  const loginSubmit = (ID, Password) => {
    let form = new FormData();
    form.append('username', ID)
    form.append('password', Password)

    axios.post(
      url+'/api/ttAccount/register', form)
      .then((response) => {
        if(response.status == 200) {
          alert('Welcome Back!')
        }
      })
      .catch((error) => {
        if (error.response.status == 400) {
          alert('아이디나 비밀번호를 다시 입력해주세요!')
        } else {
          alert (`error ${error.response.status}`);
          console.log(error);
        }
      })
  }


}
