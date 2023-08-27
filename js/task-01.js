const categoriesList = document.querySelector('#categories');

const categoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(categoriesItem =>{
    const categoriesTitle = categoriesItem.querySelector('h2').textContent;

    const subItems = categoriesItem.querySelectorAll('li');

    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${subItems.length}`);
});