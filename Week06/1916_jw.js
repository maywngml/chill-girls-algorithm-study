const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);

const graph = Array.from({ length: N + 1 }, () => []);
let index = 2;

for (let i = 0; i < M; i++) {
  const [depart, arrive, cost] = input[index++].split(' ').map(Number);
  graph[depart].push([arrive, cost]);
}

const [start, end] = input[index].split(' ').map(Number);

console.log(dijkstra(start, end, graph));

function dijkstra(start, end, graph) {
  const distance = new Array(N + 1).fill(Infinity);
  const queue = [];

  distance[start] = 0;
  queue.push([0, start]); // (비용, 도시)

  while (queue.length > 0) {
    const [currentCost, currentCity] = queue.shift();

    if (distance[currentCity] < currentCost) continue;

    for (const [nextCity, nextCost] of graph[currentCity]) {
      const totalCost = currentCost + nextCost;
      if (totalCost < distance[nextCity]) {
        distance[nextCity] = totalCost;
        queue.push([totalCost, nextCity]);
      }
    }
  }

  return distance[end];
}