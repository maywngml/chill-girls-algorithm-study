const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const inputN = input[0];
const inputLine = [];
for (let i = 1; i < input.length; i++) {
  inputLine.push(
    input[i]
      .toString()
      .trim()
      .split(' ')
      .map((v) => Number(v))
  );
}

function solution(n, costs) {
  const dp = Array.from({ length: n }, () => Array(3).fill(0));
  // dp[i][j]: i번째 집을 j번째 색으로 칠했을 때의 최소비용
  // j -> 0: 빨강, 1: 초록, 2: 파랑
  dp[0][0] = costs[0][0];
  dp[0][1] = costs[0][1];
  dp[0][2] = costs[0][2];

  for (let i = 1; i < n; i++) {
    // i번째 집을 빨로 칠했다면 i-1번쨰 집은 초나 파로 칠했어야 함. 초, 파 중 최소비용을 더함
    dp[i][0] += costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] += costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] += costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  return Math.min(...dp[n - 1]);
}

console.log(solution(inputN, inputLine));
