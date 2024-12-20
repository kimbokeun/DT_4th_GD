const car = `{
  "model" : "IONIQ 5",
  "company" : "HYUNDAI",
  "year" : "2023",
  "options" : ["side mirror", "smart sensor", "built-in cam"]
}`;
console.log(car);

const obj = JSON.parse(car);
console.log(obj);

console.log(obj.model);
console.log(obj.options);
console.log(obj.hello);

// 직렬화
const json = JSON.stringify(obj);
console.log(json, typeof json);

console.log(json.model);
console.log(json.price);

console.log(json.split(""));
console.log(json.toUpperCase());
