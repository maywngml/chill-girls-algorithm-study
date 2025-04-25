const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const moneyList = input.slice(1).map(Number);
let left = Math.max(...moneyList);
let right = moneyList.reduce((a, b) => a + b);
let answer = right;

function isPossible(mid) {
  let currentMoney = mid;
  let count = 1;
  for (let money of moneyList) {
    if (money > currentMoney) {
      currentMoney = mid;
      count++;
    }
    currentMoney -= money;
  }

  return count <= M;
}
while (left <= right) {
  const mid = parseInt((left + right) / 2);
  if (isPossible(mid)) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}
console.log(left);
