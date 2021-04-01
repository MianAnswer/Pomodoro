'use strict';

import { Pomodoro } from './modules/pomodoro.js';

function init() {
    var pomodoro = new Pomodoro(updateCountdown);

    document.getElementById('startBtn').addEventListener('click', ()=> {pomodoro.startCountdown();});
    document.getElementById('pauseBtn').addEventListener('click', ()=> {pomodoro.pauseCountdown();});
}

function updateCountdown(timeElapsed) {
    console.log("timeElapsed: " + timeElapsed)
    var minutes = (Math.floor(timeElapsed / 60000)).toString().padStart(2, '0');
    var seconds = ((timeElapsed / 1000) % 60).toString().padStart(2, '0');
    document.getElementById('countdown').innerHTML = minutes + ':' + seconds;
}

init();