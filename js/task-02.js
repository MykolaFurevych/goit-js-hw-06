const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
  const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  // ingredientsEl.append(itemEl);
     return itemEl;
    
  });
 console.log(elements);

ingredientsEl.append(...elements);
console.log(ingredientsEl);

