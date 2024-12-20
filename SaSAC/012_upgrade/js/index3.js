// 클래스
//  - ES6에 도입, 클래스 기반 언어처럼 사용
// 클래스 기본 문법
// 1. class 클래스를 정의할 때 사용하는 키워드

class Palace {
  // 2. constructor 클래스의 생성
  //  - 객체를 생성할 때 자동으로 호출되며 초기화 작업을 수행
  constructor(year, name, door) {
    // 3. this
    //  - 클래스 내부에서 현재 인스턴스를 참조하는 객체
    //    > 현재 인스턴스(this)에 속성(name)을 추가, 그 값을 매개변수 name으로 설정

    //    >> 초기화??
    //    >>> 가독성을 위해 같은 이름을 사용
    this.year = year;
    this.name = name;
    this.door = door;
  }

  // 4. method
  //  - 클래스 내부에서 현재 정의된 함수
  //    > 해당 클래스의 인스턴스에서 호출 가능
  getAge() {
    console.log(`${this.name}는 건축한 지 ${2024 - this.year}년이 되었어요.`);
  }

  getDoor() {
    console.log(`${this.name}의 문은 ${this.door}개에요.`);
  }
}

// 5. instance
//  - 클래스로부터 생성된 실제 객체
//    > new 키워드 사용해 생성
//  * 클래스 > 설계도 | 인스턴스 > 설계도로 만들어진 '실제 집'
//    > 각각 독립적인 객체(각자 자신만의 this를 가짐)

const palace1 = new Palace(1395, "경복궁", 4);
// 클래스를 이용해서 인스턴스를 생성시 constructor에 선언된 매개변수대로 값을 지정
console.log(palace1);
palace1.getAge();

const palace2 = new Palace(1904, "덕수궁", 3);

// # 클래스의 상속
//  - 상속을 통해 다른 클래스의 기능을 재사용 가능
//  - 'extends' 키워드를 사용, 상속 구현

class Temple extends Palace {
  constructor(year, name, door, space) {
    // 6. super() : 부모 클래스의 생성자를 호출할 때 사용
    super(year, name, door);
    this.space = space;
  }

  getInfo() {
    return `${this.year}`;
  }
}

// 7. Override(오버라이드) 부모의 메소드와 같은 함수를 재정의할 때
//    - 상위 클래스에서 정의된 메서드를 하위 클래스에서 '새롭게 재정의'하거나 '변경'
//    - 주로, 상위 클래스에서 제공한 기본 동장을 '자식 클래스의 특성에 맞게 수정'
//    * 메서드 이름, 매개변수 리스트가 부모 클래스와 동일 필요







// Q
const userInfo = {
  name: "Kim Yeonkoung",
  job: "Volleyball player",
  work: "HKSM",
  nationality: "South Korea",
};
console.log(userInfo);

const { name, job, ...restInfo } = userInfo;
console.log(name);
console.log(job);
console.log(restInfo);

