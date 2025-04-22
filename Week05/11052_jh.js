const fs = require('fs');
const input = fs.readFileSync('run/input.txt').toString().trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map((item) => +item);

// 처음에는 dp[i]를 i개가 들어있는 카드팩으로 N개를 사는데 지불할 수 있는 최대금액
// 이라고 점화식을 설정해서 답이 나오지 않았음.
// 결국에는. .? 지피티한테 물어봤다.. dp는 왜 이렇게 잘 안 풀릴까요..
function solution(N, arr) {
  // dp[i]: 카드 i개를 사는데 지불할 수 있는 최대금액
  const dp = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + arr[j - 1]);
    }
  }

  return dp[N];
}

console.log(solution(N, arr));
