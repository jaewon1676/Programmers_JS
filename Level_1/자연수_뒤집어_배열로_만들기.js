// https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript

// 1
function solution(n) {
  var answer = [];
  // 정수형 => 문자형 => 하나씩 잘라서 뒤집어서 모아준다.
  n = n.toString().split('').reverse().join('')
  for (let i=0; i<n.length; i++){
      answer.push(parseInt(n[i])) // n은 지금 문자형이기때문에 Push 하기전에 정수형으로 바꿔줌
  }
  return answer
}

// 2
function solution(n) {
  return n = n.toString().split('').reverse().map(o => o = parseInt(o));
}