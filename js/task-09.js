function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }




// який змінює кольори фону елемента <body>
// через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector("button");
const spanEl = document.querySelector("span");

btnEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
spanEl.textContent = getRandomHexColor();
})