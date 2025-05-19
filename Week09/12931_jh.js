// A에서 B로 가려고 하니까 어렵게 느껴졌음
// B에서 A로 거꾸로 가는게 구현하기 쉬움
// 원소가 홀수면 -1, 짝수면 /2
function solution(N, arr) {
  let count = 0;

  // 배열의 모든 원소가 0이 될 때까지 반복
  while (true) {
    // 배열에 홀수가 있는지 확인하는 변수
    let hasOdd = false;
    // 홀수가 있다면 1 감소시키고 연산 횟수 1 증가
    for (let i = 0; i < N; i++) {
      if (arr[i] % 2 !== 0) {
        arr[i]--;
        count++;
        hasOdd = true;
      }
    }
    // 배열의 모든 원소가 0이면 반복 종료
    if (arr.every((num) => num === 0)) break;

    // 배열에 홀수가 없다면 모든 원소를 2로 나누고 횟수 1 증가
    if (!hasOdd) {
      for (let i = 0; i < N; i++) {
        arr[i] = Math.floor(arr[i] / 2);
      }
      count++;
    }
  }

  console.log(count);
}
