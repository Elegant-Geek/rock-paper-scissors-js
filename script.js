let choices = ['rock', 'paper', 'scissors'];
// picks index number from 0 to array's max length

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
    // your code here!
    let playerPick = playerSelection.toLowerCase();
    if (playerPick === 'rock' || playerPick === 'paper' || playerPick === 'scissors') {
    console.log(`You chose ${playerPick}.`);
    console.log(`The computer chose ${computerSelection}.`);

    if (playerPick === 'rock' && computerSelection === 'scissors' || playerPick === 'paper' && computerSelection === 'rock'|| playerPick === 'scissors' && computerSelection === 'paper') {
        console.log(`You Win! ${playerPick} beats ${computerSelection}.`); } 
        
        else if (computerSelection === 'rock' && playerPick === 'scissors' || computerSelection === 'paper' && playerPick === 'rock'|| computerSelection === 'scissors' && playerPick === 'paper') {
        console.log(`You Lose! ${computerSelection} beats ${playerPick}.`); }
        
        else if (computerSelection === playerPick) {
        console.log(`It's a tie! Both of you picked ${playerPick}.`); } 
        
        else {
        console.log(`something is broken.`);}

        // return declaredWinner;

    } else {
        console.log("please input a valid entry of: 'rock', 'paper', or 'scissors'.");
    }

  }
   


// ----------------------CODE TESTING -----------------------------

// verify that current length of the RPS array gives three choices.
// console.log(choices.length);

// verifying that the function "getComputerChoice" returns rock paper or scissors:
// console.log(getComputerChoice(choices));

// Their provided test code for running a game:
const playerSelection = "rock";
const computerSelection = getComputerChoice(choices);
console.log(playRound(playerSelection, computerSelection));

