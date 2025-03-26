const n = 3;
const classes = [[1, 2], [3, 4], [4, 5]];
const startTimes = classes.map(c => c[0]).sort((a, b) => a - b);
const endTimes = classes.map(c => c[1]).sort((a, b) => a - b);
let classRoom = 0;
let endIndex = 0; // 현재까지 종료된 수업의 인덱스

for (let i = 0; i < endTimes.length; i++) {
  if (startTimes[i] < endTimes[endIndex]) {
    classRoom++;
  } else {
    endIndex++;
  }
}

console.log(classRoom);
