// 함수 선언

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(100, 2.0);

//호이스팅
// -> 최상단으로 끌어올린다.
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();
  let area = width * height;
  return area; //반환값
}
