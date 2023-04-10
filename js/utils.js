/*TIMER*/
const timer = document.getElementById("timer");
let startTime = 0;
let timerID;
function startTimer() {
    startTime = new Date();
    timerID = setInterval(() => {
      timer.innerText = Math.floor(getTimerTime())
      console.log(getTimerTime());
    }, 1000);
}

function getTimerTime() {
    return (new Date() - startTime) / 1000;
}

/*API CALLS*/

function getTimes() {
    const url = "https://jvbx5svkll.execute-api.eu-north-1.amazonaws.com/dev3";
    const httpdata = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
    };
    return fetch(url, httpdata)
    .then(response => response.json())
    .then(data => data)
}

function post_userData (obj) {
    const url = "https://jvbx5svkll.execute-api.eu-north-1.amazonaws.com/dev3";
    const httpdata = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(obj)
    };
    return fetch(url, httpdata)
    .then(response => response.json())
    .then(data => data) 
}

async function asynccall(func) {
    const res = await func;
    console.log(res)
}

export {startTimer, getTimerTime}