/* global jQuery aly_gameInfo */

import updateHighScores from './update-high-scores';

const gameOver = () => {
  jQuery('#gameOverScreen').removeClass('hidden');
  jQuery('.gameOverCurrentScore').text(aly_gameInfo.score);
  updateHighScores(aly_gameInfo.score);
};

export default gameOver;
