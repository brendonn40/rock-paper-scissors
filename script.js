console.log("hello world!")
const choices = ["Rock","Paper","Scissors"]

game()
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getComputerChoice(){
    return choices[getRndInteger(0,2)]
}
function playRound(playerChoice,computerChoice){
    switch(true){
        case playerChoice.toLowerCase() === computerChoice.toLowerCase():
            return `Its a draw! ${computerChoice} equals ${playerChoice}!`
            break;
        case playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper":
            return `You lose. ${computerChoice} beats ${playerChoice}!`
            break;
        case playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock":
            return `You lose. ${computerChoice} beats ${playerChoice}!`
            break;
        case playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors":
            return `You lose. ${computerChoice} beats ${playerChoice}!`
            break;
        default:
            return `You win. ${playerChoice} beats ${computerChoice}!`
    }
}
function game(){
    let wins = 0
    let losses = 0
    let draw = 0
    for (let i = 0; i < 5; i++) {
        let player=prompt("Rock,paper,scissors:")
        let result = playRound(player,getComputerChoice())
        if (result.includes("Win")){
            wins++
        }else if (result.includes("Lose")){
            losses++
        }else{
            draw++
        }
        console.log(result)
     }
     console.log(compareResults(wins,losses,draw))
    
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