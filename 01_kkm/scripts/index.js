// 랜덤수
let randNum;
// 사용자가 선택한 수
let userNum;

// 화면 보기 함수
const dispDom = (msgP,inNumP,bt1P,bt2P) => {
  document.getElementById('msg').style.display=msgP;
  document.getElementById('inNum').style.display=inNumP;
  document.getElementById('bt1').style.display=bt1P;
  document.getElementById('bt2').style.display=bt2P;
}

// 주사위
// function showDice() {}
const showDice = () => {

  // 랜덤 수 생성
  randNum=Math.floor(Math.random()*6) + 1;
  console.log(`주사위 랜덤수 = ${randNum}`)

  // DOM 제어
  dispDom('none','block','none','block');
  // document.getElementById('msg').style.display='none';
  // document.getElementById('inNum').style.display='block';
  // document.getElementById('bt1').style.display='none';
  // document.getElementById('bt2').style.display='block';
}

// 확인
const showOk = () => {

  // 사용자가 선택한 수 가져오기
  userNum = form1.num.value;

  // 랜덤수와 사용자가 선택한 수 비교하기
  console.log(`사용자 선택수 = ${userNum}`);

  // DOM 제어
  dispDom('block','none','block','none');
  // document.getElementById('msg').style.display='block';
  // document.getElementById('inNum').style.display='none';
  // document.getElementById('bt1').style.display='block';
  // document.getElementById('bt2').style.display='none';

  // 주사위 그림
  let tag = `<img src="./images/${randNum}.png">`;
  
  // ox 그림
  let ox;
  if (randNum == userNum) ox = "o";
  else                    ox = "x";
  // if (randNum==userNum) {
  //   tag = `$(tag)<img src="./images/o.png>`
  // } else {
  //   tag = `$(tag)<img src="./images/x.png>`
  // }

  tag = `${tag}<img src="./images/${ox}.png">`;

  // 이미지 표시
  document.getElementById("msg").innerHTML = tag;
  console.log(`사용자 선택 수 확인 => ${userNum}`);
}


//DOM이 생성이 되고 난 후에 요소를 CRUD해야한다.
document.addEventListener("DOMContentLoaded", () => {

  //주사위 버튼만 보여야 함
  dispDom('none','none','block','none');
  // document.getElementById('msg').style.display='none';
  // document.getElementById('inNum').style.display='none';
  // document.getElementById('bt2').style.display='none';

});