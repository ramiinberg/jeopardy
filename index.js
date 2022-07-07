async function fetchCategories(count, offset) {
  const response = await fetch(`https://jservice.io/api/categories?count=${count}`)
  const data = await response.json()
  return data
}

function getCategoryHtml(category) {
  return `
  <div class="my-category-title">${category.title}</div>

  <div class="my-category-clue" style="grid-row-start: 2">$100</div>
  <div class="my-category-clue" style="grid-row-start: 3">$200</div>
  <div class="my-category-clue" style="grid-row-start: 4">$300</div>
  <div class="my-category-clue" style="grid-row-start: 5">$400</div>
  `
}

fetchCategories(4, 0).then(categories => {
  const categoryNamesHtml = categories.map(getCategoryHtml).join("")
  document.getElementById("jeopardy").innerHTML = categoryNamesHtml
  console.log('data', categories)
});