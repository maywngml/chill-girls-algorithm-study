const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim(); // 한 줄 입력
function solution(expression) {
  // 먼저 '-'를 기준으로 식을 나누기
  const parts = expression.split('-');

  let result = 0;

  // 첫 번째 부분은 '+'로 나누어 더한 후 첫번째 result에 저장
  const firstPart = parts[0]
    .split('+')
    .reduce((acc, curr) => acc + Number(curr), 0);
  result = firstPart;

  // 나머지 부분들은 '-'로 나누어 각각 더한 후 결과에서 빼주기
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i]
      .split('+')
      .reduce((acc, curr) => acc + Number(curr), 0);
    result -= part;
  }

  return result;
}
console.log(solution(input));
