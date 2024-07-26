let rock = document.querySelector("#rock");
let computerImage = document.querySelector('#comp');
let playerImage = document.querySelector('#player');
let message = document.querySelector('#message');

rock.addEventListener("click", () => {
  const userChoice = "rock"
  const computerChoice = randomChoice()
  const winningMessage = compare(userChoice, computerChoice)
  computerImage.src = `./images/${computerChoice}.png`
  playerImage.src = `./images/${userChoice}.png`
  message.textContent = `${winningMessage}`
})

let paper = document.querySelector("#paper")
paper.addEventListener("click", () => {
  const userChoice = "paper"
  const computerChoice = randomChoice()
  const winningMessage = compare(userChoice, computerChoice)
  computerImage.src = `./images/${computerChoice}.png`
  playerImage.src = `./images/${userChoice}.png`
  message.textContent = `${winningMessage}`
})

let scissor = document.querySelector("#scissor")
scissor.addEventListener("click", () => {
  const userChoice = "scissor"
  const computerChoice = randomChoice()
  const winningMessage = compare(userChoice, computerChoice)
  computerImage.src = `./images/${computerChoice}.png`
  playerImage.src = `./images/${userChoice}.png`
  message.textContent = `${winningMessage}`
})

function randomChoice() {
  let choice = ["rock", "paper", "scissor"]
  let computerChoice = choice[Math.floor(Math.random() * choice.length)]
  return computerChoice;
}

function compare(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Match Tie!!"
  }
  else if (userChoice === "scissor" && computerChoice === "paper"
    || userChoice === "rock" && computerChoice === "scissor"
    || userChoice === "paper" && computerChoice === "rock"
  ) {
    return "YOU WON..!"
  } else if (userChoice === "paper" && computerChoice === "scissor"
    || userChoice === "scissor" && computerChoice === "rock"
    || userChoice === "rock" && computerChoice === "paper"
  ) {
    return "COMPUTER WON..!"
  }


}