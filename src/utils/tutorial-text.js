const tutorialText = [
  `<p>Hi! Welcome to Squares!<p>
  <p>You can make squares by pressing the letter keys on those circles below. Give it a shot!</p>`,

  `<p>Good job!</p>
  <p>The goal of Squares is to create your own series of squares, based on a given prompt.</p>
  <p>You'll do this based on guidelines related to color mixing</p>
  <button>Show me a prompt</button>`,

  `<p>Ready for an easy one?</p>
  <p>What happens when you mix yellow and blue?</p>
  <p>To submit your answer, type the letter of the correct color, and press enter<p>`,

  `<p>You got it</p>
  <p>When you see two primary colors, respond with the color you'd get by mixing the two.</p>
  <p>But what about one primary and one complementary color, like green and yellow here?</p>
  <p>You respond with the color you'd need to mix with the primary color (yellow in this example) to achieve the secondary color (green)</p>
  <p>Type the letter of the correct color, and press enter</p>`,

  `<p>Perfect!</p>
  <p>Now what about two complementary colors, like blue and orange?<p>
  <p>In that case, you just skip 'em</p>
  <p>Press enter to continue</p>`,

  `<p>Easy peasy</p>
  <p>Now if you get two tiles of the same color, that's pretty tricky.</p>
  <p>Just kidding, you combine them into one and just respond with one square of that color</p>
  <p>Type the letter of the correct color, and press enter</p>`,

  `<p>Okay, one more use case</p>
  <p>What if you get two squares that are BOTH complementary colors?<p>
  <p>In that case, respond with the primary color that is mixed with another color to make both complementary colors</p>
  <p>In this example, YELLOW is needed to make orange, and YELLOW is needed to make green</p>
  <p>Type the letter of the correct color, and press enter</p>`,

  `<p>Hooray!</p>
  <p>One more thing</p>
  <p>If you see more than 2 squares in the prompt, just keep applying the rules to to the prompt in sequence</p>
  <p>In this example:</p>
  <p>Blue + Blue = Blue</p>
  <p>Blue + Green = Yellow</p>
  <p>Green + Red = (complementary colors, skip)</p>
  <p>Red + Yellow = Orange<p>
  <p>So your sequence of squares should be Blue, then Yellow, then Orange</p>
  <p>Type the letter of the correct color, and press enter to complete the tutorial</p>`,

  `<p>You did it!</p>
  <button>Return to Menu</button>`
];

export default tutorialText;
