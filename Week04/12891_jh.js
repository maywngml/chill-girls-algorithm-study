// 잘 풀었는데도 35%에서 틀리길래 지피티한테 물어봤더니 S, P 파싱이 잘못되서 그런거였3
function isDNA(subDNACount, conditionCount) {
  return subDNACount.every((count, index) => count >= conditionCount[index]);
}

function solution(S, P, dna, conditionCount) {
  const dnaIndex = { A: 0, C: 1, G: 2, T: 3 };
  const subDNACount = [0, 0, 0, 0];
  let result = 0;

  for (let i = 0; i < P; i++) {
    subDNACount[dnaIndex[dna[i]]]++;
  }

  result += isDNA(subDNACount, conditionCount) ? 1 : 0;

  for (let i = P; i < S; i++) {
    subDNACount[dnaIndex[dna[i - P]]]--;
    subDNACount[dnaIndex[dna[i]]]++;
    result += isDNA(subDNACount, conditionCount) ? 1 : 0;
  }

  return result;
}
