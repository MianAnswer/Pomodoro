'use strict';

import { Timer } from './modules/timer.js';

var timer = new Timer((0.25 * 60), updateCountdown);

function updateCountdown(timeElapsed) {
    var minutes = (Math.floor(timeElapsed / 60)).toString().padStart(2, '0');
    var seconds = (timeElapsed % 60).toString().padStart(2, '0');
    document.getElementById('countdown').innerHTML = minutes + ':' + seconds;
}

document.getElementById('startBtn').addEventListener('click', ()=> {timer.start();});
document.getElementById('pauseBtn').addEventListener('click', ()=> {timer.pause();});