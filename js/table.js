const tablebodyElement = document.getElementById("tableBody");
const leaderboardButton = document.getElementById("showLeaderboardButton");
const closeLeaderboard = document.getElementById("closeLeaderboardButton");

const url = "https://jvbx5svkll.execute-api.eu-north-1.amazonaws.com/dev3";
const a = {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "omit", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json"}
    };

/*
const b = fetch(url, a)
  .then((response) => response.json())
  .then(data => {
    console.log(data)
  })
  */


function addRow() {
  const newRow = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.innerText = "2:";
  const cell2 = document.createElement("td");
  cell2.innerText = "Emma";
  const cell3 = document.createElement("td");
  cell3.innerText = "69.696";

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);

  tablebodyElement.appendChild(newRow);
}

leaderboardButton.addEventListener("click", () => {
  gameContainer.classList.remove("visible");
  gameContainer.classList.add("not-visible");

  // gameEndContainer.classList.remove("visible");
  // gameEndContainer.classList.add("not-visible");

  leaderboardContainer.classList.remove("not-visible");
  leaderboardContainer.classList.add("visible");
});

closeLeaderboard.addEventListener("click", () => {
  gameContainer.classList.remove("not-visible");
  gameContainer.classList.add("visible");

  leaderboardContainer.classList.remove("visible");
  leaderboardContainer.classList.add("not-visible");
});
