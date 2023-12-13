let choseRock = document.querySelector("#rock");
let chosePaper = document.querySelector("#paper");
let choseScissor = document.querySelector("#scissor");

let userResult =  document.querySelector(".userResult");
let computerResult =  document.querySelector(".compResult");

let userScore = 0;
let computerScore = 0;

let messege =  document.querySelector(".massegeText"); 

let reset = document.querySelector(".reset");

function computerChoice(){
const option = ["rock", "paper", "scissor"];
const ranIndex = Math.floor(Math.random()*3);
return option[ranIndex];
}


const updateScore = ()=>{
    userResult.innerHTML = `${userScore}`;
    computerResult.innerHTML = `${computerScore}`;

}

let choseWinner = (UserChoice, compReturn)=>{
    if(UserChoice === compReturn){
        ! console.log("It was a drow!");
        messege.innerHTML = "It is a Drow";
        messege.style.backgroundColor = "#EEC759";
        messege.style.color = "#000";


    }else if(compReturn === "rock"){
        
        messege.innerHTML = `You Lost! ${compReturn} beats ${UserChoice}`;
        messege.style.backgroundColor = "#9A031E";
        messege.style.color = "#000";
        computerScore++;
       
    }else if(compReturn === "paper"){
        
        messege.innerHTML = `You Won!   ${UserChoice} beats ${compReturn}`;
        messege.style.backgroundColor = "#B5D5C5";
        messege.style.color = "#000";
        userScore++;

    }else if(compReturn === "scissor"){
        if(UserChoice === "rock"){
    
            messege.innerHTML = `You Won!   ${UserChoice} beats ${compReturn}`;
            messege.style.backgroundColor = "#B5D5C5";
            messege.style.color = "#000";
            userScore++;

        }else if(UserChoice === "paper"){
    
            messege.innerHTML = `You Lost!   ${compReturn} beats ${UserChoice}`;
            messege.style.backgroundColor = "#9A031E";
            messege.style.color = "#000";    
            computerScore++;
        }
    }
    updateScore();
}

let playGame = (UserChoice) =>{
    console.log(UserChoice);

    //! Generate Computer Choice
    let compReturn=    computerChoice();
    console.log(compReturn);
    choseWinner(UserChoice,compReturn);
}


choseRock.addEventListener("click",()=>{
    let UserChoice = "rock";
    playGame(UserChoice);
})

chosePaper.addEventListener("click",()=>{

    let UserChoice = "paper";
    playGame(UserChoice);
})

choseScissor.addEventListener("click",()=>{
 
    let UserChoice = "scissor";

    playGame(UserChoice);
})

reset.addEventListener("click", ()=>{
    computerScore = 0;
    userScore= 0;
    messege.innerHTML = "Play Your Move";
    messege.style.backgroundColor = "rebeccapurple";
    messege.style.color = "#f5e8c7bf"
})