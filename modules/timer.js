export class Timer {

    /**
     * constructs Timer
     * @param {number} countdown (in milliseconds)
     * @param {function} callback 
     */
    constructor(countdown, callback) {
        this.isTimerRunning = false;
        this.isCountdownFinished = false;
        this.remainingCountdown = countdown;
        this.originalCountdown = countdown;
        this.timer = 0;
        this.callback = callback;
    }

    /**
     * sets countdown
     * @param {number} countdown 
     */
    setCountdown(countdown) {
        this.originalCountdown = countdown;
    }

    /**
     * start timer
     */
    start() {
        return new Promise(resolve => {
            if (!this.isTimerRunning) {
                // reset countdown to original when countdown is finished
                if (this.isCountdownFinished) {
                    this.remainingCountdown = this.originalCountdown;
                }
                this.isTimerRunning = true;
                this.isCountdownFinished = false;

                this.timer = setInterval(() => {
                    this.countdown();
                    if (this.isCountdownFinished) {
                        resolve();
                    }
                }, 1000);
            }
        })
    }

    /**
     * pause timer
     */
    pause() {
        if (this.isTimerRunning) {
            this.isTimerRunning = false;
            this.timer = clearInterval(this.timer);
        }
    }

    /**
     * counts down the time
     */
    countdown() {
        if (this.remainingCountdown >= 0) {
            console.log(this.remainingCountdown);
            // do something with the current countdown
            this.callback(this.remainingCountdown);
        }
        else {
            // reset countdown
            console.log('Timer finished');
            this.isTimerRunning = false;
            this.isCountdownFinished = true;
            this.remainingCountdown = this.originalCountdown;

            // clear timer
            clearInterval(this.timer);
        }

        // subtracts 1 second from the countdown
        this.remainingCountdown -= 1000;
    }
}
