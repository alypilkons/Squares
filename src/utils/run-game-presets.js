/* global aly_gameInfo */

const runGamePresets = () => {
  aly_gameInfo.level = 2;
  aly_gameInfo.score = 0;
  aly_gameInfo.tutorial = false;
  aly_gameInfo.promptInfo = {
    prompt: null,
    promptAnswer: null,
    userInput: []
  };
};

export default runGamePresets;
