// #1 setTimeout(code, delay)
//    - delay(단위 : ms)시간 동안 기다리다가 code 함수 실행
// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// console.log(3);

// JS에서는 setTimeout 함수를 사용
//  > 기다리지 않고 바로 다음 구문 실행

// #2 비동기 처리
// let product;
// let price;

// function goMart() {
//   console.log("마트엑 가서 어떤 음료를 살지 고민한다.");
// }

// function pickDrink() {
//   // 3초를 기다린 후에 코드 실행
//   setTimeout(function () {
//     console.log("고민 끝!");
//     product = "사이다";
//     price = 3000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

// goMart();
// pickDrink();
// pay(product, price);

/*
  * undefined가 뜨는 이유(컴퓨터 시선으로..)
    1. product, price 전역 변수 확인
    2. goMart(), pinkDrink(), pay() 함수 정의부 확인
    3. goMart() 함수 실행 : 로그 찍음
    4. pinkDrink() 함수 실행
    4-1. 
*/

/*
  #3 비동기처리 방법 
    1) 콜백함수
*/

// let product;
// let price;

// function goMart() {
//   console.log("마트엑 가서 어떤 음료를 살지 고민한다.");
// }

// function pickDrink(callback) {
//   //
//   setTimeout(function () {
//     console.log("고민 끝!");
//     product = "사이다";
//     price = 3000;
//     callback(product, price);
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

// goMart();
// pickDrink(pay);

//  #4 콜백 지옥
//    setTimeout 안에 또 다른 setTimeout 중첩
//      > 코드가 점점 오른쪽으로 밀림
// setTimeout(() => {
//   let leaderList = "";
//   let name = "Damon";
//   if (!name) {
//     console.log("리더 이름을 찾을 수 없습니다.");
//   } else {
//     leaderList += name;
//     console.log(leaderList);
//   }
//   setTimeout(() => {
//     let leaderList = "";
//     let name = "Ari";
//     if (!name) {
//       console.log("리더 이름을 찾을 수 없습니다.");
//     } else {
//       leaderList += name;
//       console.log(leaderList);
//     }
//     setTimeout(() => {
//       let leaderList = "";
//       let name = "Laylar";
//       if (!name) {
//         console.log("리더 이름을 찾을 수 없습니다.");
//       } else {
//         leaderList += name;
//         console.log(leaderList);
//       }
//     }, 1000);
//   }, 1000);
// }, 1000);
