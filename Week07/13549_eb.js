const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf-8').trim().split('\n');
const [sb, sister] = input[0].trim().split(' ').map(item => Number(item)); // 앞뒤 공백 제거
const MAX = 100000;
const takenArr = new Array(MAX + 1).fill(Infinity); // 해당 위치까지 최소 시간 저장하기
const queue = [sb]; // [현재 위치, 시간]
takenArr[sb] = 0;
while (queue.length > 0) {
  const current = queue.shift();
  const teleport = current * 2;
  if (teleport <= MAX && takenArr[teleport] > takenArr[current]) {
    takenArr[teleport] = takenArr[current];
    queue.unshift(teleport);
  }
  const moveLeft = current - 1;
  if (0 <= moveLeft && takenArr[moveLeft] > takenArr[current] + 1) {
    takenArr[moveLeft] = takenArr[current] + 1;
    queue.push(moveLeft);
  }
  const moveRight = current + 1;
  if (moveRight <= MAX && takenArr[moveRight] > takenArr[current] + 1) {
    takenArr[moveRight] = takenArr[current] + 1;
    queue.push(moveRight);
  }
}
console.log(takenArr[sister]);
