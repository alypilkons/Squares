/* global jQuery aly_gameInfo */

/**
 * @param {number} - number between 1 and 6
 * Add number representing square user has inputted into gameInfo object
 * Add square to DOM
 */
const addUserInput = index => {
  aly_gameInfo.promptInfo.userInput.push(index);
  jQuery('#userInputContainer').append(`<div class="color color${index}"></div>`);
};

export default addUserInput;
