/* global jQuery aly_gameInfo */

// OUTDATED - CURRENTLY NOT BEING USED IN ANY MODULES

const resetUserInputContainer = () => {
  jQuery('#userInputContainer').empty();

  let inputHTML = '';
  aly_gameInfo.promptInfo.userInput.forEach((e) => {
    inputHTML += `<div class="color color${e}"></div>`;
  });
  jQuery('#userInputContainer').append(inputHTML);
};

export default resetUserInputContainer;
