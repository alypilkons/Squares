const answerKey = [
// PRIMARY - red, blue, & yellow only
{
    tiles: [1, 3],
    response: 2
  },
  {
    tiles: [1, 5],
    response: 6
  },
  {
    tiles: [3, 5],
    response: 4
  },

// SECONDARY - purple, orange, & green only
  {
    tiles: [2, 4],
    response: 3
  },
  {
    tiles: [4, 6],
    response: 5
  },
  {
    tiles: [2, 6],
    response: 1
  },

// COMBINATION - one primary color and one secondary color
  {
    tiles: [1, 2],
    response: 3
  },
  {
    tiles: [2, 3],
    response: 1
  },
  {
    tiles: [3, 4],
    response: 5
  },
  {
    tiles: [4, 5],
    response: 3
  },
  {
    tiles: [5, 6],
    response: 1
  },
  {
    tiles: [1, 6],
    response: 5
  },

// two colors opposite each other on the color wheel (ex. red and green)
  {
    tiles: [1, 4],
    response: null
  },
  {
    tiles: [2, 5],
    response: null
  },
  {
    tiles: [3, 6],
    response: null
  }
]

const gameInfo = {
  level: 1,
  prompt: null,
  promptAnswer: null
};

const userInput = [];

resetUserInputContainer = () => {
  jQuery('#userInputContainer').empty();
  let inputHTML = '';
  userInput.forEach((e) => {
    inputHTML += `<div class="color color${e}"></div>`;
  })
  jQuery('#userInputContainer').append(inputHTML);
}

const addUserInput = index => {
  userInput.push(index);
  resetUserInputContainer();
}

const removeUserInput = () => {
  console.log('removing...');
  userInput.pop();
  resetUserInputContainer();
}


const createPromptSequence = () => {
  const numOfTiles = gameInfo.level + 1;
  const tilesArr = [];
  for (let i = 0; i < numOfTiles; i++) {
    tilesArr.push(Math.floor(Math.random() * 6) + 1);
  }
  gameInfo.prompt = tilesArr;
  addPromptSequenceToPage(tilesArr);
  getAnswerArray();
}

const addPromptSequenceToPage = (sequence) => {
  let sequenceHTML = '';
  sequence.forEach((e) => {
    sequenceHTML += `<div class="color color${e}"></div>`;
  });
  jQuery('#promptContainer').append(sequenceHTML);
}

const checkUserAnswer = () => {
  // breaks when user input is blank but answer key is 'null'
  console.log('user input');
  console.log(userInput);
  console.log('prompt answer');
  console.log(gameInfo.promptAnswer);
  let allCorrect = true;
  if (userInput.length === gameInfo.promptAnswer.length) {
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[0] !== gameInfo.promptAnswer[0]) {
        allCorrect = false;
      }
    }
  } else {
    allCorrect = false;
  }
  console.log('all correct-' + allCorrect);
  if (allCorrect) {
    console.log('YOU GOT IT RIGHT!');
  } else {
    console.log('YOU GOT IT WRONG!');
  }
}

const getAnswerArray = () => {
  let i = 0;
  let answer = [];
  while (i < gameInfo.prompt.length - 1) {
    answer.push(twoTileAnswer(gameInfo.prompt[i], gameInfo.prompt[i + 1]));
    i++;
  }
  console.log('ANSWER ARRAY:');
  console.log(answer);
  gameInfo.promptAnswer = answer;
}

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
}

/****
 * KEY PRESSES
*****/
jQuery(document).ready(() => {
  jQuery(document).on('keypress', e => {
    const key = e.which;
    let index = null;
    console.log(key);
    switch (key) {
      // s
      case 115:
        index = 1;
        break;
      // d
      case 100:
        index = 2;
        break;
      // f
      case 102:
        index = 3;
        break;
      // j
      case 106:
        index = 4;
        break;
      // k
      case 107:
        index = 5;
        break;
      // l
      case 108:
        index = 6;
        break;
      default:
        //
    }
    if (index && userInput.length < 8) addUserInput(index);
  });
  $('html').keyup(e => {
    if (event.key === 'Backspace') {
      removeUserInput();
    }
    if (event.key === 'Enter') {
      checkUserAnswer();
    }
  });

});

createPromptSequence();