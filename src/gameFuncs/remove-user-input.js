/* global jQuery aly_gameInfo */

/**
 * User presses backspace to remove a square - remove from gameInfo object and from DOM
 */
const removeUserInput = () => {
  aly_gameInfo.promptInfo.userInput.pop();
  jQuery('#userInputContainer').children().last().remove();
};

export default removeUserInput;
