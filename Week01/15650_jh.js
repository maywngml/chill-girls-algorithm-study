const fs = require('fs');
const input = fs.readFileSync('run/input.txt').toString().split(' ');
const N = parseInt(input[0]);
const M = parseInt(input[1]);

function solution(N, M) {
  const results = [];

  const backtraking = (start, currentArr) => {
    if (currentArr.length === M) {
      results.push(currentArr);
      return;
    }

    for (let i = start; i <= N; i++) {
      backtraking(i + 1, [...currentArr, i]);
    }
  };

  backtraking(1, []);

  results.forEach((result) => {
    console.log(result.join(' '));
  });
}

solution(N, M);
