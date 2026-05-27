var option = ["Rock", "Paper", "Scissors"]
// Opponent's choice
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    // Display once option was chosen
    document.querySelector(".opponentOption").src = `images/${option[choice]}.jpg`
    // Translating values into string (RPS)
    return option[choice] 
}


// User's choice
function getHumanChoice(choice) {
    // Display once option was chosen
    document.querySelector(".playerOption").src = `images/${choice}.jpg`
}


// Scores
var humanScore = 0
var computerScore = 0

// Round execution
function playRound(humanChoice) {
    getHumanChoice(humanChoice);
    const computerChoice = getComputerChoice();
    console.log("Human choose: " + humanChoice)
    console.log("Computer choose: " + computerChoice)

    if (
        (humanChoice === "Rock" && computerChoice === "Rock") ||
        (humanChoice === "Paper" && computerChoice === "Paper") ||
        (humanChoice === "Scissors" && computerChoice === "Scissors")
    ) {
        console.log("Its a draw")
    } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++
        document.querySelector(".playerScore").textContent = 
        humanScore;
        console.log("User wins, Points: " + humanScore)
    } else {
        computerScore++
        document.querySelector(".opponentScore").textContent = 
        computerScore;
        console.log("Computer wins, Points: " + computerScore)
    }

    if (humanScore === 5 || computerScore === 5) {
        document.querySelectorAll("button").forEach(btn => {
            btn.disabled = true
        });
        console.log(result());
    }
}

function result() {
    let resultText = "";
    if (humanScore === 5) {
        resultText = "User wins!\n" + "Standing: " + humanScore + " - " + computerScore;
    } else {
        resultText = "Computer wins!\n" + "Standing: " + humanScore + " - " + computerScore;
    }
    document.querySelector(".gameResult").textContent = 
    resultText;
    return resultText;
}