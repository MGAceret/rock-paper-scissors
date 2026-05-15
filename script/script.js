// Opponent's choice
function getComputerChoice(option) {
    return "Computer chooses " + Math.floor(Math.random() * option)
}

console.log(getComputerChoice(3))

// User's choice
function getHumanChoice(option) {
    option = window.prompt("0 = Rock\n1 = Paper\n2 = Scissors");
    return option
}

console.log(getHumanChoice())

var humanScore = 0
var computerScore = 0

// Round execution
function playRound(humanChoice, computerChoice) {

}