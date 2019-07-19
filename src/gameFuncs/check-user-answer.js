/* global jQuery aly_gameInfo */

import updateScore from './update-score.js';
import newPrompt from './new-prompt.js';

const checkUserAnswer = () => {
  // remove unnecessary nulls from array
  aly_gameInfo.promptInfo.promptAnswer = aly_gameInfo.promptInfo.promptAnswer.filter((e) => {
    return e !== null;
  });

  let allCorrect = true;
  // check that user input is same length as answer - if it isn't, user's answer is incorrect
  if (aly_gameInfo.promptInfo.userInput.length === aly_gameInfo.promptInfo.promptAnswer.length) {

    // loop through each element in user's answer
    for (let i = 0; i < aly_gameInfo.promptInfo.userInput.length; i++) {

      // check that element in user input matches element of that index in correct answer - if not, user's answer is incorrect
      if (aly_gameInfo.promptInfo.userInput[0] !== aly_gameInfo.promptInfo.promptAnswer[0]) {
        allCorrect = false;
      }
    }
  } else {
    allCorrect = false;
  }

  /***
  USER'S ANSWER IS CORRECT
  ***/
  if (allCorrect) {
    updateScore(true);
    jQuery('#userInputContainer').addClass('correct');
    setTimeout(() => {
      jQuery('#userInputContainer').removeClass();
      if (aly_gameInfo.tutorial === false) {
        newPrompt();
      }
    }, 300);
  /***
  USER'S ANSWER IS NOT CORRECT
  ****/
  } else {
    /* updateScore(false); */
    jQuery('#userInputContainer').addClass('incorrect');
    setTimeout(() => {
      jQuery('#userInputContainer').removeClass();
    }, 300);
  }
};

export default checkUserAnswer;
