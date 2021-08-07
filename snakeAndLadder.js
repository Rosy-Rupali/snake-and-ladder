console.log("Welcome to snake and ladder problem")

let position = 0;
/**
 * diceNumber is taking random value from 1 to 6
 */
function rollDice(){
    let diceNumber = (Math.floor(Math.random()*10)%6+1);
    return diceNumber;
}
position = position+rollDice();
console.log(`Player got the position: ${position}`);