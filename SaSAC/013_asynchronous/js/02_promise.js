// #3 비동기처리 방법 
// 2) Promise 객체
//     > 콜백지옥 단점 보완(2015)
//     > 미래의 성공, 실패 결과값을 약속 > 성공, 실패 분리해서 반환
//     > 성공이든 실패든 무언가의 '최종 결과'가 항상 존재
//

// 1. Promise 생성 코드(제작 코드)
// - Producing code
function promise1(flag) {
// promise 객체를 반환 > new 연산자 이용, promise 객체를 만들고 바로 반환
// return new Promise((resolve, reject) => {});
return new Promise(function (resolve, reject) {
if (flag) {
  resolve(`프로미스 이행(fulfilled) 상태! === 성공! ${flag}`);
} else {
  reject(`프로미스 거절(rejected) 상태! === 실패! ${flag}`);
}
});
}

// 2. Promise 소비 코드
// - Consuming code
promise1(5 > 3)
.then(function (result) {
console.log(result);
})
.catch(function (error) {
console.log(error);
});
// 화살표 함수 표현
promise1(5 > 3)
.then((result) => console.log(result))
.catch((error) => console.log(error));

// promise 객체로 수정
// let product;
// let price;

// function goMart() {
//   console.log("마트엑 가서 어떤 음료를 살지 고민한다.");
// }

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("고민 끝!");
//       product = "사이다";
//       price = 4000;
//       if (price <= 3000) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// }

// function paid(product, price) {
//   console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

// function didntPay() {
//   console.log(`금액이 부족합니다.`);
// }

// goMart();
// pickDrink().then(paid).catch(didntPay);

// # Promise Chaining
// 1) 콜백함수
// function add(n1, n2, callback) {
//   setTimeout(function () {
//     const result = n1 + n2;
//     callback(result);
//   }, 1000);
// }

// function mul(n, callback) {
//   setTimeout(function () {
//     const result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(function () {
//     const result = n - 1;
//     callback(result);
//   });
// }

// add(4, 3, function (x) {
//   console.log(x);

//   mul(x, function (y) {
//     console.log(y);

//     sub(y, function (z) {
//       console.log(z);
//     });
//   });
// });

// 2) Promise Chaining
function add(n1, n2) {
return new Promise(function (resolve, reject) {
setTimeout(function () {
  const result = n1 + n2;
  resolve(result);
}, 1000);
});
}

function mul(n) {
return new Promise(function (resolve, reject) {
setTimeout(function () {
  const result = n * 2;
  resolve(result);
}, 1000);
});
}

function sub(n) {
return new Promise(function (resolve, reject) {
setTimeout(function () {
  const result = n - 1;
  resolve(result);
}, 1000);
});
}

add(4, 3)
.then(function (result) {
console.log(result);
return mul(result);
})
.then(function (result) {
console.log(result);
return sub(result);
})
.then(function (result) {
console.log(result);
})
.catch(function (error) {
console.log(error);
});
