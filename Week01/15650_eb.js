const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const n = parseInt(input[0]);
const k = parseInt(input[1]);

function combine(n, k) {
  let result = [];

  function backtracking(start, curr) {
    if (curr.length === k) {
      result.push(curr.join(" ")); // 공백으로 조합을 문자열로 변환
      return;
    }
    for (let i = start; i <= n; i++) {
      curr.push(i);
      backtracking(i + 1, curr);
      curr.pop();
    }
  }

  backtracking(1, []);
  return result;
}

console.log(combine(n, k).join("\n"));
