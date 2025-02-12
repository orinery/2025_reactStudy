//math 모듈

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// -------- common js 모듈 시스템
// module.exports = {
//   add,
//   sub,
// };

// --------------- ES 모듈 시스템
// export { add, sub };
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// defualt를 붙이면 기본값이 된다..
export default function multiply(a, b) {
  return a * b;
}
