//DP문제 : 메모이제이션/중복되는 계산이 있을때 유리
//백트래킹 vs DP
//DP: 최적의 값(최소비용) => 작은 문제 결과를 저장하면서 재사용
//백트래킹: 가능한 모든 조합, 경우의 수=> 결과를 끝까지 탐색하고 불필요한건 중간에 포기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const cost = [];
for (let i = 1; i < input.length; i++) {
  cost.push(input[i].split(" ").map(Number));
}

function solution(N, cost) {
  let dp = Array.from(Array(N), () => Array(3).fill(0));
  dp[0][0] = cost[0][0];
  dp[0][1] = cost[0][1];
  dp[0][2] = cost[0][2];

  for (let j = 1; j < N; j++) {
    dp[j][0] = Math.min(dp[j - 1][1], dp[j - 1][2]) + cost[j][0];
    dp[j][1] = Math.min(dp[j - 1][0], dp[j - 1][2]) + cost[j][1];
    dp[j][2] = Math.min(dp[j - 1][0], dp[j - 1][1]) + cost[j][2];
  }

  console.log(Math.min(dp[N - 1][0], Math.min(dp[N - 1][1], dp[N - 1][2])));
}

solution(N, cost);
