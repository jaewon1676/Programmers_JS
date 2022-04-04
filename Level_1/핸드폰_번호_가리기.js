// https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

function solution(phone_number) {
  // phone_number의 뒤 네자리만 번호를 넣고 나머지는 *로 넣는다.
  let answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}