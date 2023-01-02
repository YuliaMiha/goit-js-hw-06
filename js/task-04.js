//1. Напиши скрипт для створення галереї зображень на підставі масиву даних.
// HTML містить список ul.gallery. <ul class="gallery"></ul>
//2. Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML()
//3. Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.


const galleryEl = document.querySelector(".gallery");

galleryEl.style.listStyle =  "none";
galleryEl.style.display = "flex";
galleryEl.style.flexWrap = "wrap";
galleryEl.style.gap = "10px";

const imageItem = images.map(({ url, alt }) => {
  return `
  <li class="gallery__item" style ="display: flex; flex-basis: calc(33.333% - 20px); padding-right: 10px;">
    <img src="${url}" alt="${alt}" class="item__img" style ="  display: block; object-fit: cover;
  max-width: 100%; height: auto;"/>
  </li>
  `;
}).join("");
console.log(imageItem);

galleryEl.insertAdjacentHTML('beforeend', imageItem);