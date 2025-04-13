// 처음 풀이. 매우 무식 그래서 틀렸죠?
// 이렇게 복잡하게 풀었던 이유는...O(n)으로 해결하고 싶었습니다.
//
function solution(str, explosionStr) {
  // 폭발 문자열의 각 문자의 인덱스 위치를 저장
  const charIndex = new Map();
  const stack = [];
  const length = explosionStr.length;
  // 문자의 현재 인덱스, 폭발문자열 시작 인덱스, 부분문자열
  let currentIndex = -1,
    startIndex = -1,
    substr = "";

  explosionStr.split("").forEach((char, index) => {
    charIndex.set(char, index);
  });

  for (const char of str) {
    // 폭발 문자열에 속하는 문자
    if (charIndex.has(char)) {
      const index = charIndex.get(char);
      // 처음 폭밞 문자열을 만났다면
      if (currentIndex === -1) {
        startIndex = index;
        currentIndex = index;
        substr += char;
      } else if (index - currentIndex === 1) {
        // 문자열 안에서 폭발 문자열이 이어지고 있다면
        currentIndex = index;
        substr += char;
      }
      if (index === length - 1) {
        // 폭발 문자열의 마지막 문자라면
        const stackIndex = stack.length - startIndex;
        // 스택 안에 현재 폭발 부분 문자열의 앞부분이 들어가 있다면
        if (stack.slice(stackIndex) === explosionStr.slice(0, startIndex)) {
          // 스택에서 해당 문자열 제거
          stack.splice(stackIndex, startIndex); // 폭발 문자열의 길이가 최대 36이기 때문에 O(1)에 가까움
        }
        startIndex = -1;
        currentIndex = -1;
        substr = "";
      }
    } else {
      // 기록중이던 부분문자열 스택에 추가
      stack.push([...substr.split()]); // 폭발 문자열의 길이가 최대 36이기 때문에 O(1)에 가까움
      stack.push(char);
    }
  }

  return stack.length === 0 ? "FRULA" : stack.join("");
}

// 간소화한 풀이...
// 완전 초간단...지피티가 짜줬어요 흐흑!
// 시간복잡도 O(N*M)
function solution(str, explosionStr) {
  const stack = [];
  const len = explosionStr.length;

  for (const char of str) {
    // 문자를 스택에 일단 집어넣음
    stack.push(char);
    if (
      // 폭발 문자열이 담겼을 가능성이 있고
      // 실제 스택에 폭발 문자열이 담겨있다면
      stack.length >= len &&
      stack.slice(-len).join("") === explosionStr
    ) {
      // 스택에서 폭발 문자열 제거
      stack.splice(-len, len);
    }
  }

  return stack.length === 0 ? "FRULA" : stack.join("");
}
