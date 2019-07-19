/* global jQuery */

import resetPromptInfo from './reset-prompt-info';
import createPromptSequence from './create-prompt-sequence';
import startTimer from './start-timer';

const newPrompt = () => {
  resetPromptInfo();
  jQuery('#promptContainer').empty();
  jQuery('#userInputContainer').empty();
  createPromptSequence();
  startTimer();
};

export default newPrompt;
