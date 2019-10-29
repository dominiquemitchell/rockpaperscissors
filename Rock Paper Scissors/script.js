//Initialization of playerScore and computerScore
let playerScore = 0;
let computerScore = 0; 

//Response
const response = document.querySelector('#response');
const contentOne = document.createElement('div');
const contentTwo = document.createElement('div');

//Function that randomly returns rock, paper, or scissors
function computerPlay() {
  const values = ["rock","paper","scissors"]
  let randomValue = values[Math.floor(Math.random() * values.length)];
  return randomValue;
}

//Function to clear the results and start fresh when button is clicked
function clearResponse(clear){
  while(response.firstChild){
    response.removeChild(response.firstChild);
  }
  playerScore = 0;
  computerScore = 0;
}

//Function for game to alert winner when 5 points is reached.
function fivePointsAlert(){
  if (playerScore == 5){
    alert("YOU SCORED FIVE POINTS! YOU WIN! Press the Start Over button to try again.");
  } else if (computerScore == 5){
    alert("COMPUTER SCORED FIVE POINTS! YOU LOSE! Press the Start Over button to try again.");
  }
}

//Function for the game
function game(){
  let computerSelection = computerPlay();
  if (playerSelection == "rock" && computerSelection == "paper"){
    contentOne.classList.add('contentOne');
    contentOne.textContent = "You lose this round! Computer chose Paper. Paper beats Rock!";
    contentTwo.classList.add('contentTwo');
    contentTwo.textContent = "Computer Score:  " + ++computerScore;
    response.appendChild(contentOne);
    response.appendChild(contentTwo);
  } else if (playerSelection == "rock" && computerSelection == "scissors"){
    contentOne.classList.add('contentOne');
    contentOne.textContent = "You win this round! Computer chose Scissors. Rock beats Scissors!";
    contentTwo.classList.add('contentTwo');
    contentTwo.textContent = "Player Score:  " + ++playerScore;
    response.appendChild(contentOne);
    response.appendChild(contentTwo);
  } else if (playerSelection == "rock" && computerSelection == "rock"){
    contentOne.classList.add('contentOne');
    contentOne.textContent = "You both picked rock this round! Let's try again!";
     ontentTwo.classList.add('contentTwo');
    contentTwo.textContent = "";
    response.appendChild(contentOne);
    response.appendChild(contentTwo);
  } else if (playerSelection == "paper" && computerSelection == "scissors"){
    contentOne.classList.add('contentOne');
    contentOne.textContent = "You lose this round! Computer picked Scissors. Scissors beats Paper!";
    contentTwo.classList.add('contentTwo');
    contentTwo.textContent = "Computer Score:  " + ++computerScore;
    response.appendChild(contentOne);
    response.appendChild(contentTwo);
  } else if (playerSelection == "paper" && computerSelection == "rock"){
    contentOne.classList.add('contentOne');
    contentOne.textContent = "You win this round! Computer picked Rock. Paper beats rock!";
    contentTwo.classList.add('contentTwo');
    contentTwo.textContent = "Player Score:  " + ++playerScore;
    response.appendChild(contentOne);
    response.appendChild(contentTwo);
  } else if (playerSelection == "paper" && computerSelection == "paper"){
    contentOne.classList.add('contentOne');
    contentOne.textContent = "You both picked paper this round! Let's try again!";
    contentTwo.classList.add('contentTwo');
    contentTwo.textContent = "";
    response.appendChild(contentOne);
    response.appendChild(contentTwo);
  } else if (playerSelection == "scissors" && computerSelection == "rock"){
    contentOne.classList.add('contentOne');
    contentOne.textContent = "You lose this round! Computer picked Rock. Rock beats Scissors!";
    contentTwo.classList.add('contentTwo');
    contentTwo.textContent = "Computer Score:  " + ++computerScore;
    response.appendChild(contentOne);
    response.appendChild(contentTwo);
  } else if (playerSelection == "scissors" && computerSelection == "paper"){
    contentOne.classList.add('contentOne');
    contentOne.textContent = "You win this round! Computer chose Paper. Scissors beats Paper!";
    contentTwo.classList.add('contentTwo');
    contentTwo.textContent = "Player Score:  " + ++playerScore;
    response.appendChild(contentOne);
    response.appendChild(contentTwo);
  } else if (playerSelection == "scissors" && computerSelection == "scissors"){
    contentOne.classList.add('contentOne');
    contentOne.textContent = "You both picked scissors this round! Let's try again!";
    contentTwo.classList.add('contentTwo');
    contentTwo.textContent = "";
    response.appendChild(contentOne);
    response.appendChild(contentTwo);
  }
  return;
}


//Event Listeners
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const clear = document.querySelector("#clear");
let playerSelection;

btnRock.addEventListener("click",() => {
  playerSelection = "rock";
  game();
  fivePointsAlert();
})


btnPaper.addEventListener("click",() => {
  playerSelection = "paper";
  game();
  fivePointsAlert();
})

btnScissors.addEventListener("click",() => {
  playerSelection = "scissors";
  game();
  fivePointsAlert();
})

clear.addEventListener("click", clearResponse); 



