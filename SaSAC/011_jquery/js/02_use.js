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

//
//
//
