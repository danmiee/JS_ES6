const dispDom = (msgP, choiceP, bt1P, bt2P) => {
  document.getElementById("msg").style.display = msgP;
  document.getElementById("choice").style.display = choiceP;
  document.getElementById("bt1").style.display = bt1P;
  document.getElementById("bt2").style.display = bt2P;
}

let diceNum;
let choiceNum;

// 주사위 버튼 누르면
const show = () => {

  // 랜덤 주사위 굴리기
  diceNum = Math.floor(Math.random() * 6) + 1;

  console.log(`주사위 번호 : ${diceNum}`);

  // 라디오랑 확인버튼 보이기
  dispDom('none', 'block', 'none', 'block');
};

// 확인 누르면
const play = () => {
  // 라디오 & 확인버튼 숨기고 주사위 버튼 보여주기
  dispDom('block', 'none', 'block', 'none');

  // 라디오 선택여부 확인
  let chk_radio = document.getElementsByName('num');
  let sel_type = null;
  for (let s = 0; s < chk_radio.length; s++) {
    if (chk_radio[s].checked == true) {
      sel_type = chk_radio[s].value;
    }
  }
  if (sel_type == null) {
    alert('번호를 선택하세요.');
    dispDom('none', 'block', 'none', 'block');
    return;
  }

  // 라디오 선택값 확인
  choiceNum = form1.num.value;
  console.log(choiceNum);

  // 선택값과 주사위 비교하기
  

  // 주사위 그림
  let dice = `<img src="./img/${diceNum}.png" id="diceImg">`;
  
  // ox 그림
  let ox;
  if (diceNum==choiceNum) ox = 'o';
  else                    ox = 'x';

  let rt = `${dice}<img src='./img/${ox}.png' id="oxImg">`;
  
  document.getElementById('msg').innerHTML=rt;

}

document.addEventListener("DOMContentLoaded", () => {
  //돔화면에서 라디오, 확인버튼 숨기기
  dispDom('none','none','block','none');

})