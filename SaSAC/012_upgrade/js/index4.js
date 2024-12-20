// Q1
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

// Q2
const evenNumbers = [2, 4, 6];
const oddNumbers = [1, 3, 5];

const spread = [...evenNumbers, ...oddNumbers];
const [first = spread[0], second = spread[1], ...remaining] = spread;
console.log(spread);
console.log(remaining);
console.log(first);
console.log(second);

// Q3
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    const area = this.width * this.height;
    return `사각형의 가로값은 ${this.width}, 세로값은 ${this.height}, 넓이값은 ${area}입니다.`;
  }
}

let rectangle = new Shape(3, 4);
console.log(rectangle.getArea());

// Q4
// class Rectangle extends Shape {
//   constructor(width, height) {
//     super(width, height);
//   }
//   getDiagonalLength() {
//     const diagonal = ;
//     return `직사각형의 대각선 길이값은 ${}`
//   }
// }

class Triangle extends Shape {
  constructor(width, height, ) {
    super(width, height);
  }
  
  getTriangleArea() {
    return `삼각형의 넓이값은 ${this.getArea() / 2}입니다.`;
  }
}

let rectangle = new Shape(3, 4);
console.log(rectangle.getArea());
      
      
