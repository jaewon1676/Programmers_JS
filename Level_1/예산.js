// https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

function solution(d, budget) {
  let count = 0; // 최대 물품 지원 할 수 있는 부서 수 
  d.sort((a, b) => a - b) // 오름차순 정렬
  for (let i=0; i<d.length; i++){
      budget = budget - d[i] 
      count++;
      if (budget == 0) return count; // 예산이 0원이면 종료 
      else if (budget < 0) return (count - 1); // 예산이 마이너스면 마지막 부서에는 지원 할 수가 없으니 카운트 - 1 
  }
  return count;
}
// 최대한 많은 부서를 지원해야하기때문에 우리는 작은 수가 담긴 요소부터 빼줄 필요가 있습니다.
// 배열 d를 오름차순 정렬하여
// budget을 가장 작은 수인 배열 d[0]부터 순서대로 빼주며 카운트 해줍니다.
// 예산이 0이거나, 마이너스일 경우를 if문으로 처리를 해주면 됩니다😁