// 그리디 알고리즘
// 서류 점수를 기준으로 오름차순 정렬하고 앞의 사람들의 면접 점수를 확인하면 됨
// 시간 복잡도: O(N*MlogM)
function solution(rankList) {
  let result = [];

  // 서류 점수를 기준으로 오름차순 정렬
  rankList.forEach((ranks) => {
    ranks.sort((prev, next) => {
      return prev[0] - next[0];
    });
  });

  rankList.forEach((ranks) => {
    let count = 0;

    // 최고 등수를 저장할 변수
    minRank = Infinity;

    ranks.forEach((rank) => {
      // 현재 면접자의 면접 등수가 최고 등수보다 높다면 최고 등수 갱신
      // 현재 면접자는 앞에 있는 사람들보다 면접 등수가 높다는 뜻이므로 선발 가능
      // 뒤의 면접자들보다 서류 등수가 높기 때문에 뒤쪽은 확인할 필요 없음
      if (minRank > rank[1]) {
        minRank = rank[1];
        count++;
      }
    });

    result.push(count);
  });

  console.log(result.join('\n'));
}
