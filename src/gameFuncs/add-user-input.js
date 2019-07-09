/* global jQuery aly_gameInfo */

const addUserInput = index => {
  aly_gameInfo.promptInfo.userInput.push(index);
  jQuery('#userInputContainer').append(`<div class="color color${index}"></div>`);
};

export default addUserInput;
