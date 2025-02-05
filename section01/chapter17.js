// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3, true, "hi", {}, []];

// 2. 배열 요소 (값)에 접근
let item1 = arrC[0];
let item2 = arrC[3];

arrC[0] = "hello";

console.log(arrC);
