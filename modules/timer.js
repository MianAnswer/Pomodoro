export class Timer {

    constructor(startTime, callback) {
        this.startTime = startTime;
        this.difference = 0;
        this.time = 0;
        this.timer = 0;
        this.callback = callback;
    }

    start() {
        if (!this.timer) {
            this.time = Date.now();
            this.startTime -= this.difference;
            this.timer = setInterval(()=> {
                this.countdown();
            }, 1000);
        }
    }

    pause() {
        if (this.timer) {
            this.timer = clearInterval(this.timer);
        }
    }

    countdown() {
        this.difference = Date.now() - this.time;
        this.difference = Math.floor(this.difference / 1000);
console.log(this.difference);
        if (this.difference <= this.startTime) {
            this.callback(this.startTime - this.difference);
        }
        else {
            console.log('Timer finished');
            clearInterval(this.timer);
        }
    }
}
