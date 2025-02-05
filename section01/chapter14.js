// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 사용 가능한 변수
// -> 지역 스코프 : 특정 영역에서 사용 가능한 변수

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
}

funcA();

if (true) {
  let c = 1;
}

for (let idx = 0; idx < 5; idx++) {
  let d = 1;
}
