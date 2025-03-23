//1~N까지 자연수 중에서 중복 없이 M개를 고른 수열
//백트래킹: 모든 가능한 경우의 수 중에서 특정한 조건을 만족하는 경우만 살펴보는 것

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const N = Number(input[0]);
const M = Number(input[1]);

function solution(N, M) {
  let list = [];

  function dfs(start) {
    if (list.length === M) {
      console.log(list.join(" "));
      return;
    }
    for (let i = start + 1; i <= N; i++) {
      list.push(i);
      dfs(i);
      list.pop();
    }
  }
  dfs(0);
}

solution(N, M);
