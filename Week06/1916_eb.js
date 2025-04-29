const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf-8').trim().split('\n');

const N = Number(input[0]); // 도시의 개수
const M = Number(input[1]); // 버스의 개수
const edges = input.slice(2, M + 2).map(line => line.split(' ').map(Number));
const [start, end] = input[M + 2].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (const [from, to, cost] of edges) {
  graph[from].push([to, cost]);
}

function dijkstra(graph, start, end) {
  // 최단 거리 배열 초기화
  const distance = Array(N + 1).fill(Infinity);
  distance[start] = 0;

  const queue = [[0, start]]; // [비용, 노드]

  while (queue.length > 0) {
    const [currentCost, currentNode] = queue.pop();

    // 현재 비용이 이미 알고 있는 최단 거리보다 크면 스킵
    if (distance[currentNode] < currentCost) continue;

    // 현재 노드의 인접 노드들을 확인
    for (const [nextNode, nextCost] of graph[currentNode]) {
      const totalCost = currentCost + nextCost;

      // 더 짧은 경로를 찾은 경우에만 업데이트
      if (distance[nextNode] > totalCost) {
        distance[nextNode] = totalCost;
        queue.push([totalCost, nextNode]);
      }
    }
    console.log(distance);
  }

  return distance[end];
}

console.log(dijkstra(graph, start, end));
