// https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript#fn1

function solution(lottos, win_nums) {
    var answer = [];
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    // lottos배열을 순회하며 당첨배열에 있는 수를 return 하고 총 개수를 correct에 저장
    
    const zeros = lottos.filter(lotto => lotto === 0).length;
    // lottos배열을 순회하며 0인 총 개수를 zeros에 저장
    
    let min = 7-correct >= 6 ? 6 : 7-correct;

    let max = min-zeros < 1 ? 1 : min-zeros;
    
    answer = [max,min]
    
    return answer;
}