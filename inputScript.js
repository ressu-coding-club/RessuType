const congratsElement = document.getElementById("congrats")
const inputinstructionElement = document.getElementById("inputinstruction")
const buttonElement = document.getElementById("namebutton")
const inputElement = document.getElementById("name")
const reportELement = document.getElementById("report")
const time = sessionStorage.getItem("userTime")
const obj = {
    "userName": "",
    "userTime": time
}

congratsElement.innerText = "You typed the quote in " + time + " seconds!"
inputinstructionElement.innerText = "Type your name to be displayed, then press button(4 to 8 characters):"

buttonElement.addEventListener("click", () =>{
    let inputvalue = inputElement.value
    if (inputvalue.length > 0) {
        sessionStorage.setItem("userName", inputvalue)
        obj["userName"] = sessionStorage.getItem("userName")
        reportELement.innerText = "obj is: " + JSON.stringify(obj) 
    }
})