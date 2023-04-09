const tablebodyElement = document.getElementById("tableBody");
const leaderboardButton = document.getElementById("showLeaderboardButton");
const closeLeaderboard = document.getElementById("closeLeaderboardButton");
const leaderboardContainer = document.querySelector(".container-leaderboard");

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
