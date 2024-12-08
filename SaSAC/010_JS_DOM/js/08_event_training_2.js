// 2 댓글 등록하기
//  1) 등록 버튼을 누르거나 input 창이 focus된 채로 엔터키를 치면 댓글 등록
//  2) 댓글이 등록되면 아이디는 굵은 글씨
//  3) 댓글 등록 후 input 창 초기화

// Selector
const container = document.querySelector(".container");
const inputId = document.querySelector("#id");
const inputReply = document.querySelector("#reply");
const buttonSummit = document.querySelector(".button-summit");

// Create Element
const list = document.createElement("ul");
const listItem = document.createElement("li");
container.append(list);

buttonSummit.addEventListener("click", (e) => {
  list.append(listItem);
  listItem.innerHTML = `<b>${inputId.value}</b> - ${inputId.value}`;
  inputId.value = "";
  inputReply.value = "";
});

