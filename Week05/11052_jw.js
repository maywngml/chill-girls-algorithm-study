//카드 구매하기
//dp -> 덧셈이 될수있는 경우의 수?
const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let p = [];
let dp = Array(N + 1).fill(0);
const arr = input[1].split(" ").map(Number);
p = [0, ...arr];
// 4
// 1 5 6 7
//dp[1]=dp[0]+ p[1]
//dp[2]=Math.max(dp[0]+p[2],dp[1]+p[1])
//dp[3]=Math.max(dp[0]+p[3],dp[1]+p[2],dp[2]+p[2])
//dp[4]=Math.max(dp[0]+ p[4],dp[1]+p[3],dp[2]+p[2],dp[3]+p[1])
//dp[N]=Math.max(dp[0]+p[N],dp[1]+p[N-1],dp[2]+p[N-2],...dp[N-1]+p[1])
for (let j = 1; j < N + 1; j++) {
  let max = 0;
  for (let n = 0; n < j; n++) {
    max = Math.max(dp[n] + p[j - n], max);
  }
  dp[j] = max;
}
console.log(dp[N]);
