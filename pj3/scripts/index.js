const dispDom = (boardP, btP, msgP) => {
  document.getElementById("board").style.display = boardP;
  document.getElementById("bt").style.display = btP;
  document.getElementById("msg").style.display = msgP;
}

//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [];
num.sort();
for (let i = 0; i < 9; i++) {
  (i == 8) ? num[i] = 1 : num[i] = 0;
}
console.log(num);
//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

/* 폭탄섞기 누르면 */
// 폭탄 섞기 실행
const boxShuffle = () => {
  return num.sort(() => Math.random() - 0.5);
}
console.log(boxShuffle(num));

/* 박스 누르면(show) 
 폭탄섞기 여부확인
 > 섞었으면 0: 하트노출 / 1: 폭탄
 > 안 섞었으면 msg 노출
 */


/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", () => {
  dispDom('flex', 'flex', 'none');

});