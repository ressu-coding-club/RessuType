const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

const FINNISH_QUOTES = [
  "test",
  "Uskallatteko mennä Arin luolaan",
  "kysyin miten hänellä oli mennyt lyhyen etäkurssi...hän oli saanut seiskan...enää en lähetä syntymäpäivälahjoja",
  "Säälikää nyt mua kun teidän kokeita on niin kamala tarkistaa"
]

const ENGLISH_QUOTES = [
  "This summer there have been a lot of mosquitos in Lapland and that has been a problem because they give a lot of Megabytes and it Gigahertz",
  "If you look at this picture here, what does it look like?",
  "Doo doo X"
]

function getQuote() {
  return FINNISH_QUOTES[0]
}

function renderNewQuote() {
  /*
  clears quote element and replaces it with a list of elements;
  each item is a character of quote
    --> timer only starts once quote ready
  */
  const quote = getQuote()
  quoteDisplayElement.innerHTML = ''
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null
  startTimer()
}

function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = Math.floor(getTimerTime())
  }, 1000)
}

function getTimerTime() {
  return ((new Date() - startTime) / 1000)
}

//input listener fires when input area changed
quoteInputElement.addEventListener('input', () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  const arrayInput = quoteInputElement.value.split('')

  /*
  classes determine colour or none
  foreach item in this list, run this function
  every time there is input, cycles thru the whole input and quote and updates styles
  */
  let correct = true
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayInput[index]
    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false
    }
  })

  if (correct){
    
    window.alert("correct")
    // also update the scoreboards here
  } 
})

/*
unsure if order of calling these functions does anything
asynchronous would probably affect things
*/
renderNewQuote()