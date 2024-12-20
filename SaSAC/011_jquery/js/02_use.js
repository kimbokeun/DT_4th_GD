////////////////////////////////////////////////////////////////////////
// val() - value
function getValue() {
  // JS
  // const inputVal = document.querySelector("input").value;
  // alert(inputVal);

  // J query
  const value = $("input").val();
  alert(value);
}

function setValue() {
  // JS
  // document.querySelector("input").value = "하이!";

  // J query
  $("input").val("하이하이!");
}

////////////////////////////////////////////////////////////////////////
// css()
function changeCssJs() {
  const span = document.querySelector("span");
  span.style.fontSize = "20px";
  span.style.color = "red";
  // 인라인 방식 > 카멜케이스
}

function changeCssJquery() {
  // Case 1
  // $("span").css("font-size", "20px");
  // $("span").css("color", "blue");
  // CSS 스타일

  // Case 2 여러 속성 한번에 적용
  $("span").css({
    fontSize: "40px", // 모든 span에 적용
    color: "navy", // 모든 span에 적용
  });
}

function getCssJquery() {
  // JS
  //  - style 객체는 인라인 스타일에 설정된 값만 가져옴
  // console.log(document.querySelector("span").style.color);

  // J query
  //  - 브라우저에게 계산된 스타일 값 반환
  //  - 인라인 스타일 + 모든 적용된 스타일 정보를 가져옴
  //  - 반환 값은 대부분 RGB 형식
  console.log($("span").css("color"));
}

////////////////////////////////////////////////////////////////////////
// attr()
function changeAttrJS() {
  const link = document.querySelector("a");
  // link.setAttribute("href", "https://www.naver.com");
  link.href = "https://www.naver.com";
}

function changeAttrJquery() {
  $("a").attr("href", "https://www.naver.com");
}

// text()
function changeTextJS() {
  const p = document.querySelector(".p-text");
  p.textContent = "Hunger is the best source!";
}

function changeTextJquery() {
  $(".p-text").text("A rose is a flower.");
}

// html()
function changeHtmlJS() {
  const p = document.querySelector(".p-html");
  p.innerHTML = "<h3>JavaScript</h3>";
}

function changeHtmlJquery() {
  $(".p-html").html("<h3>JavaScript</h3>");
}

////////////////////////////////////////////////////////////////////////
// # 요소 추가하기
// append()
function appendJS() {
  const colors = document.querySelector(".colors");
  const li = document.createElement("li");
  li.textContent = "JS >>>> red";
  colors.append(li);
}

function appendJquery() {
  // $li = $('<li>Jquery >>>> red</li>')
  $li = $("<li></li>").text("Jquery >>>> red");
  $(".colors").append($li);
}

// prepend()
function prependJS() {
  const colors2 = document.querySelector(".colors");
  const li = document.createElement("li");
  li.textContent = "JS >>>> red";
  colors2.prepend(li);
}

function prependJquery() {
  //$li = $('<li>Jquery >>>> red</li>')
  $li = $("<li></li>").text("Jquery >>>> red");
  $(".colors").prepend($li);
}

const colors = document.querySelector(".colors");

// before()
function beforeJS() {
  const green = document.querySelector(".green");
  const li = document.createElement("li");
  li.textContent = "JS > 이전 형제 요소 추가";
  // li.style.color = "blue";
  li.setAttribute("style", "color: blue;");
  green.before(li);
}

function beforeJquery() {
  $li = $("<li></li>").text("Jquery > 이전 형제 요소 추가");
  $(".green").before($li);
}
//

// after()
function afterJS() {
  const green = document.querySelector(".green");
  const li = document.createElement("li");
  li.textContent = "JS > 이후 형제 요소 추가";
  // li.style.color = "blue";
  li.setAttribute("style", "color: blue;");
  green.after(li);
}

function afterJquery() {
  $li = $("<li></li>")
    .text("Jquery > 이후 형제 요소 추가")
    .css("color", "green");
  $(".green").after($li);
}

////////////////////////////////////////////////////////////////////////
// # 요소 삭제하기
// remove()
function removeJS() {
  const li2 = document.querySelector("#li2");
  li2.remove();
}

function removeJquery() {
  $("#li2").remove();
}

// empty()
//  > JS에서는 empty() 없음!!
//    > 1. ul 태그이자 nums 클래스를 갖는 요소를 선택
//    > 2. 해당 요소의 html을 빈 문자열로 설정

function emptyJS() {
  const nums = document.querySelector("ul.nums");
  nums.innerHTML = "";
}

function emptyJquery() {
  $("ul.nums").empty();
}

////////////////////////////////////////////////////////////////////////
// # 요소 탐색
function findParent() {
  console.log(document.querySelector(".child2").parentNode);
  // 모든 부모 노드 가능
  console.log(document.querySelector(".child2").parentElement);
  // 부모"요소"인 것만 가능
  console.log(document.querySelector("html").parentNode);
  // 부모가 document면 #document 출력
  console.log(document.querySelector("html").parentElement);
  // 부모가 document면 null 값 출력

  // Jquery
  console.log($(".child").parent());
}

function findParents() {
  // JS > X

  // Jquery
  console.log($(".child").parents());
}

function findNext() {
  // JS
  console.log(document.querySelector(".child2").nextElementSibling);
  // Jquery
  console.log($(".child").next());
}

function findPrev() {
  // JS
  console.log(document.querySelector(".child2").previousElementSibling);
  // Jquery
  console.log($(".child").prev());
}

function findChildren() {
  // JS
  console.log(document.querySelector(".parents").children);
  // Jquery
  console.log($(".parent").children());
}

////////////////////////////////////////////////////////////////////////
// # 클래스 조작
function addClass() {
  // JS
  // const id = document.querySelector("#hi");
  // id.classList.add("fs-50");
  document.querySelector("#hi").classList.add("fs-50");

  // Jquery
  // $("#hi").addClass("fs-50");
}

function removeClass() {
  // JS
  // const id = document.querySelector("#hi");
  // id.classList.add("fs-50");
  // document.querySelector("#hi").classList.remove("fs-50");

  // Jquery
  $("#hi").removeClass("fs-50");
}

function hasClass() {
  // JS
  console.log(document.querySelector("#hi").classList.contains("fs-50"));
  // Jquery
  console.log($("#hi").hasClass("fs-50"));
}
function toggleClass() {
  // JS
  document.querySelector("#hi").classList.toggle("bg-pink");
  // Jquery
  // $("#hi").toggleClass("bg-pink");
}
