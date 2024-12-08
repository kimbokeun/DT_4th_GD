/*
JS 표준 내장 객체
  - 기본적으로 미리 정의된 객체
  - 모든 JS 환경에서 사용할 수 있는 내장 객체
  - 자주 사용되는 기능들을 미리 구현해 둠

  # 1. Date 객체: 시간, 날짜
    - 날짜 생성, 저장
*/ 
//let now = new Date();
//console.log(now);

// new Date(TimeStamp) 
//let jan_01_1970 = new Date(0);
//console.log(jan_01_1970);

// + 하루(24시간) 더하기
//let jan_02_1970 = new Date(24 * 3600 * 1000);
//console.log(jan_02_1970);

/*
타임스탬프(TimeStamp)
  - 특정 시점의 날짜와 시간을 '숫자로 표현'
  - 보통 '에포크' 이후의 시간을 초 또는 밀리초 단위로 시간을 나타냄
  - 에포크(Epoch)?
    > 특정 시간의 기준점
    > 1970년 1월 1일 09:00:00 UTC를 기준
    1. 역사적 이유
      - UNIX OS에서 타임스탬프를 처음 정의할 때 사용한 날짜
      - 당시 컴퓨터 시스템의 기준 시간으로 설정
    2. 기술적 편의성
      - 시간을 숫자로 표현, 계산하기 수학적으로 편리
*/ 

//new Date(dat_string)
//let date = new Date('2024-12-04');
//console.log(`date >>>> `, date);

//let date2 = new Date('2024', '11', '04'); // MM(0 ~ 11):[1 ~ 12월]
//console.log(`date2 >>>> `, date2);
// 에포크 기준이 아님!

/*
  * 관련 메서드
    - 객체 점 접근법
    getDate():
      - '월'의 몇번째 날 반환
    getDay():
      - '주'의 몇번째 날 반환
    getMonth():
      - 몇번째 달 반환
    getHours():
      - 시간 반환
    getMinutes():
      - 분 반환
    getSeconds():
      - 초 반환
    getMilliseconds():
      - 밀리초 반환
    getTime():
      - 에포크부터 현재까지의 밀리초 반환
*/ 

// console.log(now.getFullYear());
// 2024년도 반환
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getDay()); // 0(일) ~ 6(토)
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getTime());

/*
Math 객체
  - 수학적인 상수와 함수
  - 속성
*/ 
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.SQRT2); // 2의 제곱근 = 루트

// 메서드
// console.log(Math.min(100, -2, 0, 5)); // 최소값 출력
// console.log(Math.max(100, -2, 0, 5)); // 최대값 출력
// console.log(Math.round(5.3124)); // 반올림
// console.log(Math.round(5.8124)); // 반올림
// console.log(Math.ceil(5.124)); // 강제올림
// console.log(Math.floor(5.724)); // 강제내림
// console.log(Math.random()); // 0 <= x < 1 범위의 난수
// 
// Math.random() 응용 예시
// 0 ~ 9
// console.log(Math.floor(Math.random() * 10)); // 0 <= x < 10
// 0 ~ 10
console.log(Math.floor(Math.random() * 11)); // 0 <= x < 11

// 1 ~ 100
//console.log(Math.floor(Math.random() * 100) + 1); // 0 <= x < 101
//console.log(Math.floor(Math.random() * 101)); // 0 <= x < 101

// 20 ~ 22
//console.log(Math.floor(Math.random() * 3) + 20); // 0 <= x < 23

