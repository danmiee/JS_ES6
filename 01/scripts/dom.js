/* show() 함수 생성
  : 즉시 실행하는 것이 아니라서 DOM 요소 생성 전이어도 상관없음 */

  //  구버전 : function 키워드로 함수 생성
    /*
    function show() {
    console.log("show");
    };
    */

  //  화살표 함수형식으로 생성
    /*
    const show = () => console.log("show 화살표함수");
    - 함수는 유일하기 때문에 무조건 const
    - 함수 내 명령이 하나이면 {} 생략 가능
     ㄴ return문 하나이면 return도 생략 가능
    */

const show = () => {
  
  // 1. 태그만들기
  let tag = "";
    /* show 안에서 사용가능 */
  // for (let i=1; i<=6; i++) {
  //   // let tag = "";
  //     /*
  //     JS는 블럭스코프를 가짐
  //     > for문 안에서 선언된 tag는 for문 밖에서 활동불가
  //     */
    
  //   // 구버전
  //     /* tag = tag + '<div class="msgDiv">' + i + '</div>'; */
    
  //   // 템플릿 문자열
  //   tag = tag + `<div class="msgDiv">
  //   <img src="./img/${i}.png" alt="주사위이미지${i}">
  //   </div>`
  // };

// 폼 보이기
document.getElementById("choice").style.display = 'block';

    /* 랜덤값 받아 주사위 보이기 */
  let i = Math.floor(Math.random() * 6) + 1;

  tag = `<div class="msgDiv">
        <img src="./img/${i}.png" id="msgImg">
        </div>`

  console.log(tag);

  // 2. DOM에서 태그를 넣을 요소 선택(document.querySelector)
  const msgDiv = document.querySelector('#msg')

  // 3. 선택된 요소의 HTML 변경
  msgDiv.innerHTML = tag

  // 3-1. 스타일 변경
  msgDiv.style.backgroundColor = "red";
  console.log(msgDiv.getComputedStyle());

  // 4. 동적으로 생성된 HTML요소도 스타일 변경 가능
  let msgImg = document.querySelector('#msgImg')
  msgImg.style.maxwidth = "100px"
  msgImg.style.minwidth = "100px"


};

/* DOM 요소가 생성된 후에 실행 */
document.addEventListener("DOMContentLoaded", () => {

// 폼 숨기기
document.getElementById("choice").style.display = 'none';

});