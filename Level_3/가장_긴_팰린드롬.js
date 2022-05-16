// https://programmers.co.kr/learn/courses/30/lessons/12904?language=javascript

function solution(s){
  for (let i=s.length; i>=1; i--){
      for (let j=0; j<=s.length-i; j++){ // 전체를 탐색하되, 가장 긴 길이부터 시작해서 1씩 내려간다.
          let ispalin = ispalindrome(s.slice(j, i+j)); 
                       // s 문자열의 index j 위치부터 i+j개의 문자열의 길이가 팰린드롬인지 확인한다.
          if(ispalin) return i
      }
  }
  return 1;
}
let ispalindrome = (s) => {
  let half = Math.floor(s.length / 2);
  
  for (let i=0; i<half; i++){
      if (s[i] !== s[s.length-1-i]) return false; 
      // s 문자열의 i와, i위치의 마지막 지점을 비교해줍니다.
  }
  return true;
}