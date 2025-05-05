// 은빈이랑 풀이 똑같아서 은빈이한테 설명 토스하겠읍니다..^^
function solution(str, commands) {
  const leftStack = str.split('');
  const rightStack = [];

  commands.forEach((command) => {
    if (command.startsWith('P')) {
      leftStack.push(command.split(' ')[1]);
    } else if (command === 'L') {
      if (leftStack.length > 0) {
        rightStack.push(leftStack.pop());
      }
    } else if (command === 'D') {
      if (rightStack.length > 0) {
        leftStack.push(rightStack.pop());
      }
    } else {
      leftStack.pop();
    }
  });

  console.log(leftStack.concat(rightStack.reverse()).join(''));
}
