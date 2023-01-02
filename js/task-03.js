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


const imageList = document.querySelector('.gallery');

const imageEl = images.map(images => `<li><img class="image" src=${images.url} alt=${images.alt} width = 450></img></li>`)
imageList.insertAdjacentHTML("beforeend", imageEl);
//style
imageList.style.display = 'flex';
imageList.style.gap = '50px';