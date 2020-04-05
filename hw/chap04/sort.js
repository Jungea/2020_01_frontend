let a = [];

for (let i = 0; i < 101; ++i) {
    a.push(Math.floor(Math.random() * 100 + 1));
}

a.sort();
console.log(a);

a.sort(function (a, b) { return a - b });
console.log(a);
