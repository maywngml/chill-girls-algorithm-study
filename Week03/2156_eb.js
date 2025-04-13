const N = 6;
const numbers = [6, 10, 13, 9, 8, 1];
// const fs = require('fs');

// const input = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map(Number);
// const N = input[0];
// const numbers = input.slice(1);
if (N === 1) {
  console.log(numbers[0]);
  return;
}
if (N === 2) {
  console.log(numbers[0] + numbers[1]);
  return;
}

const dp = [];
dp.push(numbers[0]);
dp.push(numbers[0] + numbers[1]);
dp.push(Math.max(dp[1], numbers[0] + numbers[2], numbers[1] + numbers[2]));

for (let i = 3; i < N; i++) {
  dp.push(
    Math.max(
      dp[i - 1],
      dp[i - 2] + numbers[i],
      dp[i - 3] + numbers[i - 1] + numbers[i]
    )
  );
}
console.log(dp.at(-1));
