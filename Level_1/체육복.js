// https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
  let answer = Array(n).fill(1) // n만큼의 배열을 만들어서 1을 만들어줍니다
  let cnt = 0;
  for(let i = 0; i < reserve.length; i++){ // reserve 를 순회하며 체육복 + 1
      answer[reserve[i]-1] += 1
  }    
  for(let i = 0; i < lost.length; i++){ // lost 를 순회하며 체육복 수를 -1 
      answer[lost[i]-1] -= 1
  }
  for(let i = 0; i < n; i++){ // n을 순회하며 앞사람과 뒷사람의 체육복 수를 비교한다.
      if (answer[i] == 2 && answer[i+1] == 0 || answer[i+1] == 2 && answer[i] == 0){
          answer[i] = 1
          answer[i+1] = 1
      }
  }

  for(let i = 0; i < answer.length; i++){
      (answer[i] >= 1 ? cnt += 1 : null)
  }

  return cnt
}