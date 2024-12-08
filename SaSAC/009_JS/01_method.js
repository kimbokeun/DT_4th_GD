/*
  # 내장 매서드
    - 프로그래밍 언어(JS)나 프레임워크에서 기본적으로 제공
    - 즉, 프로그래밍 언어의 기본 도구(자체 제공 기능)
    - 따로 설치, 추가 설정 필요 X

    * 문자열 관련 내장 메서드
      - 문자열 다루는데 유용 기능 제공
*/ 

let str = 'Happy Birthday!';
let str2 = '    Happy Birthday!   ';

console.log('str >>>> ', str);
console.log('str2 >>>> ', str2);

//  1. 문자열 인덱싱
console.log(str[0]);
console.log(str[4]);
console.log(str[0] + str[9]);
console.log(str[0] + str[1] + str[8] + str[11]);
console.log(`${str[0]}${str[1]}${str[8]}${str[11]}`);
// 백틱은 변수 출력 용도만 있는 것은 아님
// 표현식을 평가해서 그 결과 값을 문자열에 삽입할 수 있기 때문에 사용
// str[]처럼 인덱스를 사용한 문자열 접근도 하나의 표현식
// 

//  2. 문자열 길이(length는 속성! 메서드 X)
console.log(str.length);
console.log(str2.length);

//  3. 대/소문자 변환
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//  4. 양끝 공백 제거
console.log(str.trim());
console.log(str.trim().length);

console.log('str >>>>', str);
console.log('str >>>>', str2);

//  5. indexOf() 글자 위치
//    - 위치 : 0부터 시작
//    - 같은 문자열이 있으면 처음에 나오는 위치
console.log(str.indexOf('y'));
console.log(str.indexOf('i'));
console.log(str.indexOf(' '));
console.log(str.indexOf('v'));
console.log(str.indexOf());
// 존재하지 않는 문자(또는 비어두면)를 검색하면 '-1' 반환

//  6. slice() 문자열 자르기
//    - 음수값이 들어간다면 뒤에서부터 순서를 셈
//    - 위치 : 0부터 시작
//    - slice(start, end) : start ~ end - 1까지 자르기
console.log(str.slice(10)); // 인덱스 10번째 문자부터
console.log(str.slice(1, 5)); // 인덱스 1 ~ 5번째 문자부터
console.log(str.slice(-6)); // 뒤에서 6번째부터 끝까지 

//  7. replace() 문자열 바꾸기
console.log(str.replace('p', 'w'));
console.log(str.replace('B', 'W'));
console.log(str.replaceAll('p', 'W'));

//  8. split() 문자열 쪼개기(배열로 변환)
let str3 ='dinner';
console.log(str3.split('e'));
console.log(str3.split('n'));
// 2개 이상 같은 문자열을 기준으로 쪼갤 시, 1개는 사라지고, 남은 문자열 수만큼 빈 문자열('') 생성

//  9. repeat()
console.log(str3.repeat(4));

// * 배열 관련 내장 메서드
let arr = [1, 2, 3, 4, 5]; 
let arrAnimal = ['tiger', 'rabbit', 'racoon', 'zebra', 'lion']; 

arr[5] = 6;
arr[8] = 100; // 인덱스를 건너뛰면 빈 값(empty)이 들어감

// 1. push() 맨 끝에 요소 추가
arr.push(6);
arr.push(10);

// 2. pop() 맨 끝에 요소 제거
arr.pop();

// 3. unshift() 맨 요소 추가
arrAnimal.unshift('cat');

//3. unshift() 맨 요소 제거
arrAnimal.shift('cat');

//4. shift() 맨 요소 제거
arrAnimal.shift('cat');

//5. length() 배열의 길이 반환
console.log(arr.length);

//6. includes() 요소가 있는지 없는지 검사
console.log(arrAnimal.includes('cat'));
console.log(arrAnimal.includes('lion'));

//7. reverse()
console.log(arr.reverse());

//8. join() join 안에 문자열 기준으로 병합
console.log(arrAnimal.join(''));
console.log(arrAnimal.join('-'));

//9. 메서드 체이닝 (method chaining)
//    - 여러 메서드 연결 사용
console.log('hello'.split(''));
console.log('hello'.split('').reverse());
console.log('hello'.split('').reverse().join());

let numbers = [1, 2, 3, 4, 5, 6];
let friuts = ['사과', '바나나', '수박', '포도', '파인애플'];

for (let number of numbers) {
  console.log(number);
};

numbers.forEach(function (number, index, array) {
  console.log(number, index, array);
});
