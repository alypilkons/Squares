/* global jQuery localStorage */

import getDate from '../utils/get-date';

const updateHighScores = (score) => {
  jQuery('#highScoresAllTimeTable').empty();
  score = Number(score);
  const date = getDate();
  let currentScore = `${date}||${score}`;
  let scoresString = '';
  let scoresArray = [];
  if (localStorage.getItem('highScores')) {
    scoresString = localStorage.getItem('highScores');
    scoresArray = scoresString.split('&');
    let scoreAdded = false;
    for (let i = 0; i < scoresArray.length; i++) {
      if (score > Number(scoresArray[0].split('||')[1])) {
        scoresArray.splice(i, 0, currentScore);
        scoreAdded = true;
        break;
      }
    }
    if (!scoreAdded && scoresArray.length < 7) {
      scoresArray.push(currentScore);
    }
  } else {
    scoresArray = [currentScore];
  }

  console.log(scoresArray);

  let highScoreHTML = '';
  for (let j = 0; j < scoresArray.length; j++) {
    highScoreHTML += `<div class="highScoreSlot">
      <span class="highScoreDate">${scoresArray[j].split('||')[0]}</span>
      <span class="highScoreValue">${scoresArray[j].split('||')[1]}</span>
    </div>`;
  }
  jQuery('#highScoresAllTimeTable').append(highScoreHTML);
  scoresString = scoresArray.join('&');

  console.log(scoresString);
  localStorage.setItem('highScores', scoresString);
};

export default updateHighScores;