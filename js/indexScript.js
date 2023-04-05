const body = document.body
const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");
const timer = document.getElementById("timer");

// container
const gameContainer = document.querySelector(".container-game");
const gameEndContainer = document.querySelector(".container-game-end");
const leaderboardContainer = document.querySelector(".container-leaderboard");
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

function switchVisible (elemhide, elemshow) {
  elemhide.classList.remove("visible");
  elemhide.classList.add("not-visible");

  elemshow.classList.remove("not-visible");
  elemshow.classList.add("visible");
}

body.onmousedown = () => {return false}
renderNewQuote();
let typestart = true;
quoteInput.addEventListener("input", () => {

  if (typestart) {
    startTimer();
    typestart = false;
  }

  const arrayQuote = quoteDisplay.querySelectorAll("span");
  const arrayInput = quoteInput.value.split("");

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
    switchVisible(gameContainer, gameEndContainer)
    body.onmousedown = () => {return true}
  }
});
