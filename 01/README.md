# JS_ES6

<hr/>

## 220926
+ 사용방법
  + script 태그 사용
+ JS 위치
 1. 내부 자바스크립트
    + head 태그 영역
    + body 태그 영역
      + 어느 위치든 가능
    + 돔을 컨트롤 하기 위해서는 마지먹에 써야한다.
 2. 외부 자바스크립트
    + < script src="파일경로/+.js" >< /script >
+ alert
  + 사이트 접속 시 알림창 팝업
  + 확인을 눌러야 body가 나오며 실행됨
+ console.log
  + 사용자에게는 보이지 않음
  + 개발자 도구 Console 창에서 확인 가능
+ 호출해야 사용할 수 있게 만드는 함수
  + 기존 함수 선언 방식 : function funPrint() {}
  + ES6+ 화살표함수 : const funPrint = () => {}
  + 사용방법
    + js 파일에 작성 및 {} 내부에 실행문 작성
    + html 파일 속성으로 동작 넣어주기
  + () : html 속성과 연계하여 동작 구분
    + `(백틱) 기호로 문자, 숫자 혼합하여 사용 가능
      ex. console.log(`버튼${n}`);
