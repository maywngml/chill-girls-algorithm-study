//세번째
//백트래킹? 그리디? -> 브루트포스
//매모리 초과 -> 시간초과
//붙인 수를 배열에 저장하지 않고 바로 top 3만 유지

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const n = Number(input[0]);

let index=1;
let arr=[];
let result = [];

for(let i=0;i<n;i++){
  arr.push(input[index++]);
}

solution(n,arr);

function solution(n,arr){

  for(let j = 0; j < n; j++) {
    for(let k = 0; k < n; k++) {
      if(j === k) continue; 
      if(result.length<3) {
        result.push(Number(arr[j]+arr[k]))
        result.sort((a,b)=> a-b);
      }
      else if(result[2]>Number(arr[j]+arr[k])){
        result[2] = Number(arr[j]+arr[k])
        result.sort((a,b)=> a-b);
      }
    }
  }

  console.log(result[2])
}