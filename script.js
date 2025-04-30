let initialUserScore = 0;
let initialComputerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");

const genCompChoice = () => {
    // Stone, Paper, Scissor
    const option = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];

}

const drawGame = (userChoice, compChoice) => {    //If game Draw
    console.log("Draw Game");
    msg.innerText = "Game Draw 😑";
    msg.style.backgroundColor = "darkslategrey";
};

const showWinner = (userWin, userChoice, compChoice) => {   // If game Win / Loss
    if(userWin){
        initialUserScore++;
        userScore.innerText = `${initialUserScore}`;
        console.log("You Win");
        msg.innerText = `You Win 🥳. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You Loss");
        initialComputerScore++;
        computerScore.innerText = `${initialComputerScore}`;
        msg.innerText = `You Loss 🥲 Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// The logic of game 
const playGame = (userChoice) =>{
    console.log("User Choice is :", userChoice); // User Choise

    const compChoice = genCompChoice();
    console.log("Computer Choice is :", compChoice); // Computer Choise
    
    if(userChoice === compChoice){      // Calling function if Game-DRAW
        drawGame(userChoice, compChoice);
    }
    else{
        let userWin = true;
        if( userChoice === "rock"){
            // paper, scissor
            userWin = compChoice ==="paper" ? false : true;
        }
        else if(userChoice ==="paper"){
            // rock, scissor
            userWin = compChoice === "rock" ? true : false;
        }
        else if(userChoice === "scissor"){
            // paper, rock
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin, userChoice, compChoice);    //Calling Funcion for Win / Loss
    }
};

for(let choice of choices){
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}
