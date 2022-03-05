// https://programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
    var answer = [];
    for (let i = 0; i < operations.length; i++) {
        
        if (operations[i][0] == 'I') {
            let m = operations[i].substring(2, operations[i].length)
            answer.push(m)
        }
        
        // if 최댓값 삭제
        else if (operations[i][0] == 'D' && operations[i][2] == '1' && operations.length > 0) {
            answer.pop()
        }
        
        // if 최솟값 삭제
        else if (operations[i][0] == 'D' && operations[i][2] == '-' && operations[i][3] == '1' && operations.length > 0){
            
            answer.shift()            
        }
        
        answer.sort((a, b) => {return a - b});
    }
    
    if (answer.length == 0) return [0, 0]
    else {
        return [parseInt(answer.pop()), parseInt(answer.shift())];
    }     

}