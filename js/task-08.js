// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//     що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//  де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
//  Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(e) {
   e.preventDefault();

    const valueEmail = e.currentTarget.elements.email.value; // отримати ведене значення 
    const valuePassword = e.currentTarget.elements.password.value;
   // console.log(valueEmail);
    //console.log(valuePassword);
    
    if (!(valuePassword && valueEmail)) { /*перевіряю чи поле не пусте */
        return alert("Всі поля повинні бути заповнені");
    } else {
        const data = new FormData(e.currentTarget); //збирає значення форми кі:велю
      //  console.log(data);
        const result = {};
        for (let [key, value] of data.entries()) {
            result[key] = value;
        }
        console.log(result);

        e.currentTarget.reset(result);
    }

}