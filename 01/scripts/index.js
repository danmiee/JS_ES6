// 기존 함수 선언 방식 : 문자, 숫자 혼합 사용 가능
  /*
  function funPrint(n) {
  console.log(n);
  console.log("외부 자바스크립트");
  console.log("버튼"+1);
  }
  */
//console.log("DOM test")  // 웹페이지 개발자화면 console창에 표시

// ES6+ : 화살표함수 사용
  const funPrint = (n) => {
    // console.log(n);
    // console.log("외부 자바스크립트");
  console.log(`버튼${n}`);
  }

// 변수선언
  // console.log(x);
  /*
    const > undefined : 아직 값이 할당되지않음
    let > 오류발생
  */
  // let x = 100;
  // x=100*2;
  //   /*
  //     const > 오류발생
  //     let > 200
  //   */
  // console.log(x);


/* jQuery 문법 */
  // $document.ready() {
  // 문서가 준비되면
  // }

  /* 
  document.addEventListenner("DOMContentLoaded",콜백함수);
  document.addEventListenner("DOMContentLoaded",function () {});
  document.addEventListenner("DOMContentLoaded",() => {});

  DOMContentLoaded가 왔을 때 '콜백함수'를 실행한다
    - function () {}  : 익명함수 / 콜백함수
    - 콜백함수 : 인수로 들어가는 함수
      ㄴ 일반적으로 다른 언어에서는 함수는 인수로 들어갈 수 없다.
    - 현재는 함수 생략, () => {} 화살표로 표기
  */

// DOM이 생성되고 난 후 요소를 CRUD 해야함
document.addEventListener("DOMContentLoaded",()=>{
  // console.log(document.getElementById("bt").innerHTML);

/* 요소생성(Create) */
  // const bt = document.createElement("")
  // let bt = document.createElement("button")
  // document.getElementById("bt").append(bt);

/* 요소찾기(Retrieve)*/
  // const bts1 = document.getElementsByClassName("bt1")
  // console.log(bts1);
  // // 결과 : HTMLCollection

  // const bts2 = document.getElementsByTagName("button")
  // console.log(bts2);
  // // 결과 : HTMLCollection

  // const bts3 = document.querySelector(".bt1");
  // // 첫번째 값 하나만 가져옴
  // console.log(bts3);
  // // 결과: Node(요소)

  const bts4 = document.querySelectorAll(".bt1");
  // 모두 가져옴
  // console.log(bts4);
  // 결과: NodeList

  // console.log(bts4[0].innerHTML);
  // // 태그와 텍스트 모두 가져옴
  // console.log(bts4[0].innerText);
  // // 텍스트만 가져옴
  // console.log(bts4[1].textContent);
  // // innerText와 동일하나 display-none인 경우에도 가져옴

// NodeList를 반복으로 가져오기
  /* 반복문 for */
  // for(let i=0; i<bts4.length; i++) {
  //   // 변수이니까 let 으로 선언해야함
  //   console.log(bts4[i]);
  //   bts4[i].innerHTML = `mybutton${i+1}`
  //   console.log(bts4[i].innerHTML)
  // }

  /* 반복문 for in : key만 가지고 옴 */
  // for(let i in bts4) {
  //   console.log(i)
  // }

  /* 반복문 foreach(함수) : 메소드형식. 중간에 종료불가*/
  // bts4.forEach((item, idx)=>{
  //   console.log(`${idx} : ${item.innerHTML}`)
  // });

  /* 반복문 for .. of */
  for(let item of bts4) {
    console.log(item.innerHTML);
  }
  for(let [idx,item] of bts4.entries()) {
    console.log(`${idx} : ${item.innerHTML}`);
    break;
  }

});
