/* global jQuery */

import gameOver from './game-over.js';

const $timer = jQuery('#timerContainer .timer');

const startTimer = () => {
  $timer.text('45');
  const timeLeftCheck = setInterval(() => {
    let currentTimeLeft = Number($timer.text());
    if (currentTimeLeft > 0) {
      let newTimeLeft = currentTimeLeft - 1;
      $timer.text(newTimeLeft);
    } else {
      clearInterval(timeLeftCheck);
      gameOver();
    }
  }, 1000);
};

export default startTimer;
