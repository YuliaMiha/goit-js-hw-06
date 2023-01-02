const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
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