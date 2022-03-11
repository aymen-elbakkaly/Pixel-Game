var count = 5;
var color = "white";

createTable(count);
colorCase(color);

var rangeInputElement = document.querySelector("#parameter__input-range");
rangeInputElement.addEventListener("input", updateRangeInputValue);

var generationButton = document.querySelector("#parameter__button");
generationButton.addEventListener("click", (event) => {
  clearTable();
  createTable(count);
  colorCase(color);
});

var basicColorButton = document.querySelector("#color-picker__basic-color");
basicColorButton.addEventListener("click", (event) => {
  colorCase("var(--color-detail)");
});

var whiteColorButton = document.querySelector("#color-picker__white-color");
whiteColorButton.addEventListener("click", (event) => {
  colorCase("white");
});

var blackColorButton = document.querySelector("#color-picker__black-color");
blackColorButton.addEventListener("click", (event) => {
  colorCase("black");
});

var redColorButton = document.querySelector("#color-picker__red-color");
redColorButton.addEventListener("click", (event) => {
  colorCase("red");
});

var blueColorButton = document.querySelector("#color-picker__blue-color");
blueColorButton.addEventListener("click", (event) => {
  colorCase("blue");
});