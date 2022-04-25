
const numberOfCategories = document.querySelectorAll('li.item').length;
console.log('Number of categories:', numberOfCategories);
const categoriesEl = document.querySelectorAll('li.item');
categoriesEl.forEach((category) => {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
    
});

