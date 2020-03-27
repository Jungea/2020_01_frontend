/**
 * 학생수와 페이지 크기가 각각 주어졌을 때,
 * 페이지 수를 계산해서 출력
 */

let studentCount = 31;
let pageSize = 10;

console.log(Math.ceil(studentCount / pageSize) + " 페이지");
