/* global jQuery aly_gameInfo */

import gameConstraints from './utils/game-constraints.js';

import addUserInput from './gameFuncs/add-user-input.js';
import removeUserInput from './gameFuncs/remove-user-input.js';
import checkUserAnswer from './gameFuncs/check-user-answer.js';
import createPromptSequence from './gameFuncs/create-prompt-sequence.js';

window.aly_gameInfo = {};

aly_gameInfo.level = 2;
aly_gameInfo.score = 0;
aly_gameInfo.promptInfo = {
  prompt: null,
  promptAnswer: null,
  userInput: []
};

jQuery(document).ready(() => {

  jQuery(document).on('click', '.playGame', (e) => {
    const level = jQuery(e.target).attr('id');
    level === 'playMedium' ? aly_gameInfo.level = 3 : level === 'playHard' ? aly_gameInfo.level = 5 : aly_gameInfo.level = 1;

    jQuery('#openScreen').addClass('hidden');

    // **** START GAME **** //
    createPromptSequence();
    // ******************** //
  });

  /****
   * KEY PRESSES
  *****/
  jQuery('html').keyup(event => {
    const key = event.key;
    let index = null;
    console.log(event.key);
    if (event.key === 'Backspace') {
      removeUserInput();
    } else if (event.key === 'Enter') {
      checkUserAnswer();
    } else {
      switch (key) {
        // r
        case 'r':
          index = 1;
          break;
        // o
        case 'o':
          index = 2;
          break;
        // y
        case 'y':
          index = 3;
          break;
        // g
        case 'g':
          index = 4;
          break;
        // b
        case 'b':
          index = 5;
          break;
        // v
        case 'v':
          index = 6;
          break;
        default:
          //
      }
      if (index && aly_gameInfo.promptInfo.userInput.length < gameConstraints.maxUserInput) {
        addUserInput(index);
      }
    }
  }); // ** END KEY PRESS EVENT ** //
});
