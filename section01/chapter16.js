// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "사몽",
  color: "black",
};

animal.age = 2; //추가
animal.name = "비몽"; //수정
delete animal.color; //삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티
const person = {
  name: "오리너리",
  //메서드
  sayHello: () => {
    console.log("안녕하세요");
  },
};

person.sayHello();
person["sayHello"]();
