// Quiz 2. 평균 성적 출력하기

// 목표: 학생들의 평균 성적을 출력합니다.

// 다음 요구사항을 만족하는 함수 printAvgScore의 코드를 완성하세요

// 매개변수 students로 객체 형태의 학생 데이터를 제공받습니다.

// 반복문을 활용하여 모든 학생의 개별 성적 평균을 출력합니다.

// "{이름}: {평균}" 형태로 출력합니다.

function printAvgScore(students) {
  for (let name in students) {
    let sum = 0;
    const { scores } = students[name];
    for (let score of scores) {
      sum += score;
    }

    const avg = sum / scores.length;
    console.log(`${name}: ${avg}`);
  }
}

printAvgScore({
  오리너리: { hobby: "독서", scores: [10, 20, 30, 40, 50] },
  홍길동: { hobby: "운동", scores: [90, 80, 30, 70, 50] },
  김보람: { hobby: "유튜브", scores: [100, 100, 20, 20, 50] },
});
