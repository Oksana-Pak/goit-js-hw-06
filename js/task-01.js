const listItemsRef = document.querySelectorAll('.item');
const numberOfItems = listItemsRef.length;
console.log(`Number of categories: ${numberOfItems}`);

listItemsRef.forEach(listItem => {
  const category = listItem.firstElementChild.textContent;
  const numberOfElements = listItem.lastElementChild.children.length;
  console.log(`Category: ${category}\nElements: ${numberOfElements}`);
});
