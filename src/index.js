/* global jQuery aly_gameInfo */

import './main.scss';

import gameConstraints from './utils/game-constraints.js';
import runGamePresets from './utils/run-game-presets';

import addUserInput from './gameFuncs/add-user-input.js';
import removeUserInput from './gameFuncs/remove-user-input.js';
import checkUserAnswer from './gameFuncs/check-user-answer.js';
import newPrompt from './gameFuncs/new-prompt';
import VPtoggleCheck from './gameFuncs/settings/vp-toggle-check';
import runTutorial from './gameFuncs/run-tutorial';
import returnToMenu from './gameFuncs/return-to-menu';
import startTimer from './gameFuncs/start-timer';

window.aly_gameInfo = {};
aly_gameInfo.VPtoggle = 'purple';

// set default properties on aly_gameInfo object
runGamePresets();

jQuery(document).ready(() => {
  /************************************************************************************
  /******************************* CLICK EVENTS ****************************************
  *************************************************************************************/

  // ************* EASY, MEDIUM, OR HARD BUTTONS FROM MENU - START GAME ************** //
  jQuery(document).on('click', '.playGame', (e) => {
    // adjust level
    aly_gameInfo.level = 1;

    // hide menu
    jQuery('#openScreen').addClass('hidden');

    // check settings
    VPtoggleCheck();

    // reset score
    aly_gameInfo.score = 0;
    jQuery('#scoreContainer .score-number').text('0');

    // START GAME
    startTimer();
    newPrompt();
  });

  // ************ USER CLICKS 'PLAY AGAIN' AFTER GETTING GAME OVER ************** //
  jQuery(document).on('click', '.playAgainBtn', () => {
    // adjust level
    aly_gameInfo.level = 1;

    // hide game over screen
    jQuery('#gameOverScreen').addClass('hidden');

    // reset score
    aly_gameInfo.score = 0;
    jQuery('#scoreContainer .score-number').text('0');

    // START GAME
    startTimer();
    newPrompt();
  });

  // ************* USER CLICKS 'HOW TO PLAY' FROM MENU ************************** //
  jQuery(document).on('click', '#howToPlayBtn', (e) => runTutorial());

  // ************* USER CLICKS 'SQUARES' LOGO - OPEN BACK UP MENU *************** //
  jQuery(document).on('click', '#title h1', () => returnToMenu());

  // ********* USER CLICKS BACK-T0-MENU FROM GAME OVER SCREEN - OPEN MENU ******** //
  jQuery(document).on('click', '.goToMenuBtn', () => returnToMenu());

  // ***********  USER CLICKS 'SETTINGS' **************************************** //
  jQuery(document).on('click', '#settingsBtn', () => {
    jQuery('#settingsScreen').removeClass('hidden');
  });

  // ************ USER CLICKS TO TOGGLE VIOLET/PURPLE IN SETTINGS ****************** //
  jQuery(document).on('click', '.toggleColor span', (e) => {
    const $clicked = jQuery(e.target.closest('.toggleColor'));
    if ($clicked.hasClass('selected') === false) {
      if ($clicked.hasClass('violet')) {
        aly_gameInfo.VPtoggle = 'violet';
        jQuery('.toggleColor.purple').removeClass('selected');
        jQuery('.toggleColor.violet').addClass('selected');
      } else if ($clicked.hasClass('purple')) {
        aly_gameInfo.VPtoggle = 'purple';
        jQuery('.toggleColor.violet').removeClass('selected');
        jQuery('.toggleColor.purple').addClass('selected');
      }
    }
  });

  // ****************************** USER PRESSES A KEY ************************ //
  jQuery('html').keyup(event => {
    const key = event.key;
    let index = null;
    let letter6 = aly_gameInfo.VPtoggle === 'purple' ? 'p' : 'v';
    if (event.key === 'Backspace') {
      removeUserInput();
    } else if (event.key === 'Enter') {
      checkUserAnswer();
    } else {
      switch (key) {
        // r
        case 'r':
          index = 1;
          break;
        // o
        case 'o':
          index = 2;
          break;
        // y
        case 'y':
          index = 3;
          break;
        // g
        case 'g':
          index = 4;
          break;
        // b
        case 'b':
          index = 5;
          break;
        // v
        case letter6:
          index = 6;
          break;
        default:
          //
      }
      if (index && aly_gameInfo.promptInfo.userInput.length < gameConstraints.maxUserInput) {
        addUserInput(index);
      }
    }
  }); // end keypress event
}); // end document.ready event
