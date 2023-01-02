const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//2. Додасть назву інгредієнта як його текстовий вміст.
//3. Додасть елементу клас item.
//4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const list = document.querySelector('#ingredients');

  const ingrItem = ingredients.map(ingredient => {
  
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    liEl.classList.add('item');
    return liEl;
    
  })
  console.log([...ingrItem]);

list.append(...ingrItem);