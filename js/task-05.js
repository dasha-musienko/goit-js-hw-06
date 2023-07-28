const inputFieldEl = document.querySelector("#name-input")
const outputStringEl = document.querySelector("#name-output")
const startValue = outputStringEl.textContent;

inputFieldEl.addEventListener("input", inputFieldHandler)

function inputFieldHandler(event) {
  if (event.currentTarget.value.trim() === "") {
    outputStringEl.textContent = startValue;
  } else {
    outputStringEl.textContent = event.currentTarget.value.trim()
  }
}