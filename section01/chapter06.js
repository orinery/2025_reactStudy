//1. 묵시적 형 변환
//-> 자바스크립트 엔진이 자동으로 형 변환을 해주는 것

let num = 10;
let str = "20";
const result = num + str; //1020

//2. 명시적 형 변환
//-> 개발자가 내장함수 등을 이용해서 직접 형 변환을 해주는 것
//-> 문자열 -> 숫자
let str1 = "10";
let strToNum = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
//paseInt를 쓰더라도 문자보단 숫자가 앞에 있도록 해주는 것이 좋다.

//-> 숫자 -> 문자열
let num1 = 20;
let numToStr = String(num1);

console.log(numToStr + " 입니다.");
