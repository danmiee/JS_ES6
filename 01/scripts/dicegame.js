

const show = () => {
  // 주사위 버튼 누르면 라디오랑 확인버튼 보이기
  let tag = "";

document.getElementById("choice").style.display = 'block';
document.getElementById("bt1").style.display = 'none';
document.getElementById("bt2").style.display = 'block';

};

const play = () => {
  // 확인 누르면 랜덤주사위와 OX결과 보여주기
  document.getElementById("choice").style.display = 'none';

  // 랜덤 주사위 보여주기
  let i = Math.floor(Math.random() * 6) + 1;

  tag = `<div class="msgDiv">
        <img src="./img/${i}.png" id="msgImg">
        </div>`

  const msgDiv = document.querySelector('#msg')

  msgDiv.innerHTML = tag

  // 라디오 선택값과 주사위 결과 비교
  let num = document.getElementsByName('num');
  let numChoice;
  for(let i=0; i<num.length; i++) {
    if(num[i].checked) {
      numChoice = num[i].value;
    }
  }

  // OX 결과 보여주기
  const result1 = `<div class="resultDiv">
  <img src="./img/o.png" id="resultImg">
  </div>`
  
  const result2 = `<div class="resultDiv">
  <img src="./img/x.png" id="resultImg">
  </div>`

  const result = document.querySelector('#result')

  if(numChoice==i) {
    result.innerHTML = result1
  } result.innerHTML = result2

 


}

document.addEventListener("DOMContentLoaded", () => {
  //돔화면에서 라디오, 확인버튼 숨기기
  // document.getElementById("choice").style.display = 'none';
  document.getElementById("bt2").style.display = 'none';



})