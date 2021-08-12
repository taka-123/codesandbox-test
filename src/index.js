/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// const func2 = (str) => str;

// console.log(func1("func１です"));
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// ①オブジェクト
// const myProfile = {
//   name: "たか",
//   age: 18
// };

// const message1 = `1-1. 私の名前は、${myProfile.name}です。年齢は、${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `1-2. 私の名前は、${name}です。年齢は、${age}歳です。`;
// console.log(message2);

// // ②配列
// const myFavorite = ["算数", "テニス", "資料作成"];

// const message3 = `2-1. ${myFavorite[0]}と、${myFavorite[1]}と、${myFavorite[2]}が好きです。`;
// console.log(message3);

// const [subjects, sports, others] = myFavorite;
// const message4 = `2-2. ${subjects}と、${sports}と、${others}が好きです。`;
// console.log(message4);

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1, num2, arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "橋爪"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "橋爪") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
