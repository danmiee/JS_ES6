// 기존 함수 선언 방식 : 문자, 숫자 혼합 사용 가능
/* function funPrint(n) {
  console.log(n);
  console.log("외부 자바스크립트");
  console.log("버튼"+1);
} */

// ES6+ : 화살표함수 사용
const funPrint = (n) => {
  // console.log(n);
  // console.log("외부 자바스크립트");
  console.log(`버튼${n}`);
}