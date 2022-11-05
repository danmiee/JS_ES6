// 1. 브라우저에서 실시간으로 보이는 시계를 만들어야 합니다. ** [참고 자료 - #5 CLOCK]
// (https://nomadcoders.co/javascript-for-beginners/lectures/2907)**

// 삽입할 위치 설정
const wrap = document.querySelector("#wrap");
const clock = wrap.querySelector("#clock");

// 함수로 현재시각 불러오기
function getClock() {
  // 현재일시 가져오는 함수 Date() 사용
  const now = new Date();

  // 시, 분, 초 구분
  // 00포맷 설정 - padStart() 사용
  // padStart는 String에만 사용가능
  const hour = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const sec = String(now.getSeconds()).padStart(2, "0");
  
  // clock 위치에 넣기
  clock.innerText = `${hour}:${min}:${sec}`;
}

// 초기화면 시계 표시
getClock();

// 1초마다 업데이트
setInterval(getClock, 1000);  // 함수처리하면 안됨



// 2. 로컬 스토리지를 사용해 사용자 이름을 이용한 로그인 기능이 필요합니다. **
// [참고 자료 - #4 LOGIN](https://nomadcoders.co/javascript-for-beginners/lectures/2899)**

// html 태그 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoDiv = document.querySelector("#todo-div")

// 반복할 String 대문자 변수 선언
const HIDDEN_CLASSNAME = "hidden";  // classList 활용 시 hidden 사용
const USERNAME_KEY = "username";    // localstorage 키를 username으로 설정

// 로그인 버튼 이벤트
function loginSubmit(e) {
  // 브라우저 새로고침 방지
  e.preventDefault();
  // 입력한 이름 가져오기
  const username = loginInput.value;
  // localstorage에 키값과 함께 저장
  localStorage.setItem(USERNAME_KEY, username);
  // classList 활용하여 폼 숨기기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 인사 보여주기
  showGreeting();
}

// 인사 생성 함수
function showGreeting() {
  // localStorage에서 이름 가져오기
  // 자동로그인 시에도 이름 가져오기 위함
  // 로그인 버튼 이벤트, 자동로그인에서 모두 사용할 수 있어야 하므로 savedUsername과 별도로 username 선언 필요
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello, ${username}`;
  // greeting 폼 보이기
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // todolist 보이기
  todoDiv.classList.remove(HIDDEN_CLASSNAME);
}

// 자동로그인 설정에서 사용할 유저네임 변수 선언
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 최초 로그인 후 자동로그인 설정
if (savedUsername != null) {
  showGreeting();
} else {
  // 저장된 값이 없으면 폼 보이기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // 로그인(submit) 버튼 이벤트 적용
  loginForm.addEventListener("submit", loginSubmit);
}

// 3. 로컬 스토리지를 사용한 투두리스트 기능이 필요합니다. **
// 투두리스트는 새로 고침을 해도 지워지지 않아야 합니다. **
// [참고 자료 - #7 TO DO LIST](https://nomadcoders.co/javascript-for-beginners/lectures/2914)**

// 4. 배경 이미지가 랜덤하게 나타나야 합니다. **
// 참고 자료 - #6 QUOTES AND BACKGROUND](https://nomadcoders.co/javascript-for-beginners/lectures/2911)**

// 5. 위치 API를 사용해 현재 위치와 그에 맞는 날씨를 출력해야 합니다. **
// [참고 자료 - #8 WEATHER](https://nomadcoders.co/javascript-for-beginners/lectures/2923)**

// 6. 여러분의 CSS 실력을 뽐내주세요💖