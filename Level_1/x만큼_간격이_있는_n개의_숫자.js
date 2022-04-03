// https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

function solution(x, n) {
  let answer = [];
  
  for (let i=1; i<=n; i++){
      let sum = i * x; 
      answer.push(sum)
  }
  return answer;
}