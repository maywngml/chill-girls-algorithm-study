// 처음에 혼자 풀었다가 틀려서 지피티한테 SOS 쳤어요...ㅎ
// 처음에 문제를 잘못 이해해서 같은 날에 인출을 여러번 할 수 있다고 생각했는데 아니더라구용...
// 주어진 input의 범위가 크고 특정 값을 찾는거기 때문에 이분탐색으로 풀었습니다.
// (물론,,? 제가 낸 문제여서 이분탐색이라는걸 미리 알고 있습죠)
function solution(N, M, amounts) {
  // 돈을 뽑았는데도 그날 쓸 돈이 모자라는 경우는 없어야 하기 때문에
  // 탐색 최솟값은 amounts의 최댓값으로 잡습니다.
  let min = Math.max(...amounts),
    // 인출을 한번만 하려면 한번에 amounts의 총합의 금액을 뽑아야 하므로 최댓값은 amounts의 총합입니다.
    max = amounts.reduce((acc, amount) => acc + amount, 0);
  let answer;

  while (min <= max) {
    // 인출할 금액
    let withdrawalAmount = Math.floor((min + max) / 2);
    // 인출 횟수와 남은 금액을 저장하는 변수
    let cnt = 1,
      remainderAmount = withdrawalAmount;
    // 현재 인출금액으로 몇번 인출할 수 있는지 확인합니다.
    amounts.forEach((amount) => {
      // 남은 금액이 오늘 써야하는 금액보다 작다면
      if (remainderAmount < amount) {
        // 한번 더 인출합니다.
        cnt++;
        // 남은 금액 인출한 금액에서 오늘 쓴 금액을 뺀 값이 됩니다.
        remainderAmount = withdrawalAmount - amount;
      } else {
        // 남은 금액이 오늘 써야 하는 금액보다 크거나 같다면
        // 남은 금액에서 오늘 쓴 금액을 빼줍니다.
        remainderAmount -= amount;
      }
    });
    // 인출 횟수가 M보다 작거나 같다면
    if (cnt <= M) {
      // 답은 현재 인출 금액이 됩니다.
      answer = withdrawalAmount;
      // 인출 금액을 줄여서 인출 횟수를 늘립니다.
      max = withdrawalAmount - 1;
    } else {
      // 인출 금액을 늘려서 인출 횟수를 줄입니다.
      min = withdrawalAmount + 1;
    }
  }

  console.log(answer);
}
