// 처음에는 시간 초과가 발생
// => 현재 노드의 최소 비용과 현재 노드까지의 이동 비용의 크기를 비교하는 조건문을 추가하니 통과!!
// 전형적인 다익스트라 문제
function dijkstra(N, start, end, connection) {
  // 각 노드의 최소 비용을 저장할 배열
  const distance = Array(N + 1).fill(Infinity);
  // 현재 노드과 이동 비용을 저장할 큐
  // start에서 start까지의 이동 비용은 0
  const queue = [{ node: start, cost: 0 }];

  distance[start] = 0;

  // 더 이상 방문할 노드이 없을 때까지 반복문 돌림
  while (queue.length > 0) {
    const { node: currentNode, cost: currentCost } = queue.pop();
    // 시간 초과가 발생해서 추가한 조건
    // 현재까지의 이동 비용이 노드의 최소 비용보다 크다면 continue
    // 이동 비용이 최소 비용보다 크다는 건 현재 상황에서는 다음 노드의 최소 비용을 절대 구할 수 없다는 것
    if (distance[currentNode] < currentCost) continue;
    // 현재 노드에서 연결된 노드들의 정보를 확인
    connection[currentNode].forEach(({ end, cost }) => {
      const nextCost = currentCost + cost;
      // 다음 노드의 최소 비용이 현재 이동 비용보다 크다면
      // 배열 값을 갱신하고 큐에 다음 이동 정보를 추가한다.
      if (distance[end] > nextCost) {
        distance[end] = nextCost;
        queue.push({ node: end, cost: nextCost });
      }
    });
  }

  return distance[end];
}

function solution(N, start, end, information) {
  const connection = Array.from({ length: N + 1 }, () => []);
  // 노드끼리 연결
  information.forEach(({ start, end, cost }) => {
    connection[start].push({ end, cost });
    connection[end].push({ start, cost });
  });

  console.log(dijkstra(N, start, end, connection));
}
