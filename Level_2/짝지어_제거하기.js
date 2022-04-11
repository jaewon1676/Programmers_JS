// https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript

function solution(s){
  let cnt = 0; // 빼준 부분을 카운트 해줍니다
  let answer;
  let stack = []
  for (let i of s){
      if (stack[stack.length - 1] === i){ // 스택의 끝부분과 i를 비교합니다
          stack.pop();
          cnt++;; 
      } else {
          stack.push(i)
      }
  }
  
  (s.length / 2 == cnt ? answer = 1 : answer = 0 ) 
  // s의 길이를 2로 나눠서 cnt 값이 된다면 문자열의 개수만큼 잘 잘라졌다는 뜻입니다
  return answer;
}