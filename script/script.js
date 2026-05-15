var option = ["Rock", "Paper", "Scissors"]
// Opponent's choice
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    // Translating values into string (RPS)
    return "Computer chooses " + option[choice]
}

console.log(getComputerChoice())

// User's choice
function getHumanChoice() {
    const choice = Number(window.prompt("0 = Rock\n1 = Paper\n2 = Scissors"))
    return "User chooses " + option[choice]
}

console.log(getHumanChoice())

// Scores
var humanScore = 0
var computerScore = 0

// Round execution
function playRound(humanChoice, computerChoice) {

}