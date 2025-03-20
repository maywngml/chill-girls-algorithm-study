const n = 3;
const classes = [
  [1, 3],
  [2, 4],
  [3, 5]]

const startTimes = classes.map(c => c[0]).sort((a, b) => a - b);
const endTimes = classes.map(c => c[1]).sort((a, b) => a - b);
let classRoom = 0;
let endIndex = 0;

for (let i = 0; i < endTimes.length; i++) {
  if (startTimes[i] < endTimes[endIndex]) {
    classRoom++;
  } else {
    endIndex++;
  }
}

console.log(classRoom)