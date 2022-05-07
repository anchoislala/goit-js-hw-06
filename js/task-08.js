// Напиши скрипт управления формой логина.

const form = document.querySelector('.login-form');

// Обработка отправки формы form.login - form должна быть по событию submit.

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

// При отправке формы страница не должна перезагружаться.
    
    event.preventDefault();

// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;  
    const formData = {
        mail,
        password,
    };

// Если в форме есть незаполненные поля,
// выводи alert с предупреждением о том, что все поля должны быть заполнены.
    
    if (mail === '' || password === '') {
    const message = "Все поля должны быть заполнены!";
    return alert(message);
}

// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

    console.log(formData);
    event.currentTarget.reset();
}
