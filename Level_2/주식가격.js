// https://programmers.co.kr/learn/courses/30/lessons/42584?language=java

function solution(n){
    let result = []
    for (let i = 0; i < n.length; i++){
        let stack = n[i] // 현재 주식 가격
        let j = i + 1 // 비교 할 수의 index
        let temp = 0; // 가격이 떨어지지 않은 시간

        while(j < n.length + 1){ // j < 6 이면 진행
            if (stack <= n[j]){ // 1. 나의 주식 가격이 다음 주식 가격보다 작거나 같으면 통과.
                temp += 1;
                j += 1;
                continue; // if문 끝냄 while문으로
            }
            else if (temp == 0 && stack > n[j]){ // 2. 나의 주식 가격이 다음 주식 가격보다 크면 종료.
                temp = 1;
                result.push(temp);
                temp = 0;
                break; // while문 끝냄
            }
            else if (temp == 0 && j == n.length){ // 3. 마지막 주식이면 0 반환.
                console.log(j)
                result.push(temp);
                break; // while문 끝냄
            }
            result.push(temp)
            temp = 0;
            break;
        }
    }
    return result;
}

console.log(solution([1, 2, 3, 2, 3]))


/* 풀이 과정
1. prices의 n번째에 있는 주식 가격이 n+1, n+2 ... 보다 큰지 비교하여 몇초동안 가격이 떨어지지 않는지 계산 해야한다.
2. prices 배열 크기만큼 for문을 돌리고, n[i] 값은 stack에 저장, 비교대상인 j는 i + 1 값을 넣어준다.
3. while문은 배열 크기만큼 진행한다., 세가지 조건의 if문을 계산했다.
4. 나의 주식이 다음 주식보다 작거나 같은 경우, 다음 주식 가격보다 큰 경우, 마지막 주식일 경우의 조건을 계산 하여 나온 값을 결과 배열에 push 해준다.
*/