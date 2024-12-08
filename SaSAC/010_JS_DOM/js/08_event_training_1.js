// 1 랜덤 색상 생성기 문제
//    1. 버튼을 클릭했을 때 배경색 변경
//    2. 버튼을 클릭했을 h2 태그 안에 있는 색상값 변경

const container = document.querySelector(".container");
const h2 = document.querySelector("h2");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const nums = [];
  for (let i = 0; i < 3; i++) {
    nums[i] = Math.round(Math.random() * 255);
  }
  h2.textContent = `RGB ${nums[0]}, ${nums[1]}, ${nums[2]}`;
  container.style.backgroundColor = `rgb(${nums[0]}, ${nums[1]}, ${nums[2]})`;
});
