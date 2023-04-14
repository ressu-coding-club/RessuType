import { renderNewQuote, quoteCorrect, switchVisible, renderEndText, fastestUpdate } from "./game.js";
import { startTimer, getTimerTime, endTimer, asynccall, getData, postData } from "./utils.js";
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

let userData = {
  "userName": "",
  "userTime": 0
}
let name = ""
let time = 0
let highScore = null;
let nameSubmitted = false
let gameOn = true
let keyDown = false

function attachListeners() {

  let typestart = true
  quoteInput.addEventListener("input", () => {
    
    if (gameOn) {
      if (typestart) {startTimer(); typestart = false;}
      if (quoteCorrect(quoteDisplay, quoteInput)) {
        gameOn = false
        endTimer(timerElem)
        renderNewQuote(quoteDisplay, quoteInput)
        typestart = true
        time = getTimerTime()
        const x = fastestUpdate(time, highScore)
        if (x[0]) {
          highScore = x[1]; 
          userData.userTime = highScore;
          if (nameSubmitted) {
            asynccall(postData(userData));
          } 
        }
        switchVisible(gameContainer, gameEndContainer); 
        renderEndText(time, highScore, timeReport, highReport, submitInstructions, nameSubmitted);
    }}
  });

  submitButton.addEventListener("click", () => {
    name = nameInput.value;
    userData.userName = name
    asynccall(postData(userData))
    submitButton.classList.remove("visible")
    submitButton.classList.add("not-visible")
    nameInput.classList.remove("visible")
    nameInput.classList.add("not-visible")
    nameSubmitted = true
    switchVisible(gameEndContainer, gameContainer)
    quoteInput.focus()
    gameOn = true

  });

  document.addEventListener("keydown", () => {
    if (!gameOn && nameSubmitted) {
      keyDown = true
    }
  })


  document.addEventListener("keyup", () => {
    if (keyDown) {
      console.log("Keyup fired")
      console.log(gameOn)
      switchVisible(gameEndContainer, gameContainer)
      quoteInput.focus()
      keyDown = false
      gameOn = true
    }
  });
    
  

}

function main() {

  renderNewQuote(quoteDisplay, quoteInput)
  attachListeners()
  renderLeaderboard(getData())
  

}

main()