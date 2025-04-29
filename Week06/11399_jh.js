// 그리디
// 오름차순 정렬하고 누적 합 구하면 되는 문제
function solution(N, times) {
  // 인출하는데 걸린 시간을 저장하는 배열
  const result = [];
  // 대기 시간을 계산하기 위해 누적 합을 저장하는 변수
  let total = 0;
  // 인출 시간 기준으로 오름차순 정렬 -> 인출 시간이 짧은 사람이 앞에 있어야 뒷쪽 사람들의 대기 시간도 줄어듬
  times.sort((a, b) => a - b);

  times.forEach((time) => {
    // 총 대기 시간 += 인출에 걸린 시간
    total += time;
    // 최종적으로 인출에 걸린 시간을 배열에 추가
    result.push(total);
  });
  // 모든 사람들이 인출하는데 걸린 시간 총합
  console.log(result.reduce((acc, item) => acc + item, 0));
}
