const tablebodyElement = document.getElementById("tableBody");
const closeLeaderboard = document.getElementById("closeLeaderboardButton");
const leaderboardContainer = document.querySelector(".container-leaderboard");

function renderNewRow(rank, name, time) {
  const newRow = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.innerText = rank;
  const cell2 = document.createElement("td");
  cell2.innerText = name;
  const cell3 = document.createElement("td");
  cell3.innerText = time;

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);

  tablebodyElement.appendChild(newRow)
}

async function renderLeaderboard(getData) {
  let data = await getData
  for (let x = 0; x < data.length; x++) {
    let rank = (x+1).toString()
    let name = data[x].userName.toString()
    let time = data[x].userTime.toString()
    renderNewRow(rank,name ,time )
  }
}

export {renderLeaderboard}

/*
closeLeaderboard.addEventListener("click", () => {
  gameContainer.classList.remove("not-visible");
  gameContainer.classList.add("visible");

  leaderboardContainer.classList.remove("visible");
  leaderboardContainer.classList.add("not-visible");
});
*/
