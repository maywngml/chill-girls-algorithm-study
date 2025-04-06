//잃어버린 괄호
//문자열
//-찾아서 뒤에를 모두 계산
const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
// 1 + 2 - 3 + 4 + 5 - 6 - 7 - 8;

const arr = input[0].split("-"); //[ '1+2', '3+4+5', '6', '7', '8' ]
const result = [];
for (let i = 0; i < arr.length; i++) {
  const plus = arr[i].split("+").reduce((a, b) => Number(a) + Number(b), 0);
  result.push(plus); //3 12 6 7 8
}
const total = result.reduce((acc, cur, idx) => {
  return idx === 0 ? cur : acc - cur;
});
console.log(total);
