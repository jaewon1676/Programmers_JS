// https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript#

function solution(participant, completion) {
    var answer = '';
    for (let i=0; i<participant.length; i++){
        for (let j=0; j<completion.length; j++){
            if (participant[i] === completion[j]) {
                console.log(participant,completion)
                participant.splice(i, 1)
                completion.splice(j, 1)
                i--;
                j--;
                console.log(participant,completion)
                break;
            } 
        }
    }
    
    return participant[0]
}