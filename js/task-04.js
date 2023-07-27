let counterValue = Number(document.querySelector("#value").textContent);
const decrementBtnEl = document.querySelector('[data-action="decrement"]')
const incrementBtnEl = document.querySelector('[data-action="increment"]')

decrementBtnEl.addEventListener("click", decrementClickHandler)
incrementBtnEl.addEventListener("click", incrementClickHandler)

function decrementClickHandler() {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue
}

function incrementClickHandler() {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue
}