const N = 7;
const M = 8;
const calculations = [
  [0, 1, 3],
  [1, 1, 7],
  [0, 7, 6],
  [1, 7, 1],
  [0, 3, 7],
  [0, 4, 2],
  [0, 1, 1],
  [1, 1, 1]
];

// N 까지의 집합 배열 생성
const allSet = Array.from({ length: N + 1 }, (_, i) => new Set([i]));
console.log(allSet);
for (let calculation of calculations) {
  const [calc, a, b] = calculation;
  // 합집합인 경우
  if (calc === 0) {
    const setA = allSet[a]; // 기존 값 저장을 위한 변수 할당
    const setB = allSet[b];
    if (setA !== setB) {
      // 같은 집합이 아닐 때만 합집합
      setB.forEach(value => setA.add(value));

      // setB의 모든 원소가 setA를 참조하도록 업데이트
      setB.forEach(value => (allSet[value] = setA));
    }
  } else {
    // 포함 여부 확인
    console.log(allSet[a].has(b) ? 'YES' : 'NO');
  }
}

console.log(allSet);
