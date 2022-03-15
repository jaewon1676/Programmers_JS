function solution(n){
    
    for (let i = 1; i < n.length ; i++){
        
        for (let j = 0; j <= i; j++){
            if (j == 0){ // 행의 첫번째 열을 구한다.
                n[i][j] = n[i-1][j] + n[i][j]
            }
            else if (j == i){ // 행의 마지막 열을 구한다. 
                n[i][j] = n[i-1][j-1] + n[i][j]
            }
            else { // 행의 중간값을 구한다.
                n[i][j] += (Math.max(n[i-1][j-1], n[i-1][j]))
            }
        }
    }
    let answer = Math.max(...n[n.length - 1])

    return answer
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]	))