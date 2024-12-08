/*
  JS Event
    - 어떤 사건
      예) 버튼 클릭 / 웹페이지 로드 / 키 누름

    * 등록 방법
      1. 'HTML'에서 onXXX 속성
      2. JS에서 listener 사용
*/
// 1.
function clickH1() {
  alert("제목 클릭! 함수 이용");
}

/*
   2. addEventListener
      기본구조
        - element.addEventListener(event, function)
      event
        - 처리할 이벤트의 이름
          예) click / keyup
      function
        - 이벤트 발생시 실행할 함수
      
      >> 여러개의 이벤트 리스너 등록 가능
*/

const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");
const container = document.getElementById("container");

// 1개 요소에 여러개의 이벤트 리스너 등록
btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭하셨습니다!");
});

btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "aqua";
});

btn1.addEventListener("mouseout", function () {
  btn1.style.backgroundColor = "black";
});

btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "pink";
  div.innerHTML = "Hi!";
  container.append(div);
});

btn3.addEventListener("click", changeColor);

function changeColor() {
  const divs = document.querySelectorAll("#container div");
  console.log(divs);
  // 해당 요소 전부에 css 변화를 적용
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }
}

// this 사용법
//  - 이벤트가 발생한 DOM 요소를 가르킴
//  - 화살표 함수에서는 동작 방식이 다름
//    > 


btn4.addEventListener("click", changeBtnColor);
function changeBtnColor() {
  console.log(this); // 자기 자신 >> btn4
  console.log(this.parentNode); // this를 이용해 상위 요소 접근
  this.style.backgroundColor = "yellow";
}

/*
  * key event
    이벤트 객체 (e)
    - DOM 이벤트가 발생할 때 브라우저가 자동으로 생성하는 객체
    - 브라우저는 발생한 이벤트에 대해 다양한 정보를 담은 '이벤트 객체(event object)'를 이벤트 리스너에 전달
      예) mousedown 이벤트 발생 > 이벤트 객체는(마우스 좌표, 버튼 번호) 정보를 가짐
          keydown 이벤트 발생 > 이벤트 객체는(키 코드값, 어떤 키를 눌렀는지) 정보를 가짐

*/

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function (event) {
  console.log(event);
});

input.addEventListener("keydown", function (e) {
  console.log(e);
  console.log(e.code); // 눌려진 키의 고유코드
  console.log(e.key); // input에 입력된 값
  console.log(e.target); // 이벤트가 발생한 대상 요소를 참조

  if (e.code === "ArrowUp") {
    console.log("⬆");
  } else if (e.code === "ArrowDown") {
    console.log("⬇");
  } else {
    console.log("others");
  }
});

// 폼 이벤트
const todoForm = document.getElementById("todo-form");
const todos = document.querySelector(".todos");

todoForm.addEventListener("submit", (e) => {
  console.log("submit");
  // submit
  //  - 폼에 대한 내용 제출
  //  - 제출하는 순간 새로고침이 일어남
  e.preventDefault();
  //  - 폼 submit 이벤트의 새로고침을 막음 > 폼 제출 막음

  const todoInput = document.querySelector('input[name="todo"]');
  console.log(todoInput.value); // 입력된 내용(값)

  const newTodo = todoInput.value.trim(); // 양쪽 공백 제거

  if (newTodo !== "") {
    const newTodoLi = document.createElement("li");
    newTodoLi.append(newTodo); // <li>input 입력 값</li>
    todos.append(newTodoLi);
  }

  // input 창 초기화
  todoInput.value = "";
});

/*
  * change 
    - input 요소에 변경이 일어나고, 다른 요소를 클릭해서 input이 포커스 아웃(blur) 처리되었을 때 일어나는 이벤트
*/

const changeInput = document.querySelector("#change-input");
changeInput.addEventListener("change", function (e) {
  console.log("change!");
  console.log(e.target.value);
});

/*
* input 
- input에 값이 입력될 때마다 이벤트 발생
*/
changeInput.addEventListener("input", function () {
  console.log("입력 발생!");
  // console.log(this.value);
  const div = document.querySelector(".intro");
  div.textContent = this.value;

});
