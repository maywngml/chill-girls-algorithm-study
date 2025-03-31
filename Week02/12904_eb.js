// 문자열의 뒤에 A를 추가한다.
// 문자열을 뒤집고 뒤에 B를 추가한다.

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const S = 'AB';
const T = 'ABB'.split('');

while (T.length > S.length) {
  if (T.at(-1) === 'A') {
    T.pop();
  } else {
    T.pop();
    T.reverse();
  }
}
console.log(S === T.join('') ? 1 : 0);
