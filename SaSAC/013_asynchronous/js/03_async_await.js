// 비동기처리
// 3) async/await

async function f1() {
  return 1;
}

async function f2() {
  return Promise.resolve(1);
}

console.log("f1() >>", f1());
console.log("f2() >>", f2());

const f3 = async () => {
  return 3;
};

f1().then(function (result) {
  console.log("f1() >>", result);
});

f2().then(function (result) {
  console.log("f2() >>", result);
});

function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["🍉", "🍋", "🍏"];
      // resolve(fruits);
      reject(new Error("알 수 없는 에러 발생!"));
    }, 1000);
  });
}

// 1) promise then()
// fetchFruits()
//   .then(function (f) {
//     console.log(f);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

// 2) async / await
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (err) {
    console.log(err);
  }
}

printItems();

let product;
let price;

function goMart() {
  console.log("마트엑 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!");
      product = "사이다";
      price = 4000;
      if (price <= 3000) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

function paid(product, price) {
  console.log(`상품명 : ${product}, 가격 : ${price}`);
}

function didntPay() {
  console.log(`금액이 부족합니다.`);
}

// goMart();
// pickDrink().then(paid).catch(didntPay);

async function exec() {
  try {
    goMart();
    await pickDrink();
    paid();
  } catch (error) {
    didntPay();
  }
}

exec();

// 함수의 실행순서가 명확히 보임
// 시간이 걸리는