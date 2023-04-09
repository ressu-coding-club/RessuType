/*GAME*/
const body = document.body
const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");
const gameContainer = document.querySelector(".container-game");
const gameEndContainer = document.querySelector(".container-game-end")

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


function getQuote() {
    return FINNISH_QUOTES[0];
}

export function renderNewQuote() {
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

function reset() {
    body.onmousedown = () => {return false}
    renderNewQuote()
}

function switchVisible(hide, show) {
    hide.classList.remove("visible");
    hide.classList.add("not-visible");

    show.classList.remove("not-visible");
    show.classList.add("visible");
}

export function characterCheck() {
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
    }});
  
    if (correct) {
      switchVisible(gameContainer, gameEndContainer)
    }
  
}






/*
const congratulationTxt = document.getElementById("congrats");
const submitInstructions = document.getElementById("inputinstruction");
const submitButton = document.getElementById("submitButton");
const nameInput = document.getElementById("submitname");
const reportELement = document.getElementById("report");



const obj = {
  userName: "",
  userTime: time,
};


function onSubmit () {
  let inputvalue = nameInput.value;
  if (inputvalue.length > 0) {
    sessionStorage.setItem("userName", inputvalue);
    obj["userName"] = sessionStorage.getItem("userName");
    sessionStorage.setItem("userData", JSON.stringify(obj));
    console.log(sessionStorage.getItem("userData"));
  }
switchVisible(gameEndContainer, gameContainer);
}

submitButton.addEventListener("click", () => {

  });


congratulationTxt.innerText = "You typed the quote in " + time + " seconds!";
submitInstructions.innerText =
  "Write your name and press the button (4 to 8 characters)";
*/
