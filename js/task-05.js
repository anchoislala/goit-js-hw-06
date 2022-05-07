// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.

const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output')
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value;

    // Если инпут пустой, в спане должна отображаться строка "Anonymous".

    if (!refs.nameLabel.textContent) {
        refs.nameLabel.textContent = 'Anonymous';
    }
}