// 요소 가져오기
const div1 = document.getElementById("div1");
console.log(div1);

/*
  1. 태그 내부 내용 변경
    - innerHTML
      태그 사용가능
    - innerText, textContent
      태그가 문자(기호)로 그대로 노출
*/

console.log("innerText >>>> ", div1.innerText);
console.log("textContent >>>> ", div1.textContent);

// 1) innerHTML
div1.innerHTML = "여기는 <b>첫번째</b> 태그";
console.log("innerHTML >>>> ", div1);
// 2) innerText, textContent
//    - 공통점
//      둘 모두 텍스트 추가
//    - 차이점
//      innerText
//        > HTML 태그를 해석하지 x, 보여지는 텍스트만 그대로
//      innerContent
//        > HTML 태그를 포함하여 처리

div1.innerText = "여기는 <b>두번째</b> 태그";
console.log("innerText >>>> ", div1);

div1.textContent = "여기는 <b>세번째</b> 태그";
console.log("textContent >>>> ", div1);

/*
  2. 속성(attribute) 변경
    setAttribute(속성명, 변경할 속성 값) > 속성 값을 '변경'
*/
const google = document.getElementById("google");
google.setAttribute("href", "https://naver.com");

const image = document.getElementById("image");
google.setAttribute(
  "src",
  "https://media.istockphoto.com/id/2150276038/photo/experienced-male-and-female-engineers-standing-on-a-platform-with-their-back-to-camera-using.webp?a=1&b=1&s=612x612&w=0&k=20&c=GmkUthVMYUVMWjdf7JU04u8rNLxuaIfKaPlYxzH4Ngw=",
);

// getAttributeA(속성명) > 속성 값 '얻기'
console.log(document.getElementById("image").getAttribute("src"));

// 참고 1. 속성 접근(.) 연산자로도 가능
console.log(document.getElementById("image").id);

// 참고 2. 연산자로 속성에 접근, 할당 연산자로 속성값 변경 가능
document.getElementById("google").href = "#";
console.log(document.getElementById("google").href);

//3. CSS 지정
const h1 = document.querySelector("h1");
const list = document.querySelectorAll("ul > li"); // 유사 배열 (NodeList)
console.log(list);

// 1) style 속성
//    - DOM 요소의 인라인 스타일을 지정
//    - style.XXX (XXX : camelCase)
list[0].style.backgroundColor = "purple";
list[0].style.fontSize = "24px";
list[0].style.color = "white";

// 반복문 사용(list 배열에 포함된 모든 요소)
for (let li of list) {
  li.style.backgroundColor = "purple";
  li.style.fontSize = "24px";
  li.style.color = "white";
}

// 2) classList 활용
//    - xxx.classList.add
//    - xxx.classList.remove
//    - xxx.classList.contains
//      > 있는지 없는지 확인 (true / false)
//    - xxx.classList.toggle
//      > 있으면 제거 / 없으면 추가

// h1.classList.add('add-h1');
// h1.classList.remove('add-h1');
console.log(h1.classList.contains("add-h1"));
h1.classList.toggle("add-h1");

// 4. 요소 찾기 (다른 노드에 접근)
//    - 계층구조 (형제, 자식, 부모, 조상, 자손)

const friends = document.querySelector("#friends");
const hoon = document.querySelector("#hoon");

// 1) 자식 요소 (자손)
console.log(friends.children); // 유사 배열, 자식 모두 선택
console.log(friends.children[0]); // 인덱스 접근

// 2) 부모 요소
console.log(hoon.parentNode);
console.log(hoon.parentNode.parentNode); // 조상

// 3) 부모 요소
console.log(hoon.previousElementSibling);
console.log(hoon.nextElementSibling);
console.log(hoon.nextElementSibling.nextElementSibling); // 메소드 체이닝 // 형제

// 5. 새로운 요소 생성
const container = document.querySelector(".container");
const p = document.createElement("p"); // <p></p>요소생성

console.log(p); // JS로 만듦

p.innerText = "새로 추가된 p 요소입니다.";
p.style.fontWeight = "bold";
p.style.backgroundColor = "pink";
// <p style=" ~ "></p>

console.log(p); // JS로 만듦

// 6. 새로운 요소 추가
//    - x.append(y)
//      > x 요소의 맨 마지막 자식으로 y 요소 추가 / 쉼표로 여러개 가능
//    - x.appendChild(y)
//      > x 요소의 맨 마지막 자식으로 y 요소 추가
//    - x.prepend(y)
//      > x 요소의 맨 처음 자식으로 y 요소 추가

div1.appendChild(p);

const p2 = document.createElement("p");
const p3 = document.createElement("p");

p2.innerText = "새로 추가된 p2 요소입니다.";
p3.innerText = "새로 추가된 p3 요소입니다.";

p2.classList.add("p-2");
p3.classList.add("p-3");

container.append(p2, p3);

const whittie = document.createElement("li");
whittie.textContent = "흰둥이";
friends.prepend(whittie);

// const title = document.createElement("li");
// title.innerHTML = "<b>짱구의 친구들을 소개합니다.</b>";
// friends.prepend(title);

hoon.before(whittie);
hoon.after(whittie);

// 7. 요소 삭제
//    - x.remove()
//      > x 요소 자체를 삭제
//    - x.removeChild(y)
//      > x의 자식 요소인 y 삭제

const firstLi = document.querySelector("li");
console.log(firstLi);

const ul = firstLi.parentNode;
console.log("ul >>>>", ul);

// ul.remove();
firstLi.remove();
div1.appendChild(firstLi);
// JS 특성상 메모리를 바로 삭제하지 않음
// 참조를 유지하면 재사용 가능

// ul.removeChild(firstLi);
// div1.appendChild(firstLi);
