const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let index = 0;
const T = Number(input[index++]);

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[index++].split(' ').map(Number);
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[index++].split(' ').map(Number);
    field[y][x] = 1;
  }

  function dfs(x, y) {
    if (
      x < 0 ||
      x >= M ||
      y < 0 ||
      y >= N ||
      visited[y][x] ||
      field[y][x] === 0
    ) {
      return;
    }

    visited[y][x] = true;

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        dfs(j, i);
        count++;
      }
    }
  }

  console.log(count);
}
