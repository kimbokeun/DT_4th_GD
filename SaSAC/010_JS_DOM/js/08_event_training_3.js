// 3 계산기 만들기

const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const operator = document.getElementById("operator");
const result = document.getElementById("result");

// [계산] 버튼 클릭시 cal() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.
function cal() {
  if (operator.value === "+") {
    result.value = value1.value + value2.value;
  } else if (operator.value === "-") {
    result.value = value1.value - value2.value;
  } else if (operator.value === "/") {
    result.value = value1.value / value2.value;
  } else {
    result.value = value1.value * value2.value;
  }
}

// [초기화] 버튼 클릭시 resetInput() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.
function resetInput() {
  value1.value = "";
  value2.value = "";
  operator.value = "";
  result.value = "";
}
