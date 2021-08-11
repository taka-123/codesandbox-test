/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
const func2 = (str) => str;

console.log(func1("func１です"));
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));
