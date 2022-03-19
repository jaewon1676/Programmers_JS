function solution(arr){
    const n = arr.length - 1
    const dp = []

    for (let i = n; i >= 0; i--){ // 가장 밑 행부터 탐색하여 올라간다.
        dp[i] = []
        for (let j = i; j >= 0; j--){ // 가장 오른쪽 열부터 탐색하여 이동한다.
            if (i == n){
                dp[i][j] = arr[i][j]
                continue;
            }
            console.log(dp)
            dp[i][j] = arr[i][j] + (Math.max(dp[i+1][j], dp[i+1][j+1])) // 자신과 인접 한 밑 두 열중 큰 값을 자신에게 더해준다.
        }
    }
    return dp[0][0]
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]	))