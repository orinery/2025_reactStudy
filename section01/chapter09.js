// 1. if 조건문 (if 문)
let num = 9;

if (num >= 10) {
  // console.log("num은 10 이상입니다.");
} else if (num >= 5) {
  // console.log("num은 5 이상입니다.");
} else {
  // console.log("num은 5 미만입니다.");
}

// 2. switch 조건문 (switch 문)
//-> if 문과 기능 자체는 동일
//-> 다수의 조건을 처리할 때 if보다 더 직관적이다.
let animal = "bear";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bird": {
    console.log("새");
    break;
  }
  default: {
    console.log("그런 동물은은 모르겠어요.");
  }
}
