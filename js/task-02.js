const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById("ingredients")
const itemsArr = [];

ingredients.forEach((ingredient => {
  const li = document.createElement("li")
  li.textContent = ingredient;
  li.classList.add("item")
  itemsArr.push(li)
}))

listEl.append(...itemsArr)