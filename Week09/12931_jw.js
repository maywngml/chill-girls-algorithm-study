//완전이진트리
//백트래킹?

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

solution(n,arr);

function solution(n,arr){

  // B의 모든 요소가 0이 될 때까지 연산 수행
	// 각 원소가 홀수이면 -1 수행
	// 모든 원소가 짝수일 때만 /2 (한 번의 곱하기 2로 거꾸로)

  let cnt = 0;

  while(arr.some(i=>i!==0)){
    for(let i=0;i<n;i++){
      if(arr[i]%2===1){
        arr[i]-=1;
        cnt++;
      }
    }
    if(arr.every(i=>i===0)) break;     //여기서 이미 0 0 이 될수도있다!

    for(let i=0;i<n;i++){
        arr[i]/=2;
    }
    cnt++;
  }
  console.log(cnt)

}