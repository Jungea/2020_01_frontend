let s = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
let a = [];

for (let i = 0; i < s.length; ++i) {
    let index = s[i].search(/[aeiou]/i);
    if (index != -1)
        a.push(i);
}

console.log(a.toString());
