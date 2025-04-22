// 회원과 다른 회원들 간의 연결 관계를 구하는 문제
// 다른 회원들 과의 연결 depth가 가장 낮은 사람이 회장

// bfs 돌려서 다른 회원과의 depth를 구한다.
function bfs(N, start, connection) {
  // 현재 회원에서 다른 회원까지의 최소 depth를 저장하는 배열
  const depth = Array(N + 1).fill(-1);
  const queue = [{ member: start, depth: 0 }];
  // 자기 자신의 depth는 0으로 지정
  depth[start] = 0;

  while (queue.length > 0) {
    const { member: currentMember, depth: currentDepth } = queue.pop();

    connection[currentMember].forEach((nextMember) => {
      const nextDepth = currentDepth + 1;
      // 다음 회원에게 아직 방문하지 않았거나
      // 이미 저장해둔 다음 회원까지의 최소 depth가 현재 회원을 거쳐 다음 회원을 방문했을 때의 depth가 크다면
      // 다음 회원의 최소 depth를 변경하고 큐에 정보를 추가한다.
      if (depth[nextMember] === -1 || depth[nextMember] > nextDepth) {
        depth[nextMember] = nextDepth;
        queue.push({ member: nextMember, depth: nextDepth });
      }
    });
  }
  // depth 중 제일 큰 값을 반환한다.
  return Math.max(...depth);
}

function solution(N, information) {
  const connection = Array.from({ length: N + 1 }, () => []);
  // 각 회원의 번호와 점수를 함께 저장
  const scores = [];
  // 졈수가 가장 작은 사람이 회장이 되므로 Infinity로 초기화
  let minScore = Infinity;
  // 회원들 간의 연결 관계를 이차원 배열에 저장
  information.forEach(([a, b]) => {
    connection[a].push(b);
    connection[b].push(a);
  });

  for (let i = 1; i <= N; i++) {
    // 현재 회원의 점수를 받아옴
    const score = bfs(N, i, connection);
    // 최소 점수 계산
    minScore = Math.min(minScore, score);
    // 회원 번호와 점수를 저장
    scores.push({ member: i, score });
  }
  // 현재 회원들 중 회장이 될 수 있는 사람의 정보를 모음
  const leaders = scores.filter(({ score }) => score === minScore);
  let leaderNumbers = '';

  leaders.forEach((leader) => (leaderNumbers += `${leader.member} `));

  console.log(minScore, leaders.length);
  console.log(leaderNumbers);
}
