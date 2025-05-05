const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf-8').trim().split('\n');

const k = Number(input[0]); // 부등호 개수
const arr = input[1].split(' ');
let result = [];
const visited = new Array(10).fill(false);

function dfs(depth, str) { // depth: 현재 깊이, str: 현재까지 만든 숫자 문자열
  if (depth === k + 1) {
    result.push(str);
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (!visited[i]) {
      if (depth > 0) {
        // 첫 번째 숫자가 아닐 때만 부등호 체크
        const prev = parseInt(str.at(-1));
        if (arr[depth - 1] === '<' && prev >= i) continue;
        if (arr[depth - 1] === '>' && prev <= i) continue;
      }
      visited[i] = true;
      dfs(depth + 1, str + i);
      visited[i] = false;
    }
  }
}

dfs(0, '');
result.sort();
console.log(result.at(-1)); // 최댓값
console.log(result.at(0)); // 최솟값
