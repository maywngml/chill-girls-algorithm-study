//유기농 배추
//bfs/dfs
//Array.from(arrayLike, mapFn)
//arrayLike: 길이를 가진 객체 ({ length: n })
//mapFn: 각 요소를 어떻게 만들지 정의하는 함수
//Array(N).map(...)은 작동 안 됨
const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const T = Number(input[0]);
let idx = 1;

const dx = [0, 0, 1, -1];
const dy = [-1, 1, 0, 0];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(" ").map(Number);

  const field = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    field[y][x] = 1;
  }

  solution(M, N, field);
}

function solution(M, N, field) {
  let cnt = 0;
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (field[y][x] === 1 && !visited[y][x]) {
        // dfs(field, visited, x, y);
        bfs(field, visited, x, y);
        cnt++;
      }
    }
  }

  console.log(cnt);
}

function bfs(field, visited, x, y) {
  const queue = [];
  queue.push([y, x]);
  visited[y][x] = true;

  while (queue.length > 0) {
    const [curY, curX] = queue.shift();
    for (let i = 0; i < dx.length; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (
        nx >= 0 &&
        nx < field[0].length &&
        ny >= 0 &&
        ny < field.length &&
        field[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }
}

// function dfs(field, visited, x, y) {
//   visited[y][x] = true;
//   for (let i = 0; i < dx.length; i++) {
//     const nx = x + dx[i];
//     const ny = y + dy[i];

//     if (
//       nx >= 0 &&
//       nx < field[0].length &&
//       ny >= 0 &&
//       ny < field.length &&
//       field[ny][nx] === 1 &&
//       !visited[ny][nx]
//     ) {
//       dfs(field, visited, nx, ny);
//     }
//   }
// }
