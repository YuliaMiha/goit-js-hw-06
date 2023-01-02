function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.




//Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor
//для отримання кольору.

const boxesEl = document.querySelector("#boxes")
const inputEl = document.querySelector(".number")
console.log(inputEl);
const createBtnEl = document.querySelector('[data-create]');
createBtnEl.addEventListener('click', createBoxes)
 
let a = 0;
function createBoxes() {
  const amount = inputEl.value;
  console.log(amount);
  for (let i = 0; i < amount; i += 1){
    //const divEl = document.createElement("div");
    //divEl.style.backgroundColor = getRandomHexColor();
    //divEl.style.width = 30 + a * 10 + 'px';
    //divEl.style.height = 30 + a * 10 + 'px';

    const divEl = `<div style="width:${30 + a * 10 + 'px'};height:${30 + a * 10 + 'px'};background-color:${getRandomHexColor()}"></div>`;
     a += 1;
    boxesEl.insertAdjacentHTML('beforeend', divEl);
  }
 
}
//очищає строку
function destroyBoxes(e) {
  a = 0;
  boxesEl.innerHTML = '';
}