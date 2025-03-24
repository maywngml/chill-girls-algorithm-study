// 첫번째 풀이, 84%까지 올라가다 시간 초과.. 예상했음
// 우선순위큐를 사용해야 할 것 같지만 그걸 어떻게 구현하니..
function solution(n, courses) {
  const classroomEndTime = [];

  courses.sort((next, previous) => {
    if (next[0] === previous[0]) {
      return next[1] - previous[1];
    } else {
      return next[0] - previous[0];
    }
  });

  courses.forEach((course) => {
    const [courseStartTime, courseEndTime] = course;
    const index = classroomEndTime.findIndex(
      (endtime) => endtime <= courseStartTime
    );

    if (index === -1) {
      classroomEndTime.push(courseEndTime);
    } else {
      classroomEndTime[index] = courseEndTime;
    }
  });

  return classroomEndTime.length;
}

// 두번째 시도. 다른 사람들 풀이 참고해서 수정
// courses 배열은 이차원 배열로 각 강의의 [시작 시간, 1], [종료 시간, -1]을 저장.
// 시간을 기준으로 정렬한 뒤 탐색하는데
// 현재 시간이 start 시간이면 강의실이 하나 필요한 거고, end 시간이면 강의실을 하나 반납해야 한다.
// 이미 강의실을 시간순으로 최적으로 정렬해놨기 때문에 매 순간 방을 최대로 쓴 값이 답이 된다.
// => 근데 사실 완전히 와닿지는 않음..ㅠ
function solution(n, courses) {
  let currentCount = 0,
    result = 0;

  courses.sort((next, previous) => {
    if (next[0] === previous[0]) {
      return next[1] - previous[1];
    } else {
      return next[0] - previous[0];
    }
  });

  courses.forEach((course) => {
    currentCount += course[1];
    result = Math.max(result, currentCount);
  });
  return result;
}

console.log(solution(inputN, inputLine));
