const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListRef = document.querySelector('#ingredients');

const makeIngredientsElement = array => {
  return array.map(arr => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.textContent = arr;
    ingredientsEl.classList.add('item');
    return ingredientsEl;
  });
};
const elements = makeIngredientsElement(ingredients);

ingredientsListRef.append(...elements);
