let x = "999a9", y = "99.9a9";

let a = parseInt(x);
let b = parseInt(y);
console.log("a = "+a+", b = "+b);

 a = parseFloat(x);
 b = parseFloat(y);
 console.log("a = "+a+", b = "+b);
//parseInt와 ParseFloat은 문자 전까지 변환

 a = Number(x);
 b = Number(y);
 console.log("a = "+a+", b = "+b);