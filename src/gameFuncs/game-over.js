/* global jQuery aly_gameInfo */

const gameOver = () => {
  jQuery('#gameOverScreen').removeClass('hidden');
  jQuery('.gameOverCurrentScore').text(aly_gameInfo.score);
};

export default gameOver;
