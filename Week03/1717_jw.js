//집합의 표현
//findRoot 시간초과 -> 결과값 저장해서 나중에 출력
const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let idx = 1;
const arr = [];
const parent = Array.from({ length: N + 1 }, (_, idx) => idx); //(_, idx) => idx: 두 번째 매개변수는 인덱스, 인덱스 값을 그대로 리턴
const result = [];
for (let i = 0; i < M; i++) {
  const [n, a, b] = input[idx++].split(" ").map(Number);
  if (n === 0) {
    //집합 합치기
    addNode(a, b);
  } else {
    //같은 집합인지 판단
    result.push(findRoot(a) === findRoot(b) ? "YES" : "NO");
    // findRoot(a) === findRoot(b) ? console.log("YES") : console.log("NO");
  }
}
function addNode(a, b) {
  const aRoot = findRoot(a);
  const bRoot = findRoot(b);
  parent[bRoot] = aRoot; //p[1]=1 p[3]=3  => p[3]=1 //3의 parent가 1 //p[7]=7 p[6]=6 =>p[6]=7 6의 parent가 7
}

function findRoot(num) {
  if (parent[num] !== num) {
    parent[num] = findRoot(parent[num]); // 경로 압축!!parent[num]을 갱신 => 중간 노드들도 전부 루트를 가리키게 갱신
  }
  return parent[num];
}
// function findRoot(num) { //parent[num]을 갱신하지않아서 탐색만함!
//   if (parent[num] === num) {
//     //p[3] = 1 p[1]=1 p[7]=7 => p[7] = 1 (1,6,7,3)
//     return num;
//   } else {
//     return findRoot(parent[num]);
//   }
// }
console.log(result.join("\n"));
// 0 1 3
// 1 1 7
// 0 7 6
// 1 7 1
// 0 3 7
// 0 4 2
// 0 1 1
// 1 1 1
