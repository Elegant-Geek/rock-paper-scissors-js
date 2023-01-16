


// these changes are on the new branch
// set up main choices array 
let choices = ['rock', 'paper', 'scissors'];
// declare the two point counter variables
let yourPoints = 0;
let computerPoints = 0;
// random number generator based on length of specified array
// This will randomize an index number ranging from 0 to "choices array length - 1" (3 for now)
// NOTE: choices.length is 3 but math.floor stuff will return 0 to 2 not 0 to 3.
// Math.floor always rounds down and returns the largest integer less than or equal to a given number.
function getComputerChoice(array) {
    let indexNumber = Math.floor(Math.random() * (array.length));
    //where array is generic parameter for any given array
    let computerChoice = array[indexNumber];
    return computerChoice;
}

function playRound(playerSelection) {
    if (playerSelection === null) {
        alert(`Goodbye!`);
        return;
    }
    const computerSelection = getComputerChoice(choices);
    if (playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'paper' || playerSelection.toLowerCase() === 'scissors') {
        playerSelection = playerSelection.toLowerCase();
        // UNCOMMENT THESE TWO LINES FOR MORE FEEDBACK IN CONSOLE! <<---------------------
    // console.log(`You chose ${playerSelection}.`);
    // console.log(`The computer chose ${computerSelection}.`);

    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock'|| playerSelection === 'scissors' && computerSelection === 'paper') {
        // add to your tally if you win
        yourPoints += 1; 
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`); } 
    
    else if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock'|| computerSelection === 'scissors' && playerSelection === 'paper') {
        // add to computer tally if computer wins
        computerPoints += 1;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`); }
    
    else if (computerSelection === playerSelection) {
        console.log(`It's a tie! Both of you picked ${playerSelection}.`); } 
    
    else {
        console.log(`something is broken.`);}
        // good else statement for debugging later.
    
    // very last end of round is displaying the updated score.
     console.log(`Your score: ${yourPoints} Computer's score: ${computerPoints}`);

    // else statement if anything but rock paper or scissors is not input (cancel button prompt/input 'null' case is caught in game function instead.)
    } else {
        alert("Please input a valid entry of: 'rock', 'paper', or 'scissors'. Round forfeit.");
        console.log(`Invalid input, Round forfeit.`);
    }

  }
   
  function game() {
    // for (let i = 0; i < 5; i++) {
        // enter user prompt option for the start of each new round:
        // const playerSelection = prompt('Enter rock, paper, or scissors.');
        // if the input is NULL (aka they hit the cancel button, an alert of goodbye shows up.)
        // NULL CHECK HERE MUST BE RUN (and thus exit the program) with return as well to avoid an error.

        playRound(playerSelection);
    // }

    // Game over! Reset points right before a new game:
        yourPoints = 0;
        computerPoints = 0;
    
    // this code reruns the game function loop upon user entering y/n or invalid data.
    // for the prompt, in this case, a default of yes is specified. 
    const playAgain = prompt('Game over! Would you like to play again? (yes/no)', 'yes');
    // NULL CHECK HERE MUST BE RUN BEFORE .toLowerCase stuff or else error will be thrown!
        if (playAgain === null) {
            alert(`Goodbye!`);
            return;
        }
        else if (playAgain.toLowerCase() === 'yes' || playAgain.toLowerCase() === 'y') {
            console.log(`NEW GAME!`);
            // re-running the function within the function, only if "yes" is specified.
            game();
        }
        else {
            alert(`Goodbye!`);
            return;
        }
    }

    // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
   let playerSelection = button.id;
    console.log(playerSelection);
    playRound(playerSelection);
  });
});

    // game();