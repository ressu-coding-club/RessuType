import { renderNewQuote, characterCheck } from "./game.js";
import { startTimer } from "./utils.js";

function initgamelistener() {

  let typestart = true
  quoteInput.addEventListener("input", () => {

    if (typestart) {startTimer(); typestart = false;}

    characterCheck()

  })
}

function main() {

  renderNewQuote()
  initgamelistener()

}

main()

  
