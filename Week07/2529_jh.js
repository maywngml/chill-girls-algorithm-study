// k의 범위가 2부터 9까지다..?
// 이렇게 주어진 값의 범위가 작으면 뭐다? 완탐이다. 레츠고
function solution(k, signs) {
  // 최대/최소값은 문자열로 저장
  let minNum = 'Infinity',
    maxNum = '0';

  // 백트래킹을 돌릴 겁니다.
  const backtraking = (currentStr, currentIndex, visited) => {
    // 문자열을 모두 완성했다면
    if (currentIndex >= k) {
      // 최대/최소값을 갱신합니다.
      if (+minNum > +currentStr) {
        minNum = currentStr;
      }
      if (+maxNum < +currentStr) {
        maxNum = currentStr;
      }
      return;
    }
    // 숫자는 0부터 9까지의 정수라고 했기 때문에 모두 확인해줍니다.
    for (let num = 0; num <= 9; num++) {
      // 아직 num을 문자열에 추가하지 않았다면
      if (!visited[num]) {
        // 해당 num으로 현재의 식을 만족시킬 수 있다면
        if (signs[currentIndex] === '<' && currentStr[currentIndex] < num) {
          // 방문 표시
          visited[num] = true;
          // 다음 탐색을 이어갑니다
          backtraking(`${currentStr}${num}`, currentIndex + 1, visited);
          // 백트래킹을 빠져나왔다면 추후에 해당 num을 재방문해야 하기 때문에 false로 변경
          visited[num] = false;
        } else if (
          // 부등호만 바꼈을 뿐 위의 로직과 같습니다.
          signs[currentIndex] === '>' &&
          currentStr[currentIndex] > num
        ) {
          visited[num] = true;
          backtraking(`${currentStr}${num}`, currentIndex + 1, visited);
          visited[num] = false;
        }
      }
    }
  };

  // 반복문을 돌려 첫 숫자를 넣어줍니다
  for (let num = 0; num <= 9; num++) {
    const visited = Array(10).fill(false);
    visited[num] = true;
    backtraking(num.toString(), 0, visited);
  }

  console.log(maxNum);
  console.log(minNum);
}
