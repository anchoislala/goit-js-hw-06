// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика
// и инициализируй её значением 0.

const CounterValue = function ({
    rootSelector,
    initialValue = 0,
    step = 1 } = {}) {

    this._value = initialValue; 
    this._step = step;

    this._refs = this._getRefs(rootSelector)

    this._bindEvents();
};

CounterValue.prototype._getRefs = function (rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value');

    return refs;
}
    
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.

CounterValue.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updateQty();
    });

    this._refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updateQty();
    });
}

// Обновляй интерфейс новым значением переменной counterValue.

CounterValue.prototype.updateQty = function () {
    this._refs.value.textContent = this._value;
}

CounterValue.prototype.increment = function () {
    this._value += this._step;
}

CounterValue.prototype.decrement = function () {
    this._value -= this._step;
}

new CounterValue ({ rootSelector: '#counter', step: 1 });

