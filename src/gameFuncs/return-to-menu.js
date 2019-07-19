/* global jQuery aly_gameInfo */

import VPtoggleCheck from './settings/vp-toggle-check';
import runGamePresets from '../utils/run-game-presets';

const returnToMenu = () => {
  // make sure all alternate screens are hidden
  jQuery('#tutorialScreen').addClass('hidden');
  jQuery('#settingsScreen').addClass('hidden');
  jQuery('#gameOverScreen').addClass('hidden');

  // show menu screen
  jQuery('#openScreen').removeClass('hidden');

  // game resets in case menu is open mid-game
  aly_gameInfo.timeLeftCheck && clearInterval(aly_gameInfo.timeLeftCheck);
  VPtoggleCheck();
  runGamePresets();
};

export default returnToMenu;
