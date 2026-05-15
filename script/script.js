function getComputerChoice() {
    const option = Math.floor(Math.random(3))
    return "Computer chooses " + option
}

console.log(getComputerChoice())