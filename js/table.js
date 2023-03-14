const tablebodyElement = document.getElementById("dataDisplay");

const url = "https://jvbx5svkll.execute-api.eu-north-1.amazonaws.com/dev2";

const myHeaders = new Headers();

const myRequest = new Request(url, {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
});

const data = fetch(myRequest)
  .then((response) => response.json())
  .catch(console.log("error"));

console.log(data);

function addrow() {
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