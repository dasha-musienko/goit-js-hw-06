const inputEl = document.querySelector("#validation-input")
const allowedLength = Number(inputEl.dataset.length)


inputEl.addEventListener("blur", inputCheckHandler)

function inputCheckHandler(event) {
  if (event.currentTarget.value.length !== allowedLength) {
    event.currentTarget.classList.add("invalid")
  } else {
    if (event.currentTarget.classList.contains("invalid")) {
      event.currentTarget.classList.replace("invalid", "valid")
    } else {
      event.currentTarget.classList.add("valid")
    }
  }
}
