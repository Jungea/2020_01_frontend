let num = 0;

function printTime() {
    console.log(new Date());
    num++;

    if (num == 10)
        clearInterval(id);
}

let id = setInterval(printTime, 1000);
