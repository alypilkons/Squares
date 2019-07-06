/* global aly_gameInfo */

import resetUserInputContainer from './reset-user-input';

const removeUserInput = () => {
  console.log('removing...');
  aly_gameInfo.promptInfo.userInput.pop();
  resetUserInputContainer();
};

export default removeUserInput;
