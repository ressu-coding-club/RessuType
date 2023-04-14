/*GAME*/

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

function renderNewQuote(quoteDisplay, quoteInput) {
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

function switchVisible(hide, show) {
    hide.classList.remove("visible");
    hide.classList.add("not-visible");

    show.classList.remove("not-visible");
    show.classList.add("visible");
}

function quoteCorrect(quoteDisplay, quoteInput) {
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
  
    if (correct) {return true};
  
}

function fastestUpdate (time, highScore) {
  if (time < highScore) {
    return [true, time]
  } else if (highScore === null) {
    return [true, time]
  };
  return false

}

function renderEndText (time, highScore, timeReport, highReport, submitInstructions, nameSubmitted) {
  timeReport.innerText = `You typed the quote in ${time.toString()} seconds!`;
  highReport.innerText = `Your current fastest time is: ${highScore.toString()} seconds.`;
  if (nameSubmitted) {
    submitInstructions.innerText = null
  } else {
    submitInstructions.innerText = "Write your name and press the button (4 to 8 characters)";
  }
}

export {renderNewQuote, switchVisible, quoteCorrect, renderEndText, fastestUpdate}
