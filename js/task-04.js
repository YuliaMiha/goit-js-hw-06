//1. Напиши скрипт для створення галереї зображень на підставі масиву даних.
// HTML містить список ul.gallery. <ul class="gallery"></ul>
//2. Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML()
//3. Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.


const buttonDecrement = document.querySelector('button[data-action = decrement]');
const buttonIncrement = document.querySelector('button[data-action = increment]');

let value = Number(document.querySelector('#value').textContent);
let spanValue = document.querySelector('#value')

buttonIncrement.addEventListener('click', clickToAddOne);
function clickToAddOne() {
    value += 1;
    spanValue.textContent = value;
}

buttonDecrement.addEventListener('click', clickToRemoteOne);
function clickToRemoteOne() {
    value -= 1;
    spanValue.textContent = value;
}
