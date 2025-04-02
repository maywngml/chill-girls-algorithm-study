// 처음 풀이
// 재귀를 두번이나 돌기 때문에 당연히 시간초과가 나겠죠? 홍홍홍 ^^~
function solution(S, T) {
  const sLength = S.length;
  const tLength = T.length;
  let result = 0;

  if (S === T) return 1;
  if (sLength >= tLength) return 0;

  const dfs = (str) => {
    if (str.length === T.length) {
      if (str === T) {
        result = 1;
      }
      return 0;
    }

    dfs(str + 'A');
    dfs(str.split('').reverse().join('') + 'B');
  };

  dfs(S);

  return result;
}

// 역추적하는 방법. T에서 시작해서 S를 만들 수 있는지 검사
function solution(S, T) {
  const sLength = S.length;
  const tLength = T.length;
  const queue = T.split('');
  // 문자열 뒤집음 여부 확인
  let isReversed = false;

  if (S === T) return 1;
  if (sLength >= tLength) return 0;

  while (true) {
    if (queue.length === sLength) {
      break;
    }
    // 뒤집은거면 맨 앞의 원소를 확인, 안 뒤집었으면 맨 뒤의 원소를 확인
    let index = isReversed ? 0 : queue.length - 1;

    if (queue[index] === 'A' || queue[index] === 'B') {
      if (queue[index] === 'B') {
        isReversed = !isReversed;
      }
      queue.splice(index, 1);
    } else {
      break;
    }
  }

  const result = isReversed ? queue.reverse() : queue;

  return result.join('') === S ? 1 : 0;
}
