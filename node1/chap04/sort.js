let a = [3, 4, 1, 2, 5, 11];

a.sort();
console.log(a);
//숫자 배열이더라도 정렬이 문자열 정렬로 된다.

a.sort(function (a, b) { return a - b });
console.log(a);
