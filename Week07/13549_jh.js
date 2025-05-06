// 처음 풀이.. 어떻게 됐을 것 같아요..?
// 네, 무한루프가 돌았습니다.. ^^ 무한루프 피하려고 조건문을 수정해봤는데 그럼 틀리더라고요...
function bfs(start, end) {
  const queue = [[start, 0]];
  const direction = [-1, 1, 2];
  let minTime = Infinity;

  while (queue.length > 0) {
    const [currentNode, currentTime] = queue.shift();

    for (const item of direction) {
      let nextNode = currentNode,
        nextTime = currentTime;

      if (item === 2) {
        nextNode *= 2;
      } else {
        nextNode += item;
        nextTime++;
      }

      if (nextNode === end) {
        console.log(currentNode, nextTime);
        minTime = Math.min(minTime, nextTime);
        continue;
      }

      if (
        nextNode < start ||
        (nextNode > end &&
          Math.abs(nextNode - end) > Math.abs(end - currentNode))
      ) {
        continue;
      }

      queue.push([nextNode, nextTime]);
    }
  }

  return minTime;
}

// 그래서 GPT야 나에게 힘을 줘..! 하며 도움을 청했더니 기깔난 코드를 짜줬죠.
// 이 문제의 핵심은 그냥 BFS가 아닌 0-1 BFS로 풀어야 한다는 것!!
// 순간이동 했을 때를 먼저 탐색해야 한다.
// * 0-1 BFS: 가중치가 0, 1로 주어진 그래프에서 최단경로를 찾아낼 수 있는 알고리즘
function bfs(start, end) {
  // 수빈이가 주어진 범위를 벗어나는 걸 방지하기 위해 필요한 변수
  const MAX = 100001;
  // 방문 표시
  const visited = new Array(MAX).fill(false);
  // 우선순위 큐 -> 자바스크립트에는 우선순위 큐가 없으니 최대한 비슷하게 조작
  const deque = [];
  deque.push([start, 0]);

  while (deque.length > 0) {
    const [current, time] = deque.shift();

    // 이미 방문한 적이 있다면 continue
    if (visited[current]) continue;

    visited[current] = true;

    // 동생이 있는 곳에 도착했다면 탐색 종료
    if (current === end) return time;

    // 범위 내에서 순간이동이 가능하고 아직 해당 위치로 이동해보지 않았다면
    if (current * 2 < MAX && !visited[current * 2]) {
      // 다음 위치는 우선순위 큐 앞에 삽입한다.
      // 순간이동을 한 경우를 먼저 탐색해야 최단 시간을 구할 수 있음
      deque.unshift([current * 2, time]);
    }
    // 범위 내에서 앞으로 이동할 수 있고 아직 해당 위치로 이동해보지 않았다면
    if (current + 1 < MAX && !visited[current + 1]) {
      // 다음 위치는 우선순위 큐 뒤에 삽입
      deque.push([current + 1, time + 1]);
    }
    // 범위 내에서 뒤로 이동할 수 있고 아직 해당 위치로 이동해보지 않았다면
    if (current - 1 >= 0 && !visited[current - 1]) {
      // 다음 위치는 우선순위 큐 뒤에 삽입
      deque.push([current - 1, time + 1]);
    }
  }
}

function solution(start, end) {
  if (start >= end) return start - end;
  return bfs(start, end);
}
