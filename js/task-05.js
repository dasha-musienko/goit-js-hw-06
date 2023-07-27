const inputFieldEl = document.querySelector("#name-input")
const outputStringEl = document.querySelector("#name-output")

inputFieldEl.addEventListener("input", inputFieldHandler)

function inputFieldHandler(event) {
  outputStringEl.textContent = event.currentTarget.value.trim()
}