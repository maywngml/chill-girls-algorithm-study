//완전이진트리
//백트래킹?

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const n = Number(input[0]);

let arr = input[1].split(" ");
let result = Array.from({length:n},()=>[]);

solution(n,arr);

function solution(n,arr){
//3개가 깊이 1
//왼오위
// 루트는 항상 중간 값 (index = mid)
// 왼쪽 절반은 왼쪽 서브트리, 오른쪽 절반은 오른쪽 서브트리
// 각 재귀마다 현재 노드의 레벨을 기록해두고 → 해당 레벨에 번호를 push

makeNode(0,arr.length-1,1);

for(let i=0;i<n;i++){
  console.log(...result[i]);
}

function makeNode(start,end,depth){
  if(start>end) return;
  const mid = Math.floor((start+end)/2);
  result[depth-1].push(arr[mid]);

  makeNode(start,mid-1,depth+1);
  makeNode(mid+1,end,depth+1);
  }
}