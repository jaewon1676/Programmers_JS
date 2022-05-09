// https://programmers.co.kr/learn/courses/30/lessons/12914?language=javascript

function solution(n) {
  let dp = [0, 1, 2]
  if (n < 3) return dp[n] // n이 3 미만이면 바로 리턴
  for (let i=3; i<=n; i++){ // n이 3 이상이면 n까지 값을 추가해준다
      dp.push((dp[i-1] + dp[i-2]) % 1234567)
  }
  return dp[n]
}
/*
효진이는 한번에 1칸, 또는 2칸을 뛸 수 있으니
3칸을 뛰는 경우의 수는 1칸을 뛰는 경우의 수와 2칸을 뛰는 경우의 수를 더해주어야 한다.
4칸을 뛰는 경우의 수는 2칸을 뛰는 경우의 수와 3칸을 뛰는 경우의 수를 더해주어야 한다.
*/