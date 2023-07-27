function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input")
const createBtnEl = document.querySelector("[data-create]")
const destroyBtnEl = document.querySelector("[data-destroy]")
const boxesEl = document.querySelector("#boxes")
let elQuantity = 0;

inputEl.addEventListener("input", inputHandler)
createBtnEl.addEventListener("click", createBtnClickHandler)
destroyBtnEl.addEventListener("click", destroyBtnClickHandler)

function inputHandler(event) {
  elQuantity =  +event.currentTarget.value;
}

function createBtnClickHandler () {
  createBoxes(elQuantity);
  elQuantity = 0;
}

function createBoxes(amount) {
  boxesEl.innerHTML = "";
  let elementString = "";
  let widthAndHightCount = 30;

  if (amount > inputEl.max || amount < inputEl.min) {
    window.alert(`Допустима кількість елементів від ${inputEl.min} до ${inputEl.max}`)
  } else {
    for (let i = 0; i < amount; i += 1) {
      elementString += `
      <div style="
      display: inline-block;
      margin: 10px; 
      height: ${widthAndHightCount}px;
      width: ${widthAndHightCount}px;
      background-color: ${getRandomHexColor()}"></div>
      `
      widthAndHightCount += 10
    }
    
    boxesEl.insertAdjacentHTML("afterbegin", elementString);
  }
  
  inputEl.value = ""
}

function destroyBtnClickHandler() {
  destroyBoxes()
}

function destroyBoxes() {
  boxesEl.innerHTML = ""
}
