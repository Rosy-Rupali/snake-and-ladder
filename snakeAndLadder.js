console.log("Welcome to snake and ladder problem");

let position = 0;
const LADDER = 1;
const SNAKE = 2;

// diceNumber is taking random value from 1 to 6
function rollDice() {
  let diceNumber = (Math.floor(Math.random() * 10) % 6) + 1;
  return diceNumber;
}
//to check the options by taking random value from 0 to 2
function option() {
  let option = Math.floor(Math.random() * 10) % 3;
  return option;
}
switch (option()) {
  case LADDER:
    position = position + rollDice();
    console.log("player got the ladder and move to position: " + position);
    break;
  case SNAKE:
    if (position == 0) {
      console.log("player is currently at zero try again");
      break;
    } else {
      position = position - rollDice();
      console.log("player got the snake and move to position: " + position);
    }
    break;
  default:
    console.log(
      "Player is at the starting position: " + position
    );
}
