/* global aly_gameInfo */

const updateLevel = () => {
  let score = aly_gameInfo.score;
  if (score > 20 && score < 60) aly_gameInfo.level = 2;
  if (score >= 60 && score < 100) aly_gameInfo.level = 3;
  if (score >= 100 && score < 140) aly_gameInfo.level = 4;
  if (score >= 140 && score < 180) aly_gameInfo.level = 5;
  if (score >= 180 && score < 220) aly_gameInfo.level = 6;
  if (score >= 220 && score < 250) aly_gameInfo.level = 7;
  if (score >= 250) aly_gameInfo.level = 8;
};

export default updateLevel;