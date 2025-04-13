//문자열 폭발
//slice: begin부터 end 전까지의 복사본을 새로운 배열 객체
//splice: 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
//1차 -> 메모리 초과 : sentence.includes()와 arr.splice() + join()을 계속 반복하면서 문자열 전체를 계속 재조립하고 있어서, 시간/메모리 효율이 안좋음

const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const arr = input[0].split("");
const word = input[1];

const stack = [];

for (let i = 0; i < arr.length; i++) {
  stack.push(arr[i]);
  if (stack.length >= word.length) {
    const checkWord = stack.slice(-word.length).join(""); //끝에서 length만큼 자른다
    console.log(stack);
    console.log(checkWord);
    if (checkWord === word) {
      for (let j = 0; j < word.length; j++) {
        stack.pop();
      }
    }
  }
}
console.log(stack.join("") || "FRULA");
// let sentence = input[0];
// const word = input[1];
// const arr = sentence.split(""); //array로

// while (sentence.includes(word)) {
//   const index = sentence.indexOf(word);
//   arr.splice(index, word.length);
//   sentence = arr.join("");
// }
// console.log(sentence || "FRULA");
