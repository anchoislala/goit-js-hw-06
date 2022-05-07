// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.


const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {

    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
});