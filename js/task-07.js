const rangeEl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")

rangeEl.addEventListener("input", inputRangeHandler)


function inputRangeHandler(event) {
  textEl.style.fontSize = event.currentTarget.value + "px"
}