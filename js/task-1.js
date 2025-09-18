const categoryList = document.querySelectorAll(".category-name");
console.log(`Namber of categoris: ${categoryList.length}`);

categoryList.forEach(category => {
    console.log(`Category: ${category.innerText}`);
    const numItems = category.parentNode.querySelectorAll(".category-list-item").length;
    console.log(`Elements: ${numItems}`);
});