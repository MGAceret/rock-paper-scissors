var option = ["Rock", "Paper", "Scissors"]
// Opponent's choice
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    // Translating values into string (RPS)
    return option[choice]
}


// User's choice
function getHumanChoice() {
    const choice = Number(window.prompt("0 = Rock\n1 = Paper\n2 = Scissors"))
    return option[choice]
}


// Scores
var humanScore = 0
var computerScore = 0

// Round execution
function playRound(humanChoice, computerChoice) {
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

console.log(playRound(getHumanChoice(), getComputerChoice()))