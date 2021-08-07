console.log("Welcome to snake and ladder problem");

let position = 0;
const LADDER = 1;
const SNAKE = 2;

while (position < 100) {
  // diceNumber is taking random value from 1 to 6
  let diceNumber = (Math.floor(Math.random() * 10) % 6) + 1;
  //checking the option whether player get ladder or snake
  let option = (Math.floor(Math.random() * 10) % 2) + 1;

  switch (option) {
    case LADDER:
      if (position + diceNumber <= 100) {
        position = position + diceNumber;
        console.log(
          `player got the ladder with the dice number ${diceNumber} and it moves to position ${position}`
        );
      }
      break;
    case SNAKE:
      if (position > 0) {
        position = position - diceNumber;
        console.log(
          `player got the snake with dice number ${diceNumber} and it moves to position: ${position}`
        );
      } else {
        console.log("player is currently at position 0 try again");
      }
      break;
    default:
      console.log(
        "Player is not playing will stay at the same position: " + position
      );
  }
}
