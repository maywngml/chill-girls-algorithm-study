// 시간복잡도: O(n)
function solution(s) {
  // 문자열을 ['55', '+', '40', '-', '32'] => 이런 배열로 만듬
  const expression = s.match(/(\d+|[+-])/g);
  // +로 연결된 숫자들은 모두 더해서 nums 배열에 삽입
  const nums = [];
  let subTotal = 0;

  for (const item of expression) {
    if (item === "+") {
      continue;
    } else if (item === "-") {
      nums.push(subTotal);
      subTotal = 0;
    } else {
      subTotal += +item;
    }
  }

  nums.push(subTotal);

  let result = nums[0];

  nums.shift();
  // 배열에 있는 숫자들은 모두 -로 연결해서 계산
  result += nums.reduce((total, num) => total - num, 0);

  return result;
}
