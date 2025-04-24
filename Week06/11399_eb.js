const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const times = input[1].split(' ').map(Number); // 0-based indexing
times.sort((a, b) => a - b);
let result = 0;
let sum = 0;
for (let time of times) {
  sum += time;
  result += sum;
}
console.log(result);


