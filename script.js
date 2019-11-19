//factorial

function factorial (num) {
    var value = 1;
    for (var i = 1; i <= num; i++)
        value = value * i;
    return value;
}

console.log(factorial(10));




// runner

var runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            _this.$$tasks.forEach(function (cb) {
                if (cb !== 'function') {
                    return cb ();
                }
            })
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
}

runner.add(function ()  {
    console.log('Hello, world');
})

runner.setSpeed(2000);

