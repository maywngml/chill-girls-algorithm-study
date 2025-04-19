const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const cardPack = input[1].split(' ').map(Number); // 0-based indexing
const dp = Array(N + 1).fill(0);

// dp[n] = n개의 카드를 구매하는 최대 가격
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + cardPack[j - 1]); // j-1로 접근
  }
}

console.log(dp[N]);
