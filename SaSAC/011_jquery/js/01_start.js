/*
버젼 종류
  - Uncompressed 원본파일
  - Minified 원본 압축 파일
  - Slim 해당 버전이 필요없다고 생각하는 라이브러리 제거
  - Slim minified 
    Slim

  * 구문
    $(CSS 선택자).동작함수()
    - $() 
      HTML 요소 선택
    - 동작함수()
      선택된 요소에 원하는 동작
*/

console.log($("#div1"));
// ce {0: div#div1, length: 1}
// ce : 객체가 내부적으로 사용하는 이름
// jquery 객체를 생성, 초기화하는 함수

// 1. 순수 JS
function submitJS() {
  const div1 = document.getElementById("div1");
  div1.innerText = "반값습니다";
  div1.setAttribute = ("style", "border: 2px solid coral;");
}

// 2. J query
function submitJquery() {
  const div1 = $("#div1");
  div1.text("안녕히 가세요.");
  // div1.css("border", "2px solid coral");
  div1.attr("style", "border: 2px solid navy;");
}

const colorsJs = document.querySelectorAll(".color");
const colorsJquery = $(".color");

console.log(colorsJs);
console.log(colorsJquery);

// Q) js li 요소 클릭시 글씨 색상 빨간색 변경
// 1. 순수 JS
// colorsJs.addEventListener = ("click", () => {
//   this.style.color = "red";
// });

/*
에러 발생
  > 유사 배열(객체)에 이벤트 리스너를 추가하려고 했기 때문
  >> 배열 자체가 이벤트 리스너 사용 불가
  >>> 배열의 각 요소에 대해 이벤트 리스너를 추가해야 함
  >>>> 반복 필요
*/

colorsJs.forEach((item) => {
  item.addEventListener("click", function () {
    this.style.color = "red";
  });
});

// Q) js li 요소 클릭시 배경 색상 하늘색 변경
// 2. J query
/*
      .on() 매서드
        - 
*/

colorsJquery.on("click", function () {
  console.log('this >>>> ', $(this));
  $(this).css("background-color", "skyblue");
});
