// 단순하게 풀어보려고 했는데 틀렸음
// 반례: 1 17 71 100 200 300 400 500 600 700 900 1000 1100
function solution(N, nums) {
  const result = [];
  let count = 0;

  nums.sort((prev, next) => prev - next);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      if (count > 10) break;

      result.push(Number(`${nums[i]}${nums[j]}`));
      count++;
    }

    if (count > 10) break;
  }

  result.sort((prev, next) => prev - next);
  console.log(result[2]);
}

// 완탐이 맞긴 한데 범위를 좁히면 될 것 같아서 계속 고민해보다가..인터넷에 검색해봄...^^
// 배열을 오름차순으로 정렬하고 앞의 숫자 4개만 떼서 완탐 돌리면 됨
function solution(N, nums) {
  const result = [];

  nums.sort((prev, next) => prev - next);
  // 배열의 길이가 3보다 크면 앞의 원소 4개만 자름
  const slicedNums = N > 3 ? nums.slice(0, 4) : [...nums];
  const slicedNumsLength = slicedNums.length;
  // 가능한 모든 조합을 저장
  for (let i = 0; i < slicedNumsLength; i++) {
    for (let j = 0; j < slicedNumsLength; j++) {
      if (i === j) continue;

      result.push(Number(`${slicedNums[i]}${slicedNums[j]}`));
    }
  }
  // 조합 결과 정렬 후 세번째 숫자를 출력
  result.sort((prev, next) => prev - next);
  console.log(result[2]);
}
