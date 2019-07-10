/* global jQuery aly_gameInfo */

import answerKey from '../utils/answer-key.js';

const twoTileAnswer = (tile1, tile2) => {
  // tiles are same, user input should be that same color as well
  if (tile1 === tile2) return tile1;
  let response = null;
  for (let i = 0; i < answerKey.length; i++) {
    if ((answerKey[i].tiles[0] === tile1 && answerKey[i].tiles[1] === tile2) ||
      (answerKey[i].tiles[0] === tile2 && answerKey[i].tiles[1] === tile1)) {
      response = answerKey[i].response;
    }
  }
  return response;
};

const getAnswerArray = () => {
  let i = 0;
  let answer = [];
  while (i < aly_gameInfo.promptInfo.prompt.length - 1) {
    answer.push(twoTileAnswer(aly_gameInfo.promptInfo.prompt[i], aly_gameInfo.promptInfo.prompt[i + 1]));
    i++;
  }
  console.log('ANSWER ARRAY:');
  console.log(answer);
  aly_gameInfo.promptInfo.promptAnswer = answer;
};

const addPromptSequenceToPage = (sequence) => {
  let sequenceHTML = '';
  sequence.forEach((e) => {
    sequenceHTML += `<div class="color color${e}"></div>`;
  });
  jQuery('#promptContainer').append(sequenceHTML);
};

// IF ARR IS INCLUDED, HAS TO BE AN ARRAY OF NUMBERS 1-6.
// ADDED THIS OVERRIDE FOR TUTORIAL LEVEL
const createPromptSequence = (arr = null) => {
  if (arr !== null) {
    aly_gameInfo.promptInfo.prompt = arr;
    addPromptSequenceToPage(arr);
  } else {
    const numOfTiles = aly_gameInfo.level + 1;
    const tilesArr = [];
    for (let i = 0; i < numOfTiles; i++) {
      tilesArr.push(Math.floor(Math.random() * 6) + 1);
    }
    aly_gameInfo.promptInfo.prompt = tilesArr;
    addPromptSequenceToPage(tilesArr);
  }
  getAnswerArray();
};

export default createPromptSequence;
