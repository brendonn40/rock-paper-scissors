const choices = ["Rock","Paper","Scissors"]
let wins = 0
let losses = 0
let draw = 0
const inputs = document.querySelectorAll("input")

inputs.forEach((input) => {
    input.addEventListener("click",() => {
      alert(playRound(input.id,getComputerChoice()))
      console.log(`wins:${wins} losses:${losses}`)
    })
});

// functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getComputerChoice(){
    return choices[getRndInteger(0,2)]
}
function playRound(playerChoice,computerChoice){
    switch(true){
        case playerChoice.toLowerCase() === computerChoice.toLowerCase():
            draw++
            return `Its a draw! ${computerChoice} equals ${playerChoice}!`
            break;
        case playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper":
            losses++
            return `You lose. ${computerChoice} beats ${playerChoice}!`
            break;
        case playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock":
            losses++
            return `You lose. ${computerChoice} beats ${playerChoice}!`
            break;
        case playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors":
            losses++
            return `You lose. ${computerChoice} beats ${playerChoice}!`
            break;
        default:
            wins++
            return `You win. ${playerChoice} beats ${computerChoice}!`
    }
}


function compareResults(wins,losses,draws){
    if (wins > losses){
        return `You'are the winner. You won ${wins} times out of 5.`
    }
    else if (losses > wins){
        return `You lost :( . You lost ${losses} times out of 5.`
    }else{
        return `It's a draw!!`
    }

}