const categoriesEl = document.querySelectorAll('li.item')

console.log(`Number of categories: ${categoriesEl.length}`)

categoriesEl.forEach(el => {
  console.log(`
  Category: ${el.children[0].textContent}
  Elements: ${el.children[1].children.length}
  `) 
})