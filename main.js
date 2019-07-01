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
  level: 2,
  score: 0,
  promptInfo: {
    prompt: null,
    promptAnswer: null,
    userInput: []
  }
};


/****
 * KEY PRESSES
*****/
jQuery(document).ready(() => {

const resetUserInputContainer = () => {
    jQuery('#userInputContainer').empty();
    let inputHTML = '';
    gameInfo.promptInfo.userInput.forEach((e) => {
      inputHTML += `<div class="color color${e}"></div>`;
    })
    jQuery('#userInputContainer').append(inputHTML);
  }
  
  const addUserInput = index => {
    gameInfo.promptInfo.userInput.push(index);
    resetUserInputContainer();
  }
  
  const removeUserInput = () => {
    console.log('removing...');
    gameInfo.promptInfo.userInput.pop();
    resetUserInputContainer();
  }

  const createPromptSequence = () => {
    const numOfTiles = gameInfo.level + 1;
    const tilesArr = [];
    for (let i = 0; i < numOfTiles; i++) {
      tilesArr.push(Math.floor(Math.random() * 6) + 1);
    }
    gameInfo.promptInfo.prompt = tilesArr;
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

  const updateScore = (isCorrect) => {
    if (isCorrect) {
      gameInfo.score += 1;
    }
    jQuery('#scoreContainer span').text(gameInfo.score);
  }

  const resetPromptInfo = () => {
    gameInfo.promptInfo.prompt = null;
    gameInfo.promptInfo.promptAnswer = null;
    gameInfo.promptInfo.userInput = [];
  }

  const newPrompt = () => {
    resetPromptInfo();
    
    jQuery('#promptContainer').empty();
    jQuery('#userInputContainer').empty();

    createPromptSequence();
  }
  
  const checkUserAnswer = () => {
    // remove unnecessary nulls from array
    gameInfo.promptInfo.promptAnswer = gameInfo.promptInfo.promptAnswer.filter((e) => {
      return e !== null;
    });

    // breaks when user input is blank but answer key is 'null'
    console.log('user input');
    console.log(gameInfo.promptInfo.userInput);
    console.log('prompt answer');
    console.log(gameInfo.promptInfo.promptAnswer);
    let allCorrect = true;
    if (gameInfo.promptInfo.userInput.length === gameInfo.promptInfo.promptAnswer.length) {
      for (let i = 0; i < gameInfo.promptInfo.userInput.length; i++) {
        if (gameInfo.promptInfo.userInput[0] !== gameInfo.promptInfo.promptAnswer[0]) {
          allCorrect = false;
        }
      }
    } else {
      allCorrect = false;
    }
    console.log('all correct-' + allCorrect);
    if (allCorrect) {
      updateScore(true);
      jQuery('#userInputContainer').addClass('correct');
    } else {
      updateScore(false)
      jQuery('#userInputContainer').addClass('incorrect');
    }
    setTimeout(() => {
      jQuery('#userInputContainer').removeClass();
      newPrompt();
    }, 300);
  }
  
  const getAnswerArray = () => {
    let i = 0;
    let answer = [];
    while (i < gameInfo.promptInfo.prompt.length - 1) {
      answer.push(twoTileAnswer(gameInfo.promptInfo.prompt[i], gameInfo.promptInfo.prompt[i + 1]));
      i++;
    }
    console.log('ANSWER ARRAY:');
    console.log(answer);
    gameInfo.promptInfo.promptAnswer = answer;
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



  jQuery(document).on('keypress', e => {
    const key = e.which;
    let index = null;
    console.log(key);
    switch (key) {
      // r
      case 114:
        index = 1;
        break;
      // o
      case 111:
        index = 2;
        break;
      // y
      case 121:
        index = 3;
        break;
      // g
      case 103:
        index = 4;
        break;
      // b
      case 98:
        index = 5;
        break;
      // v
      case 118:
        index = 6;
        break;
      default:
        //
    }
    if (index && gameInfo.promptInfo.userInput.length < 8) addUserInput(index);
  });
  $('html').keyup(e => {
    console.log(event.key);
    if (event.key === 'Backspace') {
      removeUserInput();
    }
    if (event.key === 'Enter') {
      checkUserAnswer();
    }
  });



  createPromptSequence();
});

