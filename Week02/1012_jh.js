const fs = require('fs');
const input = fs.readFileSync('run/input.txt').toString().trim().split('\n');
const inputN = +input[0];

function solution(width, height, baechu) {
  const baechuMap = Array.from({ length: height }, () =>
    Array(width).fill(false)
  );
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const visited = Array.from({ length: height }, () =>
    Array(width).fill(false)
  );
  let result = 0;

  baechu.forEach(([x, y]) => {
    baechuMap[y][x] = true;
  });

  const bfs = (startX, startY) => {
    const queue = [[startX, startY]];
    visited[startX][startY] = true;

    while (queue.length > 0) {
      const [currentX, currentY] = queue.shift();

      for (const [dx, dy] of direction) {
        const nextX = currentX + dx;
        const nextY = currentY + dy;

        if (
          nextX < 0 ||
          nextX >= height ||
          nextY < 0 ||
          nextY >= width ||
          visited[nextX][nextY] ||
          !baechuMap[nextX][nextY]
        )
          continue;

        visited[nextX][nextY] = true;
        queue.push([nextX, nextY]);
      }
    }
  };

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (!visited[i][j] && baechuMap[i][j]) {
        bfs(i, j);
        result++;
      }
    }
  }

  return result;
}

let start = 2;

for (let i = 0; i < inputN; i++) {
  const strNumbers = input[start - 1].toString().trim().split(' ');
  const count = +strNumbers[2];
  const inputLine = [];

  for (let j = start; j < start + count; j++) {
    const strNumbers = input[j].toString().trim().split(' ');
    inputLine.push(strNumbers.map((item) => +item));
  }
  start += count + 1;
  console.log(solution(+strNumbers[0], +strNumbers[1], inputLine));
}
