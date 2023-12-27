let choseRock = document.querySelector("#rock");
let chosePaper = document.querySelector("#paper");
let choseScissor = document.querySelector("#scissor");

let userResult = document.querySelector(".userResult");
let computerResult = document.querySelector(".compResult");

let userScore = 0;
let computerScore = 0;

let messege = document.querySelector(".massegeText");
// 
let reset = document.querySelector(".reset");

function computerChoice() {
  const option = ["rock", "paper", "scissor"];
  const ranIndex = Math.floor(Math.random() * 3);
  return option[ranIndex];
}

const updateScore = () => {
  userResult.innerHTML = `${userScore}`;
  computerResult.innerHTML = `${computerScore}`;
};

const showWinner = (userWin, UserChoice, compReturn) => {
  if (userWin === -1) {
    messege.innerHTML = `It was a drow! try again`;
    messege.style.backgroundColor = "yellow";
    messege.style.color = "#000";
  } else if (userWin) {
    messege.innerHTML = `You Won! ${UserChoice}  beats ${compReturn} `;
    messege.style.backgroundColor = "#B5D5C5";
    messege.style.color = "#000";
    userScore++;
  } else {
    messege.innerHTML = `You Lost!   ${compReturn} beats ${UserChoice}`;
    messege.style.backgroundColor = "#9A031E";
    messege.style.color = "#000";
    computerScore++;
  }
};

let choseWinner = (UserChoice, compReturn) => {
  let userWin = true;
  if (UserChoice === compReturn) {
    userWin = -1;
  } else if (compReturn === "paper") {
    // rock and scissor
    userWin = UserChoice === "rock" ? false : true;
  } else if (compReturn === "scissor") {
    // rock and paper
    userWin = UserChoice === "rock" ? true : false;
  } else if (compReturn === "rock") {
    // rock and paper

    userWin = UserChoice === "paper" ? true : false;
  }
  showWinner(userWin, UserChoice, compReturn);
  updateScore();
};

let playGame = (UserChoice) => {
  console.log(UserChoice);

  //! Generate Computer Choice
  let compReturn = computerChoice();
  console.log(compReturn);
  choseWinner(UserChoice, compReturn);
};

choseRock.addEventListener("click", () => {
  let UserChoice = "rock";
  playGame(UserChoice);
});

chosePaper.addEventListener("click", () => {
  let UserChoice = "paper";
  playGame(UserChoice);
});

choseScissor.addEventListener("click", () => {
  let UserChoice = "scissor";

  playGame(UserChoice);
});

reset.addEventListener("click", () => {
  computerScore = 0;
  userScore = 0;
  updateScore();
  messege.innerHTML = "Play Your Move";
  messege.style.backgroundColor = "rebeccapurple";
  messege.style.color = "#f5e8c7bf";
});
