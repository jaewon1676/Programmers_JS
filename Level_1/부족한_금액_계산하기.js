// https://programmers.co.kr/learn/courses/30/lessons/82612?language=javascript

function solution(price, money, count) {
  let sum_price = 0; // 놀이기구의 이용로의 합 
  for (let i = 1; i <= count; i++){
      sum_price += i * price
  }
  if (sum_price <= money){
      return 0;
  }
  return sum_price - money;
}