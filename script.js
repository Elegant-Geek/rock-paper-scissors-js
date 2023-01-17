// these changes are on the new branch
// set up main choices array 
let choices = ['rock', 'paper', 'scissors'];
// declare the two point counter variables
let yourPoints = 0;
let computerPoints = 0;
let buttonToggle = true;
// creating two p tags to hold the score
const yourScore = document.querySelector('#your-score');
const yourPointsDOM = document.createElement('p');
yourPointsDOM.textContent = `Your Score: ${yourPoints}`;
yourScore.appendChild(yourPointsDOM);
const computerScore= document.querySelector('#computer-score');
const computerPointsDOM = document.createElement('p');
computerPointsDOM.textContent = `Computer Score: ${computerPoints}`;
computerScore.appendChild(computerPointsDOM);

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

function addPointDisplay() {
    if (yourPoints >= 0 || computerPoints >=0 ) {
        yourPointsDOM.textContent = `Your Score: ${yourPoints}`;
        computerPointsDOM.textContent = `Computer Score: ${computerPoints}`;
    }
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
    addPointDisplay();


    // else statement if anything but rock paper or scissors is not input (cancel button prompt/input 'null' case is caught in game function instead.)
    } else {
        alert("Please input a valid entry of: 'rock', 'paper', or 'scissors'. Round forfeit.");
        console.log(`Invalid input, Round forfeit.`);
    }
   

    if (yourPoints === 5 || computerPoints === 5 ) {
        if (yourPoints > computerPoints) {
            console.log(`YOU WIN THE GAME!`);
        }
        else if (yourPoints < computerPoints) {
            console.log(`YOU LOST THE GAME!`);
        }
        else { console.log(`Something is wrong...`);
        }
        

        const playAgain = prompt('Game over! Would you like to play again? (yes/no)', 'yes');
        // NULL CHECK (!playAgain) MUST BE RUN BEFORE .toLowerCase stuff or else error will be thrown!

        if ((!playAgain) || (!(playAgain.toLowerCase() === 'yes' || playAgain.toLowerCase() === 'y')))  {
            yourPoints = 0;
            computerPoints = 0;
            //disable button clicking on page unless yes is typed in.
            buttonToggle = false;
            alert(`Goodbye! \nChange your mind? Refresh the page for new game.`);
        }

         else {
            //reset points
            yourPoints = 0;
            computerPoints = 0;
            addPointDisplay();
            console.log(`NEW GAME!`);

        }
  }

}

const buttons = document.querySelectorAll('div.container button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    if (buttonToggle === false) {
        console.log('Refresh the page to play again.')
        return;
    }
    else {
        let playerSelection = button.id;
        // console.log(playerSelection);
        playRound(playerSelection);

    }

  });
});

