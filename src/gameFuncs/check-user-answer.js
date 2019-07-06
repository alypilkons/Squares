/* global jQuery aly_gameInfo */

import updateScore from './update-score.js';
import newPrompt from './new-prompt.js';

const checkUserAnswer = () => {
  // remove unnecessary nulls from array
  aly_gameInfo.promptInfo.promptAnswer = aly_gameInfo.promptInfo.promptAnswer.filter((e) => {
    return e !== null;
  });

  // breaks when user input is blank but answer key is 'null'
  console.log('user input');
  console.log(aly_gameInfo.promptInfo.userInput);
  console.log('prompt answer');
  console.log(aly_gameInfo.promptInfo.promptAnswer);
  let allCorrect = true;
  if (aly_gameInfo.promptInfo.userInput.length === aly_gameInfo.promptInfo.promptAnswer.length) {
    for (let i = 0; i < aly_gameInfo.promptInfo.userInput.length; i++) {
      if (aly_gameInfo.promptInfo.userInput[0] !== aly_gameInfo.promptInfo.promptAnswer[0]) {
        allCorrect = false;
      }
    }
  } else {
    allCorrect = false;
  }
  console.log('all correct-' + allCorrect);
  if (allCorrect) {
    updateScore(true);
    jQuery('#userInputContainer').addClass('correct');
  } else {
    updateScore(false);
    jQuery('#userInputContainer').addClass('incorrect');
  }
  setTimeout(() => {
    jQuery('#userInputContainer').removeClass();
    newPrompt();
  }, 300);
};

export default checkUserAnswer;
