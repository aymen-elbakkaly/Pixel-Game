function createCase(number, line) {
  var caseElements = document.createElement("td");
  caseElements.classList.add("table__line-case");
  var lineElement = document.querySelector("#table__line-" + line);
  lineElement.appendChild(caseElements);
}

function createLine(number, max) {
  var lineElements = document.createElement("tr");
  lineElements.classList.add("table__line");
  lineElements.setAttribute("id", "table__line-" + number);
  var tbodyElement = document.querySelector("#tbody");
  tbodyElement.appendChild(lineElements);

  for (let index = 0; index < max; index++) {
    createCase(index, number);
  }
}

function createTable(number = 5) {
  for (let index = 0; index < number; index++) {
    createLine(index, number);
  }
}

function clearTable() {
  var tBody = document.querySelector("#tbody");
  tBody.innerHTML = "";
}

function updateRangeInputValue() {
  var rangeInputElement = document.querySelector("#parameter__input-range");
  var rangeValue = rangeInputElement.value;
  var rangeValueElement = document.querySelector("#parameter__case-amount");
  rangeValueElement.textContent = rangeValue + " : " + rangeValue;
  count = rangeValue;
}

function colorCase(color) {
  var caseNumber = document.querySelectorAll(".table__line-case");
  caseNumber.forEach((item) => {
    item.addEventListener("click", (event) => {
      item.style.backgroundColor = color;
    });
  });
}
