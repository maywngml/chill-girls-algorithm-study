const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [S, P] = input[0].split(' ').map(Number);
const str = input[1];
const need = input[2].split(' ').map(Number);
const sArr = ['A', 'C', 'G', 'T'];

let answer = 0;
let count = Array(4).fill(0);

// 초기 윈도우 설정
for (let i = 0; i < P; i++) {
  count[sArr.indexOf(str[i])]++;
}

function isValid() {
  for (let i = 0; i < 4; i++) {
    if (count[i] < need[i]) return false;
  }
  return true;
}

// 초기 윈도우 체크
if (isValid()) answer++;

// 슬라이딩 윈도우
for (let i = P; i < S; i++) {
  count[sArr.indexOf(str[i - P])]--; // 윈도우에서 빠지는 문자
  count[sArr.indexOf(str[i])]++; // 윈도우에 추가되는 문자
  if (isValid()) answer++;
}

console.log(answer);
