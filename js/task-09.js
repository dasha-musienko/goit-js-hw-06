function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector(".change-color")
const bodyEl = document.body
const spanEl = document.querySelector("p .color")

changeColorBtnEl.addEventListener("click", changeColorBtnClickHandler)

function changeColorBtnClickHandler() {
  const randomColor = getRandomHexColor()
  bodyEl.style.backgroundColor = `${randomColor}`
  spanEl.textContent = `${randomColor}`
}