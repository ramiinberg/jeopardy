async function fetchCategories(count, offset) {
  const response = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`)
  const data = await response.json()
  return data
}

function getClueHtml(clueValue) {
  return `<div class="my-category-clue" style="grid-row-start: ${clueValue / 100 + 1}">$${clueValue}</div>`
}


function getCategoryHtml(category) {
  return `
  <div class="my-category-title">${category.title}</div>
  ${getClueHtml(100)}
  ${getClueHtml(200)}
  ${getClueHtml(300)}
  ${getClueHtml(400)}
  `
}

fetchCategories(5, 10).then(categories => {
  const categoryNamesHtml = categories.map(getCategoryHtml).join("")
  document.getElementById("jeopardy").innerHTML = categoryNamesHtml
  console.log('data', categories)
});