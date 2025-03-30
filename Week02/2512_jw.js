//예산
//그리디?
//이진탐색
const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const N = Number(input[0]);

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); //그냥 sort하면안됨! 문자열 기준으로 됨
const total = input[2];

solution(arr, total);

function solution(arr, total) {
  let left = 0;
  let right = Math.max(...arr); //Math.max(arr) 아님!
  let result = 0;
  let mid = 0;
  let answer = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    result = arr.reduce((acc, cur) => acc + Math.min(cur, mid), 0);
    if (result <= total) {
      answer = mid; //mid값 저장해둬야함
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(mid);
}
