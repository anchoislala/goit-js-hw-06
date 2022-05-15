// Напиши скрипт который:

const categoriesList = document.querySelector('#categories').children;
const categoriesItem = document.querySelectorAll('.item');
const categoriesDescription = document.querySelectorAll('.item ul');

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

console.log('Number of categories:', categoriesItem.length);

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).

    categoriesItem.forEach((category) => {
        console.log('Category: ' + category.firstElementChild.textContent)
        console.log('Elements: ' + category.lastElementChild.children.length)
    }
        )


        