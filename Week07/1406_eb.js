const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf-8').trim().split('\n');

const str = input[0].trim(); // 앞뒤 공백 제거
const n = Number(input[1]);
const commands = input.slice(2).map(cmd => cmd.trim()); // 각 명령어의 앞뒤 공백 제거

// L	커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
// D	커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
// B	커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
// 삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
// P $	$라는 문자를 커서 왼쪽에 추가함
const leftStack = [...str]; // 커서 왼쪽 문자들
const rightStack = []; // 커서 오른쪽 문자들
for (let command of commands) {
  if (command === 'L') {
    if (leftStack.length > 0) {
      rightStack.push(leftStack.pop()); // 커서를 왼쪽으로 이동
    }
  } else if (command === 'D') {
    if (rightStack.length > 0) {
      leftStack.push(rightStack.pop());
    }
  } else if (command === 'B') {
    if (leftStack.length > 0) {
      leftStack.pop(); // 커서 왼쪽 문자 삭제
    }
  } else if (command.startsWith('P')) {
    leftStack.push(command[2]); // 커서 왼쪽에 문자 추가
  }
}

console.log(leftStack.join('') + rightStack.reverse().join('')); // yxabc
