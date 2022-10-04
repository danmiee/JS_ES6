/* [문제풀이 로직]
  입력
    1. 폭탄섞기 버튼 입력
    2. 숫자박스 클릭 입력
  처리
    1-1. 폭탄섞기 처리
      - 폭탄위치 배열로 나타내기  'V'
        (배열 연습을 위해 이렇게 풀이 / 다른 방법으로도 풀이 가능)
        [0,0,0,0,0,0,0,0,1] => 셔플
    2-1. 숫자박스 처리
      - 폭탄위치 셔플 여부 확인 'V'
      - 셔플O : 눌러진 숫자박스에 그림 표시          
        (폭탄위치 배열요소 값으로 그림 구분)         
      - 클릭된 번호를 배열에 저장 (selNum)          
      - 하트그림이 나오면 카운트 증가 (cnt++)       
        카운트 값이 8이면 폭탄 위에 하트를 넣고 종료
      - 폭탄 그림이 나오면 다시 눌러지지 않도록
*/

//폭탄이 있는 위치를 나타내는 배열
let num = [];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

// 메세지 출력 함수
const msgShow = (m) => {
  const msg = document.getElementById("msg");
  msg.innerHTML = `<h2>${m}</h2>`;
}

// 숫자박스 클릭 입력
const show = (n) => {
if(!shuffleFlag) {
  msgShow("폭탄을 섞어주세요.");
  return;
}

// 클릭한 번호를 배열요소로 추가
if(!selNum.includes(n)) selNum.push(n);
console.log(selNum, selNum.length);

// 폭탄위치 배열 참고하여 그림 변경
let imgSrc = null;
if(num[n-1]==0)   imgSrc = "heart";
else              imgSrc = "bomb";

// 현재 클릭한 숫자박스에 그림 표시
document.getElementById(`box${n}`).innerHTML = `<img src=./images/${imgSrc}.png>`
// console.log(n);

// 성공체크
if(selNum.length==8) {
  let fn = [1,2,3,4,5,6,7,8,9].filter((i) => !selNum.includes(i));
  console.log(fn[0]);
  document.getElementById(`box${fn[0]}`).innerHTML = `<img src=./images/heart.png>`;
  shuffleFlag = false;
  msgShow('성공');
}

// 실패체크
if (imgSrc=='bomb') {
  shuffleFlag = false;
  msgShow('실패');
}
}


// 폭탄섞기 함수(반복문으로도 가능)
const boxShuffle = () => {
  num.sort( () => Math.random() - 0.5 );  // 음수면 안바꾸고 양수면 바꾸기
  shuffleFlag = true; // 폭탄섞였음을 알려주기 위해 값 변경
  
  init();
  console.log(num);
}  

// 초기화 함수
const init = () => {
  // 메세지 지우기
  msgShow(' ');

  // 그림 지우기
  for(let i=1; i<=9; i++) {
    document.getElementById(`box${i}`).innerHTML = `${i}`;
  }

  // 선택했던 숫자배열 지우기
  selNum = [];
}  



/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{

  //DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
  for(let i=0; i<8; i++) {
    num.push(0);
  }
  num.push(1);
  console.log(num);

});