// https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript

function solution(absolutes, signs) {
    var answer = 0
    for(var i=0; i<absolutes.length; i++){
        if (signs[i] === false){
            answer = answer - absolutes[i]
        }
        else{
            answer = answer + absolutes[i]
        }
    }
    // 주석 추가 테스트
    return answer;
}