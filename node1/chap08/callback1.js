let obj = {
    count: 0,
    startTimer: function () {
        console.log(this.count);
        setInterval(function () {
            console.log(this.count++);
        }, 1000);
    }
}

obj.startTimer();