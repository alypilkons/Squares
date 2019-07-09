/* global jQuery aly_gameInfo */

const removeUserInput = () => {
  aly_gameInfo.promptInfo.userInput.pop();
  jQuery('#userInputContainer').children().last().remove();
};

export default removeUserInput;
