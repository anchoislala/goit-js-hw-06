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
let created;

  const elementsCollection = {
    inputQty: document.querySelector('#controls input'),
    divBoxes: document.querySelector('#boxes')
  };

btnCreate.addEventListener('click', () => {   
   createBoxes();
   console.log("ButtonCreate was clicked");
  created = true;
 });
   
  btnDestroy.addEventListener('click', () => {
   destroyBoxes();
   console.log("ButtonDestroy was clicked");
   });

    let firstBoxWidth = 30;
    let firstBoxHeight = 30;


function createBoxes(amount) {
  if (created) {
    destroyBoxes();
}
  amount = elementsCollection.inputQty.value;

  for (let i = 0; i < amount; i += 1) {

    const box = document.createElement('div');
    box.style.width = `${firstBoxWidth}px`;
    box.style.height = `${firstBoxHeight}px`;

    box.style.backgroundColor = getRandomHexColor();

    elementsCollection.divBoxes.append(box);

    firstBoxWidth += 10;
    firstBoxHeight += 10;
  }
  }

function destroyBoxes() {
  created = false;
  const divBoxesRemove = document.querySelector('#boxes').children;

  Array.from(divBoxesRemove).forEach(function (element) {
    element.remove();
  })
  
    firstBoxWidth = 30;
    firstBoxHeight = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

