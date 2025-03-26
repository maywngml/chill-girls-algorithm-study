let n = 3;
let matrix = [[26, 40, 83], [49, 60, 57], [13, 89, 99]];
if (n === 1) {
  console.log(Math.min(...matrix[0]));
}
let dp = Array(n).fill().map(() => Array(3).fill(0));

dp[0][0] = matrix[0][0];
dp[0][1] = matrix[0][1];
dp[0][2] = matrix[0][2];
for (let i = 1; i < n; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + matrix[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + matrix[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + matrix[i][2];
}
console.log(Math.min(...dp[n - 1]));
