// 기존 함수 선언 방식  
/*
function funPrint(n) {
  console.log(n);
  console.log("외부 자바스크립트") ; 
  console.log("버튼"+1);
}
*/

//ES6+ : 화살표 함수
const funPrint = (n) => {
  //console.log(n);
  //console.log("외부 자바스크립트") ;
  console.log(`버튼${n}`);
}

/*
//변수 
//console.log(x);
let x = 100;
x = 100 *2 ;
console.log(x);
*/

/* jQuery 
$document.ready() {

}
*/

//DOM이 생성이 되고 난 후에 요소를 CRUD해야한다.
//document.addEventListener("DOMContentLoaded",콜백함수);
//document.addEventListener("DOMContentLoaded",function () {});
//document.addEventListener("DOMContentLoaded",() => {});
document.addEventListener("DOMContentLoaded", () => {

  //console.log(document.getElementById("bt").innerHTML);

  /*요소 생성*/
  //let bt = document.createElement("button")
  //document.getElementById("bt").append(bt);

  //요소 찾기
  /*
  //결과 HTMLCollection
  const bts1 = document.getElementsByClassName("bt1");
  console.log(bts1);

  //결과 HTMLCollection
  const bts2 = document.getElementsByTagName("button");
  console.log(bts2);

  //결과 Node
  const bts3 = document.querySelector(".bt1");
  console.log(bts3);
  */
  //결과 NodeList
  const bts4 = document.querySelectorAll(".bt1");
  //console.log(bts4.length);
 
  // console.log(bts4[0].innerHTML);
  // console.log(bts4[0].innerText);
  // console.log(bts4[1].textContent);
 
  /* 반복문 for*/
  //결과 NodeList를 반복으로 가져오기
  // for(let i=0; i < bts4.length ; i++) {
  //   console.log(bts4[i]);
  //   //bts4[i].innerHTML = `mybutton${i+1}`
  //   //console.log(bts4[i].innerHTML);
  // } 

  /* 반복문 for in => 키만 가지고 옴*/
  // for(let i in bts4) {
  //   console.log(i)
  // }

  /* 반복문 foeach : 메소드형식 중간에 종료할 수 없음*/
  // bts4.forEach((item)=>{
  //   console.log(item.innerHTML);
  // });

  // bts4.forEach((item, idx)=>{
  //   console.log(`${idx} : ${item.innerHTML}`);
  // });
  
  /*반복문 for .. of*/
  for(let item of bts4) {
    console.log(item.innerHTML);
  }

  for(let [idx, item] of bts4.entries()) {
    console.log(`${idx} : ${item.innerHTML}`);
    break;
  }

}); 

