// 내가 넣은 문제지만 dp는 정말 싫다...
// 결국에는 이전 풀이 봄..ㅎ...
// 처음에는 지금 와인을 먹었냐/안 먹었냐로 나눠서 계산하려고 이차원 배열을 만들었었음 하지만 점화식 잘못 세워서 실패
function solution(n, wine) {
  // 지금까지 먹은 와인의 최대 양
  const dp = Array(n);
  // 첫 와인은 무조건 먹는게 최대 양
  dp[0] = wine[0];
  // 와인을 연속으로 먹는게 최대 양
  dp[1] = wine[0] + wine[1];
  // 세번째 와인은 선택을 해야 함.
  // 1, 2를 먹거나 1, 3을 먹거나 2, 3을 먹거나!
  dp[2] = Math.max(dp[1], wine[2] + Math.max(wine[0], wine[1]));

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      dp[i - 1], // 지금 와인 안 먹음
      wine[i] + Math.max(dp[i - 2], dp[i - 3] + wine[i - 1]), // 지금 와인 먹음 + (전전 와인까지의 최대양 vs 전전전 와인의 최대 양 + 전 와인 먹음) 둘 중 최댓값
    );
  }

  return dp[n - 1];
}

console.log(solution(n, wine));
