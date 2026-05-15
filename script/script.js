function getComputerChoice(option) {
    return "Computer chooses " + Math.floor(Math.random() * option)
}

console.log(getComputerChoice(3))