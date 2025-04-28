//ATM
//정렬

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").sort((a,b)=> Number(a)-Number(b));
let result=0;
//1+ 1+2 + 1+2+3+ 1+2+3+3 + 1+2+3+3+4
for(let i=0;i<N;i++){
  result+=arr[i]*(N-i);
}
console.log(result);