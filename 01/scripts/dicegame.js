
// 주사위 버튼 누르면
const show = () => {
  // 라디오랑 확인버튼 보이기
  document.getElementById("choice").style.display = 'block';
  document.getElementById("bt1").style.display = 'none';
  document.getElementById("bt2").style.display = 'block';
};

// 확인 누르면
const play = () => {
  // 라디오버튼 숨기기
  document.getElementById("choice").style.display = 'none';
  document.getElementById("bt1").style.display = 'block';
  document.getElementById("bt2").style.display = 'none';

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
    document.getElementById("choice").style.display = 'block';
    document.getElementById("bt1").style.display = 'none';
    document.getElementById("bt2").style.display = 'block';

    return;
  }

  // 라디오 선택값 확인
  let num = document.getElementsByName('num');
  let numChoice;
  for (let i = 0; i < num.length; i++) {
    if (num[i].checked) {
      numChoice = num[i].value;
    }
  }

  console.log(`선택값: ${numChoice}`);

  // 랜덤 주사위 굴리기
  let numDice = Math.floor(Math.random() * 6) + 1;

  let dice = `<img src="./img/${numDice}.png" id="diceImg">`

  console.log(`주사위값 : ${numDice}`);

  // 선택값과 주사위 비교하여 OX 결과 보여주기
  let ox;
  if (numChoice == numDice) ox = 'o';
  else                      ox = 'x';
  
  let rt = `${dice}<img src="./img/${ox}.png" id="oxImg">`
  
  const msgDiv = document.querySelector('#msg')
  msgDiv.innerHTML = rt

}

document.addEventListener("DOMContentLoaded", () => {
  //돔화면에서 라디오, 확인버튼 숨기기
  document.getElementById("choice").style.display = 'none';
  document.getElementById("bt2").style.display = 'none';

})