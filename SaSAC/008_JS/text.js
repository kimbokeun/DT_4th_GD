// 10000까지의 숫자 중
// 13의 배수 && 홀수
// prompt 이용

const test = () => {
  let inputNumber = Number(prompt("숫자를 입력해주세요."));

  if (inputNumber > 10000) {
    return;
  } else {
    if (inputNumber % 2 === 1 && inputNumber % 13 === 0) {
      console.log("정답");
    };
  };
};

test();
