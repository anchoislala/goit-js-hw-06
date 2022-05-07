// Напиши скрипт, который для каждого элемента массива ingredients:

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
// и количество элементов в категории(всех вложенных в него < li >).

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientsEl = (options) => {
  return options.map(option => {

    const ingredientEl = document.createElement('li');
    ingredientEl.classList.add('item');

    ingredientEl.textContent = option;

    return ingredientEl;
  });
};

const ingredientsEl = makeIngredientsEl(ingredients);

const ingredientsList = document.querySelector('#ingredients');

ingredientsList.append(...ingredientsEl);
