// https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>(b-a))

    for(var i=0; i<citations.length; i++){
        if (i < citations[i]){
            answer +=1;
        }
    }
    return answer;
}