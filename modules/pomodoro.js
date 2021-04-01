import { Timer } from './timer.js';

export class Pomodoro {
    constructor(callback) {
        // focus times (25 minutes in milliseconds - default)
        this.focusTime = 1500000;
        // short break (5 minutes in milliseconds - default)
        this.shortBreakTime = 300000;
        // long break (10 minutes in milliseconds - default)
        this.longBreakTime = 600000;
        // count
        this.pomodoroCount = 0;
        // timer
        this.timer = new Timer(this.focusTime, callback);
    }

    startCountdown() {
        this.timer.start().then(() => {
            ++this.pomodoroCount;
            console.log("Pomodoro Count: " + this.pomodoroCount);
        });
    }

    pauseCountdown() {
        this.timer.pause();
    }
}