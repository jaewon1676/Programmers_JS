// https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript

function solution(n) {
  var answer = 0;
  for (let i=1; i<=n; i++){
      if (n%i == 0){ // n으로 i를 나눴을 때, 나머지가 0이면 약수이다.
          answer += i
      }
  }
  return answer;
}