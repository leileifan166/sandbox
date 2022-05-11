/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);
// // var変数は上書き可能
// val1 = "var変数を上書き";　var変数は上書きされます
// console.log(val1);
// var val1 = "var変数を再宣言";　　var変数は再宣言も可能です
// console.log(val1);
// let val2 = "let変数";
// console.log(val2);
// val2 = "let変数を上書き";　　　　　let変数は上書きされます
// console.log(val2);
// let val2 = "let変数を再宣言";　　let変数は上書きは可能ですが、再宣言はできません

// const val3 = "const変数";
// console.log(val3);
// val3 = "const変数を上書き"; error　const変数は上書きできません
// const val3 = "const変数を再宣言"; const変数は再宣言できません
// const val4 = {
//   name:"ito",
//   age:28,
// };
// val4.address = "leilei1669065865@gmail.com";
// console.log(val4);
// // 結論　constで定義したオブジェクトはプロパティの変更や追加は可能
// //      constで定義した配列はぷろぱ
// // val4.name = "jak";
// // console.log(val4);
// // val4.address = "hiroshima.gmail.com";
// // console.log(val4);
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// console.log(val5);
// val5.push("monkey");

/**
 * テンプレート文字列
 */

//  const name = "rairai";
//  const age = 25;
//  console.log("私の名前は" + name + "です" + ",年齢は" + age + "です");
// // 従来の文字連結の書き方です
// const message = `私の名前は${name}です、年齢は${age}です`;
// console.log(message);
// //     用反向的双引号包裹 字符串就那么写在里面就行 变量的写法比较特殊 记住就行
// //  变量写在一对大括号里面 第一个括号前面写上$符号

// // console.log(`わたしは${name}です、よろしくお願いします。`);
// const a = "ddd";
// console.log(a);
// /**
//  * アロー関数
//  * と従来の関数
//  */
// function func1(str) {
//   return str;
// }
// // console.log(func1("func1です"));
// console.log(123);
// console.log(456);

// function func(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("戻り値がありますよ"));
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10,20));

// const myprofile = {
//   name: "rairai",
//   age: 25,
// };

// // const message = `名前は${myprofile.name}です、年齢は${myprofile.age}歳です`;
// // console.log(message);

// // 分割代入　を　学びます
// const {name,age} = myprofile;
// const message2 = `名前は${name}です、年齢は${age}歳です`;
// console.log(message2);

// const myprofile = ["leilei",25];
// const message3 = `名前は${myprofile[0]}です、年齢は${myprofile[1]}です`;
// console.log(message3);
// const [name,age] = myprofile;
// const message4 = `名前は${name}です、ねんれいは${age}です`;
// console.log(message4);
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);
// sayHello("太郎");
// スプレッド構文　　...
// 配列の展開

// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);

// sumFunc(...arr1);
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10,20];
// const arr5 = [30,40];
// const arr6 = [...arr4];
// arr6[0] = 190;
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);
// console.log(arr4);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
const nameArr = ["田中", "山田", "鈴木"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

// console.log(nameArr2);
// nameArr.map((name,index)=>console.log(`${index+1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) =>{
//   if(name === "鈴木"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

// const newNameArr = nameArr.map((name)=>{
//   if(name === "田中"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })

// console.log(newNameArr);

// 三元运算符 三項演算子
// const value = 1 > 0 ? 'true':'false';
// console.log(value);

// const num = "1300円";
// console.log(num.toLocaleString()); // 三桁区切りで表示してくれます
// const number = typeof num === 'number' ? num.toLocaleString():'数値を入力してください';
// console.log(number);

// const checkSum = (num1,num2)=>{
//   return num1 + num2 > 100 ? '100を超えました':'許容範囲内です'
// }
// console.log(checkSum(50,60));
// console.log(checkSum(20,30));

// 論理演算子の本当の意味を知ろう && ||

// const flag1 = true;
// const flag2 = false;
// if(flag1 || flag2){
//   console.log("flag1もしくはflag2はtrueです");
// }
// if(flag1 && flag2){
//   console.log("flag1もflag2もtrueです");
// }
// 左側がfalse なら　右側を返す　　左側がtrueの場合　左側を返す、右側を判断しない
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
// 左がtrueの場合は右を返す　　左がfalseの場合　左を返す　　右を判断しない
