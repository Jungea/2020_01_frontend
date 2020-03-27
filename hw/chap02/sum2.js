/**
 * 1 이상 55 이하의 모든 3의 배수를 더해서 화면에 출력
 */

let sum = 0;

for (let i = 1; i < 56; ++i) {
    if (i % 3 == 0) sum += i;
}

console.log("합 = " + sum)
