// 시간복잡도: (nlogm)
// 공간복잡도: O(1)
function solution(budgets, M) {
  // 요청 예산의 총액
  const totalBudget = budgets.reduce((total, budget) => total + budget, 0);
  const maxBudget = Math.max(...budgets);
  let min = 1,
    max = Math.min(maxBudget, M); // 배정 가능한 예산의 최대 금액은 요청 예산의 최댓값
  let result;

  if (totalBudget <= M) return maxBudget;
  // 이분탐색
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    // 현재 상한액으로 배정했을 때의 전체 예산
    let total = budgets.reduce(
      (acc, budget) => acc + Math.min(middle, budget),
      0
    );
    // 전체 예산이 총 예산보다 크면 예산을 더 적게 싸야함
    if (total > M) {
      max = middle - 1;
    } else {
      // 전체 예산이 총 예산보다 크거나 같다면 예산을 더 많이 쓸 수 있음
      result = middle;
      min = middle + 1;
    }
  }

  return result;
}
