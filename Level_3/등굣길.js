// https://programmers.co.kr/learn/courses/30/lessons/42898

function solution(m, n, pds) {
  const arr = Array.from(Array(n), () => Array(m).fill(1)) // n행 m열의 이차원배열
  pds.forEach(pd => {
    console.log(pd)
    const [x, y] = pd
    arr[x - 1][y - 1] = 0
  })
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (arr[i][j] !== 0) {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
      }
    }
  }
  console.log(arr)
  return arr[n - 1][m - 1] % 1000000007
}
console.log(solution(4, 3, [[2, 2]] ))