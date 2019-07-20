/* global jQuery */

import resetPromptInfo from './reset-prompt-info';
import createPromptSequence from './create-prompt-sequence';

const newPrompt = () => {
  resetPromptInfo();
  jQuery('#promptContainer').empty();
  jQuery('#userInputContainer').empty();
  createPromptSequence();
};

export default newPrompt;
