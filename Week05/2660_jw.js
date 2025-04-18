//회장뽑기
//link[a].push(b), link[b].push(a)
const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let index = 0;
const N = Number(input[index++]);

const list = Array.from({ length: N + 1 }, () => []);

while (true) {
  const [a, b] = input[index++].split(" ").map(Number);
  if (a === -1 && b === -1) break;
  list[a].push(b);
  list[b].push(a);
}
let min = Infinity;
const result = Array(N + 1).fill(0);
const answer = [];
let cnt = 0;
for (let i = 1; i <= N; i++) {
  const bfsResult = bfs(i);
  result[i] = bfsResult;
  min = Math.min(min, bfsResult);
}
for (let i = 1; i <= N; i++) {
  if (result[i] === min) {
    cnt++;
    answer.push(i);
  }
}

console.log(min + " " + cnt);
console.log(answer.join(" "));

function bfs(start) {
  //다른 모든 사람까지의 거리 중 최댓값
  let visited = Array(N + 1).fill(false);
  let distance = Array(N + 1).fill(0);

  const queue = [start];
  visited[start] = true;
  while (queue.length > 0) {
    const current = queue.shift();
    for (next of list[current]) {
      if (!visited[next]) {
        queue.push(next);
        distance[next] = distance[current] + 1;
        visited[next] = true;
      }
    }
  }
  return Math.max(...distance);
}
