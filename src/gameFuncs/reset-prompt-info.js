/* global aly_gameInfo */

const resetPromptInfo = () => {
  aly_gameInfo.promptInfo.prompt = null;
  aly_gameInfo.promptInfo.promptAnswer = null;
  aly_gameInfo.promptInfo.userInput = [];
};

export default resetPromptInfo;
