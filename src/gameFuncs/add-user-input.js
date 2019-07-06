/* global aly_gameInfo */

import resetUserInputContainer from './reset-user-input.js.js';

const addUserInput = index => {
  aly_gameInfo.promptInfo.userInput.push(index);
  resetUserInputContainer();
};

export default addUserInput;
