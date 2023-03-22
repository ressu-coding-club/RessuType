const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");
const timer = document.getElementById("timer");
const gameContainer = document.querySelector(".container-game");
const gameEndContainer = document.querySelector(".container-game-end");

const FINNISH_QUOTES = [
  "test",
  "Uskallatteko mennä Arin luolaan",
  "kysyin miten hänellä oli mennyt lyhyen etäkurssi...hän oli saanut seiskan...enää en lähetä syntymäpäivälahjoja",
  "Säälikää nyt mua kun teidän kokeita on niin kamala tarkistaa",
];

const ENGLISH_QUOTES = [
  "This summer there have been a lot of mosquitos in Lapland and that has been a problem because they give a lot of Megabytes and it Gigahertz",
  "If you look at this picture here, what does it look like?",
  "Doo doo X",
];

let timerID;

function getQuote() {
  return FINNISH_QUOTES[0];
}

// const calculateQuoteId = Math.round(Math.random() * FINNISH_QUOTES.length);

function renderNewQuote() {
  /*
  clears quote element and replaces it with a list of elements;
  each item is a character of quote
    --> timer only starts once quote ready
  */
  const quote = getQuote();
  quoteDisplay.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteDisplay.appendChild(characterSpan);
  });
  quoteInput.value = null;
  startTimer();
}

function startTimer() {
  timer.innerText = 0;
  startTime = new Date();
  timerID = setInterval(() => {
    timer.innerText = Math.floor(getTimerTime());
  }, 1000);
}

function getTimerTime() {
  return (new Date() - startTime) / 1000;
}

// input listener fires when input area changed
quoteInput.addEventListener("input", () => {
  const arrayQuote = quoteDisplay.querySelectorAll("span");
  const arrayInput = quoteInput.value.split("");

  /*
  classes determine colour or none
  foreach item in this list, run this function
  every time there is input, cycles thru the whole input and quote and updates styles
  */

  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayInput[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.remove("correct");
      characterSpan.classList.add("incorrect");
      correct = false;
    }
  });

  if (correct) {
    sessionStorage.setItem("userTime", getTimerTime());
    clearInterval(timerID);

    gameContainer.classList.remove("visible");
    gameContainer.classList.add("not-visible");

    gameEndContainer.classList.remove("not-visible");
    gameEndContainer.classList.add("visible");
  }
});

function startNewGame() {
  gameContainer.classList.remove("not-visible");
  gameContainer.classList.add("visible");

  gameEndContainer.classList.remove("visible");
  gameEndContainer.classList.add("not-visible");

  renderNewQuote();
}

startNewGame();
