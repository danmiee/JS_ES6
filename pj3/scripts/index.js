const dispDom = (boardP, btP, msgP) => {
  document.getElementById("board").style.display = boardP;
  document.getElementById("bt").style.display = btP;
  document.getElementById("msg").style.display = msgP;
}

//폭탄이 있는 위치를 나타내는 배열
let num = [];

/* 폭탄섞기 누르면 */
// 폭탄 섞기 실행
const boxShuffle = () => {
  for (let i = 0; i < num.length; i++) {
    let idx1 = Math.floor(Math.random() * 9);
    let idx2 = Math.floor(Math.random() * 9);

    if (idx1 != idx2) {
      let temp = num[idx1];
      num[idx1] = num[idx2];
      num[idx2] = temp;
    }
    dispDom('flex', 'flex', 'none');
  }
  console.log('shuffle num: [' + num + ']');
};

// 박스 중복클릭 방지

//박스를 선택한 순서를 기록하는 배열
let selNum = [];
let click = document.getElementsByClassName('boardbox').click;

for(let sn=0; sn<num.length; sn++) {
  selNum[sn] = click;
}

//박스를 선택한 개수를 기록하는 변수
let cnt = 0;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

/* 박스 누르면(show) 
  1. 폭탄섞기 여부확인
  2. 안 섞었으면 섞으라고 하기
  // 이하 내용은 섞었을 때
  3. cnt 기록하기
  4. selNum 요소 기록하기
  5. 이미지 보여주기(0:하트/1:폭탄)
    단, 성공(cnt=8) 시 1도 하트
 */

const show = (click) => {
  let heart = `<img src="./images/heart.png" id="heartImg">`;
  let bomb = `<img src="./images/bomb.png" id="bombImg">`;

  if (shuffleFlag) {
    return;
  } else {
    if (num[click - 1] == 1) {
      if (cnt == 8) {
        cnt++;
        document.getElementById(`box${click}`).innerHTML = heart;
      } else {
        cnt++;
        document.getElementById(`box${click}`).innerHTML = bomb;
      }
    } else {
      cnt++;
      document.getElementById(`box${click}`).innerHTML = heart;
    }
    console.log('cnt: ' + cnt);
  }
}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", () => {

  // 기본세팅
  dispDom('flex', 'flex', 'flex');
  boxShuffle();
  shuffleFlag = false;
  cnt = 0;

  //DOM이 로드가 되면 반복문을 이용하여 num을 [0,0,0,0,0,0,0,0,1]로 초기화
  num.sort();
  for (let s = 0; s < 9; s++) {
    (s == 8) ? num[s] = 1 : num[s] = 0;
  }
  console.log(num);

});