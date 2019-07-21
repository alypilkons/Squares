/* global jQuery aly_gameInfo */

import gameOver from './game-over.js';

const $timer = jQuery('#timerContainer .timer');

const startTimer = () => {
  $timer.text('45');
  aly_gameInfo.timeLeftCheck = setInterval(() => {
    let currentTimeLeft = Number($timer.text());
    if (currentTimeLeft > 0) {
      let newTimeLeft = currentTimeLeft - 1;
      $timer.text(newTimeLeft);
    } else {
      clearInterval(aly_gameInfo.timeLeftCheck);
      gameOver();
    }
  }, 1000);
};

export default startTimer;
