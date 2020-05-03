function add(a, b) {
    return a + b;
}

console.log(add(3, 4));

console.log(add(3, "4"));
console.log(add("3", 4));
console.log(add("3", "4"));

console.log(add(3)); //3 + undefined => NaN
console.log(add())

console.log(3 / 0); //Infinity
console.log(3 / null); //Infinity
console.log(3 / "a"); //NaN
console.log(3 / "3"); //1

