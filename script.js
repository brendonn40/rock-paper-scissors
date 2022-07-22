console.log("hello world!")
const choices = ["Rock","Papper","Scissors"]

console.log(choices[getRndInteger(0,2)])

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }