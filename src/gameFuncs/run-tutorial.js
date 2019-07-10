/* global jQuery aly_gameInfo */

import resetPromptInfo from './reset-prompt-info';
import createPromptSequence from './create-prompt-sequence';
import tutorialText from '../utils/tutorial-text';

const runTutorial = () => {
  let counter = 0;
  jQuery('body').prepend(`
  <div id="tutorial">
    <div id="tutorial-text">${tutorialText[counter]}</div>
    <div id="tutorial-button-container">
      <div id="tutorial-button-back" class="tutorial-button hidden">Back</div>
      <div id="tutorial-button-continue" class="tutorial-button">Continue</div>
    </div>
  </div>`);

  let runTutorialStep = (step) => {
    jQuery('#promptContainer').empty();
    jQuery('#userInputContainer').empty();
    resetPromptInfo();

    counter === 1 && jQuery('#tutorial-button-back').removeClass('hidden');

    if (counter === 2) {
      createPromptSequence([3, 1]);
    }

    if (counter === 3) {
      createPromptSequence([4, 3]);
    }

    if (counter === 4) {
      createPromptSequence([5, 2]);
    }

    if (counter === 5) {
      createPromptSequence([6, 6]);
    }

    if (counter === 6) {
      createPromptSequence([2, 4]);
    }

    if (counter === 7) {
      createPromptSequence([5, 5, 4, 1, 3]);
    }

    if (counter === 8) {
      jQuery('#tutorial-button-continue').remove();
      jQuery('#tutorial-button-container').append(`<div id="tutorial-button-menu" class="tutorial-button">Menu</div>`);
    }
    jQuery('#tutorial-text').empty().append(tutorialText[counter]);
  };

  /* *** MENU BUTTON CLICK ***** */
  jQuery(document).on('click', '#tutorial-button-menu', () => {
    aly_gameInfo.tutorial = false;
    jQuery('#openScreen').removeClass('hidden');
    jQuery('#tutorial').remove();
  });

  /* *** CONTINUE BUTTON CLICK ***** */
  jQuery(document).on('click', '#tutorial-button-continue', () => {
    counter += 1;
    runTutorialStep(counter);
  });

  /* *** BACK BUTTON CLICK ***** */
  jQuery(document).on('click', '#tutorial-button-back', () => {
    counter -= 1;
    runTutorialStep(counter);
  });
};

export default runTutorial;
