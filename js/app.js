import { renderNewQuote, quoteCorrect, switchVisible, renderEndText, highest } from "./game.js";
import { startTimer, getTimerTime, endTimer, asynccall, getData } from "./utils.js";
import { renderLeaderboard } from "./leaderboard.js";

const body = document.body
const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");
const gameContainer = document.querySelector(".container-game");
const gameEndContainer = document.querySelector(".container-game-end")
const timerElem = document.getElementById("timer")


const timeReport = document.getElementById("timeReport");
const highReport = document.getElementById("highScore")
const submitInstructions = document.getElementById("inputinstruction");
const submitButton = document.getElementById("submitButton");
const nameInput = document.getElementById("submitname");

let userData = {}
let name = ""
let time = 0
let highScore = null;

function attachListeners() {

  let typestart = true
  quoteInput.addEventListener("input", () => {

    if (typestart) {startTimer(); typestart = false;}
    if (quoteCorrect(quoteDisplay, quoteInput)) {
      endTimer(timerElem)
      renderNewQuote(quoteDisplay, quoteInput)
      typestart = true
      time = getTimerTime()
      highScore = highest(time, highScore)
      switchVisible(gameContainer, gameEndContainer); 
      renderEndText(time, highScore, timeReport, highReport, submitInstructions);
    }


  });

  submitButton.addEventListener("click", () => {
    name = nameInput.value;
    userData = {
      "userName": name,
      "userTime": highScore
    }
    console.log(userData)
    switchVisible(gameEndContainer, gameContainer)

  });
}

function main() {

  renderNewQuote(quoteDisplay, quoteInput)
  attachListeners()
  renderLeaderboard(getData())
  

}

main()