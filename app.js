let userScore = 0;  //To track user's score
let compScore = 0;  //TO track computer's score

const choices = document.querySelectorAll(".choice"); // give array of three divs

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#playerScore");
const compScorePara = document.querySelector("#compScore");

function genCompChoice(){
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3) //[0,1) --> [0,3) --> 0,1,2
    return options[randomIdx];
}

function drawGame(){
    msg.innerText = "Draw";

}

function showWinner(userWin, userChoice, compChoice){
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
       msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
       document.querySelector(".msgContainer").style.backgroundColor = "green";
    }else{
       compScore++;
       compScorePara.innerText = compScore;
       msg.innerText = `You Loose! ${compChoice} beats Your ${userChoice}.`;
       document.querySelector(".msgContainer").style.backgroundColor = "red";

    }     
}

function playGame(userChoice){
    //Generate comp choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissor
            userWin = compChoice === "paper" ? false : true; 
        }else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "rock" ? true : false;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}


for(let i = 0; i < choices.length; i++){
    choices[i].addEventListener("click",function(){
        const userChoice = this.getAttribute("id");
        playGame(userChoice);
    });
}