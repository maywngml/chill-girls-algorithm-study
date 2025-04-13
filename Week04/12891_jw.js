//DNA 비밀번호
//1차 메모리초과
//**슬라이딩 윈도우(Sliding Window)는 연속된 구간(부분 배열, 부분 문자열)을 빠르게 탐색할 때 사용하는 기법
//새로운 값을 추가하고, 이전 값을 제거
const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [S, P] = input[0].split(" ").map(Number);

const sentence = input[1].split("");
// const [A, C, G, T] = input[2].split(" ").map(Number);
const arr = input[2].split(" ").map(Number);
const cnt = [0, 0, 0, 0];

let result = 0;
for (let i = 0; i < P; i++) {
  plus(sentence[i]);
}

if (check()) result++;

for (let j = P; j < S; j++) {
  minus(sentence[j - P]);
  plus(sentence[j]);
  if (check()) result++;
}
console.log(result);
function check() {
  if (
    arr[0] <= cnt[0] &&
    arr[1] <= cnt[1] &&
    arr[2] <= cnt[2] &&
    arr[3] <= cnt[3]
  )
    return true;
  return false;
}

function plus(ch) {
  if (ch === "A") cnt[0]++;
  else if (ch === "C") cnt[1]++;
  else if (ch === "G") cnt[2]++;
  else if (ch === "T") cnt[3]++;
}
function minus(ch) {
  if (ch === "A") cnt[0]--;
  else if (ch === "C") cnt[1]--;
  else if (ch === "G") cnt[2]--;
  else if (ch === "T") cnt[3]--;
}
//match 사용?
// const regexpA = /A/g;
// const regexpC = /C/g;
// const regexpG = /G/g;
// const regexpT = /T/g;
// let index = 0;
// let cnt = 0;
// while (index + P <= S) {
//   const word = sentence.slice(index, index + P);
//   if (
//     check(A, word, regexpA) &&
//     check(C, word, regexpC) &&
//     check(G, word, regexpG) &&
//     check(T, word, regexpT)
//   )
//     cnt++;
//   index++;
// }

// console.log(cnt);

// function check(cnt, wrd, reg) {
//   if (wrd.match(reg) && wrd.match(reg).length >= cnt) {
//     return true;
//   } else if (!wrd.match(reg) && cnt === 0) return true;
//   return false;
// }
