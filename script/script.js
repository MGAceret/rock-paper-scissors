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
    if (
        (humanChoice === "Rock" && computerChoice === "Rock") ||
        (humanChoice === "Paper" && computerChoice === "Paper") ||
        (humanChoice === "Scissors" && computerChoice === "Scissors")
    ) {
        return "Its a draw"
    } else {
        return "One only won"
    }
    
}

console.log(playRound(getHumanChoice(), getComputerChoice()))