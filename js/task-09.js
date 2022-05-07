// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль 
// при клике на button.change - color
// и выводит значение цвета в span.color.

const btnChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = document.body.style.backgroundColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
