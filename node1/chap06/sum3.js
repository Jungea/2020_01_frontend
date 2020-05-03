function sum(msg, ...a) {
    console.log(msg);
    let result = 0;
    for (let i = 0; i < a.length; ++i)
        result += a[i];
    return result;
}

console.log(sum("hello", 1, 2, 3, 4));
