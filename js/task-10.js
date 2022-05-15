// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
let created = true;
let firstBoxSize = 30;

  const elementsCollection = {
    inputQty: document.querySelector('#controls input'),
    divBoxes: document.querySelector('#boxes')
  };

btnCreate.addEventListener('click', () => {   
   createBoxes();
   console.log("ButtonCreate was clicked");
 });
   
  btnDestroy.addEventListener('click', () => {
   destroyBoxes();
   console.log("ButtonDestroy was clicked");
   });

function createBoxes(amount) {
    if (created) {
    firstBoxSize = 30;
}
  amount = elementsCollection.inputQty.value;

  for (let i = 0; i < amount; i += 1) {

    const box = document.createElement('div');
    box.style.width = `${firstBoxSize}px`;
    box.style.height = `${firstBoxSize}px`;

    box.style.backgroundColor = getRandomHexColor();

    elementsCollection.divBoxes.append(box);

    firstBoxSize += 10;
  }
  }

function destroyBoxes() {
  elementsCollection.divBoxes.innerHTML = "";
  firstBoxSize = 30;
  elementsCollection.inputQty.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

