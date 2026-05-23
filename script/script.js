var option = ["Rock", "Paper", "Scissors"]
// Opponent's choice
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    // Translating values into string (RPS)
    return option[choice]
}


// User's choice
function getHumanChoice(choice) {
    // Display once option was chosen
    const playerOption = document.querySelector(".playerOption");
    playerOption.src = `images/${choice}.jpg`
}


// Scores
var humanScore = 0
var computerScore = 0

// Round execution
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    console.log("Human choose: " + humanChoice)
    console.log("Computer choose: " + computerChoice)
    if (
        (humanChoice === "Rock" && computerChoice === "Rock") ||
        (humanChoice === "Paper" && computerChoice === "Paper") ||
        (humanChoice === "Scissors" && computerChoice === "Scissors")
    ) {
        return "Its a draw"
    } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++
        return "User wins, Points: " + humanScore
    } else {
        computerScore++
        return "Computer wins, Points: " + computerScore
    }
}

function playGame() {
    do {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    } while (humanScore < 5 && computerScore < 5);
    if (humanScore === 5) {
        return "User wins!\n" + "Standing: " + humanScore + " - " + computerScore 
    } else {
        return "Computer wins!\n" + "Standing: " + humanScore + " - " + computerScore
    }
}



