let choices = ['rock', 'paper', 'scissors'];
// picks index number from 0 to array's max length
let yourPoints = 0;
let computerPoints = 0;
// lets randomize from 0 to 2
function getComputerChoice(array) {
    // lets randomize from 0 to 2 with this simple test.
    // let indexNumber = Math.floor(Math.random() * 3);

    // now let's randomize an index number ranging from 0 to "choices array length - 1" (3 for now)
    // NOTE: choices.length is 3 but math.floor stuff will return 0 to 2 not 0 to 3.
    // This is because Math.floor always rounds down and returns the largest integer less than or equal to a given number.
    // This is what I need so that I can map this variable to the index value for the choices array, 0 to 2.
    let indexNumber = Math.floor(Math.random() * (array.length));
    let computerChoice = array[indexNumber];
    // console.log(`The computer chose ${computerChoice}.`);
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        // UNCOMMENT THESE TWO LINES FOR MORE FEEDBACK IN CONSOLE! <<------------------------------------------------------------------
    // console.log(`You chose ${playerSelection}.`);
    // console.log(`The computer chose ${computerSelection}.`);


    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock'|| playerSelection === 'scissors' && computerSelection === 'paper') {
        yourPoints += 1; 
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`); } 
        
        else if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock'|| computerSelection === 'scissors' && playerSelection === 'paper') {
            computerPoints += 1;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`); }
        
        else if (computerSelection === playerSelection) {
            console.log(`It's a tie! Both of you picked ${playerSelection}.`); } 
        
        else {
            console.log(`something is broken.`);}
        
        console.log(`Your score: ${yourPoints} Computer's score: ${computerPoints}`);


    } else {
        alert("Please input a valid entry of: 'rock', 'paper', or 'scissors'. Round forfeit.");
        console.log(`Invalid input, Round forfeit.`);
    }

  }
   
  function game() {
    for (let i = 0; i < 5; i++) {
        // enter user prompt option for the start of each new round:
        const playerSelection = prompt('Enter rock, paper, or scissors.');
        const computerSelection = getComputerChoice(choices);
        playRound(playerSelection, computerSelection);
   // your code here!
}

    // Game over! Reset points post game:
        yourPoints = 0;
        computerPoints = 0;
        
const playAgain = prompt('Game over! Would you like to play again? (yes/no)', 'yes');
if (playAgain.toLowerCase() === 'yes' || playAgain.toLowerCase() === 'y') {
    console.log(`NEW GAME!`);
    game();
}
else {
    alert(`Goodbye!`);
}

// insert code here that would rerun the loop upon user entering y/n or invalid data.

  }


// ----------------------CODE TESTING -----------------------------

// verify that current length of the RPS array gives three choices.
// console.log(choices.length);

// verifying that the function "getComputerChoice" returns rock paper or scissors:
// console.log(getComputerChoice(choices));

// Their provided test code for running a game:

// console.log(playRound(playerSelection, computerSelection));
game();




