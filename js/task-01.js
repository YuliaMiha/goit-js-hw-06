//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//2. Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
//і кількість елементів в категорії(усіх < li >, вкладених в нього).

const categories = document.querySelector('#categories');
const categoriesArrayLength = [...categories.children].length;
console.log("Number of categories:", categoriesArrayLength);

const itemsEl = document.querySelectorAll('.item');
//console.log(itemsEl);
const itemsArray = [...document.querySelectorAll('.item')];
//console.log(itemsArray);
 
itemsArray.forEach(element => {
    let listName = element.querySelector("h2").textContent
    let listLength = element.querySelectorAll("ul > li").length
    
    console.log("Category:", listName);
    console.log('Elements:', listLength);
})
