const loginFormEl = document.querySelector(".login-form")

loginFormEl.addEventListener("submit", loginFormSubmitHandler)

function loginFormSubmitHandler(event) {
  event.preventDefault()

  const elements = Array.from(event.currentTarget.elements)
  let countOfEmptyStrings = 0;

  // Перевіряє чи всі поля заповненні
  elements.forEach((element, idx, arr) => {
    if (idx < arr.length - 1 && !element.value) {
        countOfEmptyStrings += 1;
    }
  })

  if (countOfEmptyStrings > 0) {
    window.alert("Всі поля мають бути заповненні")
  }

// Створює і виводить в консоль об'єкт даних
const loginData = {}
if (countOfEmptyStrings === 0) {
  elements.forEach((element, idx, arr) => {
    if (idx < arr.length - 1) {
      loginData[element.name] = element.value
    }
  })
  console.log(loginData)
  event.currentTarget.reset()
}
}

