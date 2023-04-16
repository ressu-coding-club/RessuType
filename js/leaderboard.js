const tablebodyElement = document.getElementById("tableBody");
const firstElement = document.getElementById("first");
const secondElement = document.getElementById("second");
const thirdElement = document.getElementById("third");

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

  tablebodyElement.appendChild(newRow);
}

function renderLeaderboard(Data) {
  let data = Data;
  for (let x = 0; x < data.length; x++) {
    let rank = (x + 1).toString();
    let name = data[x].userName.toString();
    let time = data[x].userTime.toString();
    renderNewRow(rank, name, time);
  }
}

function renderTop3(Data, ls) {
  for (let x = 0; x < 3; x++) {
    let name = Data[x].userName;
    let time = Data[x].userTime.toString();
    ls[x].innerText = `${name}: ${time}`;
  }
}

async function GETRender(getData) {
  let Data = await getData;
  renderLeaderboard(Data);
  renderTop3(Data, [firstElement, secondElement, thirdElement]);
}

export { GETRender };
