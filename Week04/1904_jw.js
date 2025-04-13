//01타일
//dp
// DP에서는 방향은 고정하는 게 국룰
// "붙이는 방향"을 앞/뒤 둘 다 세면 → 중복
// 한 방향만 정해서 일관되게 세면 → 정확하게 한 번씩만 셈
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

const dp = new Array(N + 1).fill(0);
dp[1] = 1; //1
dp[2] = 2; //00 11
// dp[3] = 3  //100 001 111
// dp[4] = 5  //0011 1100 0000 1111 1001
// dp[5] = 8; //10011 00111 11100 11001 10000 00001 11111 00111

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746; //결과 커지기전에 미리 나누기
}

console.log(dp[N]);
