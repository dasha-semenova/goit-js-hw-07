// const categoryList = document.querySelectorAll(".category-name");
// console.log(`Namber of categoris: ${categoryList.length}`);

// categoryList.forEach(category => {
//     console.log(`Category: ${category.innerText}`);
//     const numItems = category.parentNode.querySelectorAll(".category-list-item").length;
//     console.log(`Elements: ${numItems}`);
// });

const categoryList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(category => {
    const titleEl = category.querySelector("h2");
    const title = titleEl.textContent.trim();
    const numItems = category.querySelectorAll('ul li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${numItems}`);
});