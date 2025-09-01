const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScorePara = document.getElementById("users");
const compScorePara = document.getElementById("scores");

let userScore = 0;
let compScore = 0;

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawGame = () => {
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "#ffc107"; // warning color
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#4caf50"; // green
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#f44336"; // red
    }
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;

        if (
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper")
        ) {
            userWin = true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});
