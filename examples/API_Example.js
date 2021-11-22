// 로그인 데이터(POST)
const Login = 
{
	"username" : "user1",
  "password" : "likelionorg",
}

// 유저정보 (토근값으로 GET)
const User = [
  {
      "id": 2,
      "password": "parent1",
      "last_login": null,
      "is_superuser": false,
      "username": "parent1",
      "first_name": "",
      "last_name": "",
      "email": "",
      "is_staff": false,
      "is_active": true,
      "date_joined": "2021-11-18T17:04:09Z",
      "birthday": "19990221",
      "finAcno": "00820100012060000000000012421",
      "acno": "3020000005296",
      "iscd": "001206",
      "accessToken": "f6c394a8f81bb6e86619f6e2c6cdfb62469b61bd4277e5e5756657a34fa2862b",
      "groups": [],
      "user_permissions": []
  }
]

// 자녀정보 조회(토근값으로 GET)
const Child = [
  {
      "id": 1,
      "firstname": "child1",
      "lastname": "parent1",
      "birthday": "19990221",
      "finAcno": "00820100012060000000000012421",
      "acno": "3020000005296",
      "iscd": "001206",
      "accessToken": "f6c394a8f81bb6e86619f6e2c6cdfb62469b61bd4277e5e5756657a34fa2862b",
      "parent": 2
  },
  {
      "id": 2,
      "firstname": "child2",
      "lastname": "parent1",
      "birthday": "2",
      "finAcno": "2",
      "acno": "2",
      "iscd": "2",
      "accessToken": "2",
      "parent": 2
  }
]

// 유저잔액 조회(토큰값으로 GET)
// MyAccountContainer.js
const UserMoney = {
  "id": 2,
  "username": "parent1",
  "acno": "3020000005296",
  "balance": 50000
}

// 자녀잔액 조회(토큰값으로 GET)
// ChildMain.js + MyAccountContainer.js
const ChildMoney = [
  {
      "id": 1,
      "firstname": "child1",
      "parent": "parent1",
      "balance": 50000
  },
  {
      "id": 2,
      "firstname": "child2",
      "parent": "parent1",
      "balance": 345590
  }
]

// 자녀 거래내역 조회(토큰값이랑 자녀인덱스로 GET)
const ChildUsage = [
  {
      "trdd": "20211116",
      "txtm": "002900",
      "mnrcDrotDsnc": 3,
      "tram": 10000,
      "aftrBlnc": 50000,
      "bnprCntn": "스타벅스 당산역점",
      "tuno": 47257
  },
  {
      "trdd": "20211114",
      "txtm": "232505",
      "mnrcDrotDsnc": 2,
      "tram": 20000,
      "aftrBlnc": 60000,
      "bnprCntn": "입금계좌인자내용",
      "tuno": 46865
  },
  {
      "trdd": "20211114",
      "txtm": "231950",
      "mnrcDrotDsnc": 3,
      "tram": 10000,
      "aftrBlnc": 40000,
      "bnprCntn": "더진국 왕십리점",
      "tuno": 46861
  }
]

// 송금(토큰값이랑 자녀 인덱스, 돈(INT) 값으로 GET)
// 반환값 없음
// not drawed: 출금 실패
// drawed but not transferred error: 출금은 됐지만 입금이 안됨
// remittance successed: 송금 성공

// 용돈분석 조회(토큰, 자녀 인덱스, 기간으로 GET)
// ?childId=1&period=annual
const AnaysisAnnual = {
    "food": 20000,
    "transportation": 20000,
    "hobby": 0,
    "etc": 199000,
    "total": 239000
}

// ?childId=1&period=week
const AnalysisWeekly = {
    "food": 10000,
    "transportation": 20000,
    "hobby": 0,
    "etc": 0,
    "total": 30000
}
