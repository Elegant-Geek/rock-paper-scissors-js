// set up main choices array 
let choices = ['rock', 'paper', 'scissors'];
// you get to change the amount of points each round is played to with this variable ("first to 5 etc")
let maxPoints = 5;
// declare the two point counter variables
let yourPoints = 0;
let computerPoints = 0;
// button toggle set to true until game over switches them off
let buttonToggle = true;
// captures my empty #result div as the container reference
const resultLog = document.querySelector('#result');
// create empty p tag to display result of round
const resultDOM = document.createElement('p');
// default text for this div when page loads up
resultDOM.textContent = `Welcome to rock paper scissors! The first to ${maxPoints} points wins!`;
// place result paragraph element inside #result div
resultLog.appendChild(resultDOM);
// captures my empty #score div as the container reference
const scoreLog= document.querySelector('#score');
// create empty p tag to display player score
const yourScoreDOM = document.createElement('p');
// default text displays point counter at 0 on first load
yourScoreDOM.textContent = `Your score: ${yourPoints}`;
// place result paragraph element inside #score div
scoreLog.appendChild(yourScoreDOM);
// create empty p tag to display computer score
const computerScoreDOM = document.createElement('p');
// default text displays point counter at 0 on first load
computerScoreDOM.textContent = `Computer's score: ${computerPoints}`;
// place result paragraph element inside #score div underneath the yourPoints tracker (yourScoreDOM)
scoreLog.appendChild(computerScoreDOM);

// random number generator based on length of specified array
// This will randomize an index number ranging from 0 to "choices array length - 1" (3 for now)
// NOTE: choices.length is 3 but math.floor stuff will return 0 to 2 not 0 to 3.
// Math.floor always rounds down and returns the largest integer less than or equal to a given number.
function getComputerChoice(array) {
    let indexNumber = Math.floor(Math.random() * (array.length));
    //where array is generic parameter for any given array
    let computerChoice = array[indexNumber];
    //grab the computerChoice constant to be used in the playRound function.
    return computerChoice;
}
// this function runs when button is clicked (if toggle is still set to true)
function playRound(playerSelection) {    
    // the constant here stores the computer's choice of rock paper or scissors
    const computerSelection = getComputerChoice(choices);
    // if the user's input matches anything placed in the "choices" array...
    if (choices.includes(playerSelection.toLowerCase())) {
        playerSelection = playerSelection.toLowerCase();
    // console.log(`You chose ${playerSelection}.`);
    // console.log(`The computer chose ${computerSelection}.`);

    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock'|| playerSelection === 'scissors' && computerSelection === 'paper') {
        // add to your tally if you win
        yourPoints += 1; 
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`); 
        resultDOM.textContent = `You win, ${playerSelection} beats ${computerSelection}.`;
    } 
    
    else if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock'|| computerSelection === 'scissors' && playerSelection === 'paper') {
        // add to computer tally if computer wins
        computerPoints += 1;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`); 
        resultDOM.textContent = `You lose, ${computerSelection} beats ${playerSelection}.`;
    }
    
    else if (computerSelection === playerSelection) {
        console.log(`It's a tie! Both of you picked ${playerSelection}.`); 
        resultDOM.textContent = `It's a tie! Both of you picked ${playerSelection}.`;
    } 
    
    else {
        // if the user's input does NOT match anything placed in the "choices" array...
        console.log(`something is broken.`);}
    
    // very last end of round is displaying the updated score.
     console.log(`Your score: ${yourPoints} Computer's score: ${computerPoints}`);
     yourScoreDOM.textContent = `Your score: ${yourPoints}`;
     computerScoreDOM.textContent = `Computer's score: ${computerPoints}`;

    // else statement if anything but rock paper or scissors is not input (cancel button prompt/input 'null' case is caught in game function instead.)
    } else {
        alert("Please input a valid entry of: 'rock', 'paper', or 'scissors'. Round forfeit.");
        console.log(`Invalid input, Round forfeit.`);
    }

    if (yourPoints === maxPoints || computerPoints === maxPoints ) {
            //disable buttons immediately after this condition is met. The prompt set timer delay otherwise allows you to keep clicking!
            buttonToggle = false;
        if (yourPoints > computerPoints) {
            console.log(`YOU WIN THE GAME!`);
            resultDOM.textContent = `YOU WIN THE GAME!`;
        }
        else if (yourPoints < computerPoints) {
            console.log(`YOU LOST THE GAME!`);
            resultDOM.textContent = `YOU LOST THE GAME!`;
        }
        else { 
            console.log(`This message appears when one player's points exceeds 5 but is at a tie with the other player. Ex: 5 to 5 tied game`);
            resultDOM.textContent = `This message appears when...`;
        }

    //endgame runs as soon as one of the values hits maxPoints value set (3, 5, etc.), but buttons are disabled asap to prevent any re-running of 
    endGame();
    }

}
function endGame() {

    //settimeout delay allows the score to update in browser before PROMPT is fed
    setTimeout(() => {
            let playAgain = prompt('Game over! Would you like to play again? (yes/no)', 'yes');
            // NULL CHECK (!playAgain) MUST BE RUN BEFORE .toLowerCase stuff or else error will be thrown!
        if ((!playAgain) || (!(playAgain.toLowerCase() === 'yes' || playAgain.toLowerCase() === 'y')))  {
            yourPoints = 0;
            computerPoints = 0;
            //disable button clicking on page unless yes is typed in.
            buttonToggle = false;
            resultDOM.textContent = `GAME OVER.`;
            alert(`\nGoodbye! \nChange your mind? Refresh the page for new game.`);
        }
        else {
            //reset points
            yourPoints = 0;
            computerPoints = 0;
            yourScoreDOM.textContent = `Your score: ${yourPoints}`;
            computerScoreDOM.textContent = `Computer's score: ${computerPoints}`;
            console.log(`NEW GAME!`);
            resultDOM.textContent = `NEW GAME!`;
            //at the very end, buttons are enabled again.
            buttonToggle = true;
        }
        //the second parameter of settimeout is given in milliseconds. 1000ms = 1s, 500ms = 0.5s
      }, "500")
}

const buttons = document.querySelectorAll('div.container button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
// and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    // if button toggle is set to false (disables buttons) or any point counter is met, buttons do nothing.
    if (buttonToggle === false || yourPoints >= maxPoints || computerPoints >= maxPoints ) {
        console.log('GAME OVER. Refresh page to play again!')
        return;
    }
    else {
        // when use clicks on a button (enabled), the player selection is assigned the element's ID name (rock paper scissors)
        let playerSelection = button.id;
        playRound(playerSelection);
    }
  });
});

