
// 1 ~ 100까지의 배열
const arrNums = [];

// 배열의 합
// 1. for 문(+ 배열)
let sum1 = 0;
for (let i = 0; i < 100; i++) {
  arrNums[i] = i + 1;
  sum1 += arrNums[i];
};
console.log(sum1);
console.log(arrNums);

// 2. for ~ of 문
let sum2 = 0;
for (let num of arrNums) { 
  sum2 += num;
};
console.log(sum2);


// 3. forEach 문
let sum3 = 0;
arrNums.forEach (function (num, i, arr) {
  sum3 += arr[i];
});
console.log(sum3);


// 내장 메소드
let fruits1 =['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 =['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

let same = [];
let diff = [];
