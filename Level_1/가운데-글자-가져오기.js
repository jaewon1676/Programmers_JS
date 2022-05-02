// https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript

function solution(s) {
    var answer = '';
    
    if (s.length % 2 == 0 ) { // 짝수일 경우,
        answer = s[s.length / 2 - 1] + s[s.length / 2];
    } else {
        answer = s[parseInt(s.length / 2)]; // 홀수일 경우
    }
    return answer;
}