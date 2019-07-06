/* global jQuery aly_gameInfo */

import createPromptSequence from './create-prompt-sequence';

const resetPromptInfo = () => {
  aly_gameInfo.promptInfo.prompt = null;
  aly_gameInfo.promptInfo.promptAnswer = null;
  aly_gameInfo.promptInfo.userInput = [];
};

const newPrompt = () => {
  resetPromptInfo();
  jQuery('#promptContainer').empty();
  jQuery('#userInputContainer').empty();
  createPromptSequence();
};

export default newPrompt;
