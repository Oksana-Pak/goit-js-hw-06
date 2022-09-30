const listItems = document.querySelectorAll('.item');
const numberOfItems = listItems.length;
console.log(`Number of categories: ${numberOfItems}`);

listItems.forEach(listItem => {
  const category = listItem.firstElementChild.textContent;
  const numberOfElements = listItem.lastElementChild.children.length;
  console.log(`Category: ${category}\nElements: ${numberOfElements}`);
});
