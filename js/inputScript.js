const congratulationTxt = document.getElementById("congrats");
const submitInstructions = document.getElementById("inputinstruction");
const submitButton = document.getElementById("submitButton");
const nameInput = document.getElementById("submitname");
// const reportELement = document.getElementById("report");
const time = sessionStorage.getItem("userTime");

const obj = {
  userName: "",
  userTime: time,
};

congratulationTxt.innerText = "You typed the quote in " + time + " seconds!";
submitInstructions.innerText =
  "Write your name and press the button (4 to 8 characters)";

submitButton.addEventListener("click", () => {
  let inputvalue = nameInput.value;
  if (inputvalue.length > 0) {
    sessionStorage.setItem("userName", inputvalue);
    obj["userName"] = sessionStorage.getItem("userName");
    // reportELement.innerText = "obj is: " + JSON.stringify(obj);
    sessionStorage.setItem("userData", JSON.stringify(obj));
    console.log(sessionStorage.getItem("userData"));
  }
  switchVisible(gameEndContainer, gameContainer);
});
