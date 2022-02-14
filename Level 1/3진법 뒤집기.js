// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    var answer = n.toString(3).split('').reverse().join('')

    return parseInt(answer, 3)
}