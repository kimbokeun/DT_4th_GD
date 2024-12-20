/*
  # Jquery 이벤트 메소드 기본구조
    > $(선택자).이벤트메소드(핸들러);

    - 선택자
      이벤트 바인딩할 대상 요소 선택
    - 이벤트 메소드
      실행될 이벤트 종류를 지정
    - 핸들러
      이벤트가 발생했을 때 실행될 함수

    * 이벤트를 지정된 선택자에 직접 바인딩
    * 간편 / 직관적
    * 단점
      > 동적 요소에 대한 이벤트 바인딩 불가능
        예) 페이지 로드 후, 동적으로 버튼이 추가되었을 때, 추가된 버튼에는 이벤트가 안먹힘

    * .on() 메소드 기본구조
      > $(선택자).on(이벤트, 자식선택자, 핸들러)
      - 이벤트 
        이벤트 종류
      - 자식선택자(옵선)
        이벤트를 위임할 자식요소
      - 핸들러
        이벤트가 발생했을 때 실행될 함수

      * 하나의 메소드로 모든 이벤트를 처리
      * 더 강력한 이벤트 바인딩 메소드
      * 동적으로 생성된 요소에도 이벤트 바인딩할 수 있음
*/

// 1. Load Event
//    > in JS
document.addEventListener("DOMContentLoaded", function () {
  console.log("문서의 DOM 트리가 완성되면 실행되는 이벤트 < JS");
});
//    > in Jquery
$(document).ready(function () {
  console.log("ready - 문서의 DOM 트리가 완성되면 실행되는 이벤트 < Jquery");
});

//    > .ready() 단축 속성
$(function () {
  console.log("안녕?");
});

/*
- $(document).ready()
Jquery에서 제공하는 문서 준비 이벤트
브라우저가 DOM 트리를 모두 생성한 후에 실행
즉, DOM이 준비되었을 때 JS 코드가 실행되도록 보장
*/

// 2. Mouse Event
//    > in Jquery
//    > 기본 버전
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

//    > this 버전
$(".num").click(function () {
  $(this).css("color", "green");
});

// this 키워드
//  >> Jquery 메소드를 사용하려면 $(this)로 변환

//    > on 버전
$(".num").on("click", function () {
  $(this).css("color", "yellow");
});

// click in JS
const nums = document.querySelectorAll(".num");

for (let num of nums) {
  num.addEventListener("click", function (e) {
    // this 사용
    // this.style.color = "coral";
    // console.log(this);

    // e 객체 사용
    e.target.style.color = "coral";
  });
}

// mouseover() 요소에 마우스를 올렸을 때
//  > 기본버젼
// $(".number").mouseover(function () {
//   $(this).css("background-color", "skyblue");
//   $(this).append("<div>handler for basic</div>");
// });

//  > .on
$(".number").on("mouseover", function () {
  $(this).css('background-color", "lightgray');
  $(this).append("<div>handler for .on(</div>");
});

// hover()
// mouseover + mouseout
// .on 메소드 X
//  > 'hover' DOM 이벤트가 아님
$(".div-hover").hover(function () {
  $(this).toggleClass("hover");
});

// scroll()
// 윈도우 창 스크롤할 때
//  > 기본버젼
$(window).scroll(function () {
  console.log("scrolling!");
});

//  > .on
$(window).on("scroll", function () {
  console.log("scrolling!");
});

// 3. Key Event
$("input-key").on("keydown", function (e) {
  console.log(e);
  console.log(e.code);
  console.log(e.key);

  if (e.code === "ArrowUp") {
    console.log("위");
  } else if (e.code === "ArrowDown") {
    console.log("아래");
  } else {
    console.log("나머지 키");
  }
});

// 4. Form Event
$(".todo-form").on("submit", function (e) {
  e.preventDefault();

  const todo = $("[name= 'todo']").val();
  $(".todo").append(`<li>${todo}</li>`);
  $("[name= 'todo']").val("");
});

// e.preventDefault(); 또 다른 예제
$("a#inactive").on("click", function (e) {
  e.preventDefault();
  // a 태그의 기본 동작을 막음
  //  > href에 연결되어 있는 링크로의 이동
  $("#text").append("이 링크는 동작하지 않음!");
});

// this
// 실행된 함수가 속해 있던 객체를 참조
// '뭔가'를 클릭할 때 불러오는 함수(=콜백함수)에서 this는 그 '뭔가'를 의미

const buttons = document.querySelectorAll(".button");
const spans = document.querySelectorAll(".span");
console.log(buttons);

function setBgColor() {
  this.style.backgroudnColor = "royalblue";
}

function setBgColor2(elem, color) {
  elem.style.backgroudnColor = color;
}

for (let button of buttons) {
  // 1. 익명함수로 이벤트 핸들러 정의(this 사용)
  button.addEventListener("click", function () {
    console.log(this);
    this.style.backgroudnColor = "royalblue";
  });
  // 2. 함수 참조를 통한 이벤트 핸들러 정의
  //    > setBgColor 함수가 호출될 때, 이벤트가 발생한 DOM요소가 'this'
  button.addEventListener("click", setBgColor);
  // 3. 익명함수에서 또 다른 함수 호출
  button.addEventListener("click", function () {
    setBgColor2(this, "purple");
  });
}

for (let span of spans) {
  span.addEventListener("click", function () {
    this.style.backgroudnColor = "lightblue";
  });
  span.addEventListener("click", setBgColor);
  span.addEventListener("click", function () {
    setBgColor2(this, "purple");
  });
}
