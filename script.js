let dishes = [
    new Dish('Pizza Burrito', 'mit Mozzarella Bufala', 8.50),
    new Dish('Pizza Mozzarella', 'mit Mozzarella aus original Südtiroler Heumilch', 7.20),
    new Dish('Pizza Fitness', 'mit frischem Gemüse aus biologischem Anbau', 9.10),
    new Dish('Pizza Salute', 'mit leckerem Brokkoli und Stracchino', 9.30),
    new Dish('Pizza Gustosa', 'mit Oliven aus Süditalien', 8.70),
];

let basketElements = [
    new BasketElement('Pizza Fitness', 'mit frischem Gemüse aus biologischem Anbau', 9.10),
];

function init() {
    renderDishes();
    renderBasket();
}

function renderDishes() {
    let dishesContainer = document.getElementById('dishes');
    dishesContainer.innerHTML = '';
    for (let i = 0; i < dishes.length; i++) {
        const dish = dishes[i];
        dishesContainer.innerHTML += templateDish(dish);
    }
}

function renderBasket() {
    let basketContainer = document.getElementById('basket-container');
    basketContainer.innerHTML = '';
    if (basketElements == 0) {
        basketContainer.innerHTML = templateBasketEmpty()
    } else {
        renderBasketContent(basketContainer);
    }
}

function renderBasketContent(basketContainer) {
    for (let i = 0; i < basketElements.length; i++) {
        const basketElement = basketElements[i];
        basketContainer.innerHTML += templateBasket(basketElement);
    }
    basketContainer.innerHTML += templateBasketPrices();
}

/**
 * 
 * @param {string} name expects the name of the dish. Name must be unique
 */
function addToBasket(name) {
    let elementInBasket = findElement(basketElements, name); // searches, if element is already in basket
    if (elementInBasket) {
        elementInBasket.amount++;
    } else { // dish not in basket --> search dish by name and add it to basket
        const dishToAdd = findElement(dishes, name);
        basketElements.push(new BasketElement(dishToAdd.name, dishToAdd.description, dishToAdd.price));
    }
    renderBasket();
}

function increaseQuantity(name) {
    let elementInBasket = findElement(basketElements, name);
    elementInBasket.amount++;
    renderBasket();
}

/**
 * function decreases the amount of a product in basket or removes it, if it's the last remaining element
 * @param {string} name expects the name of the dish. Name must be unique
 */
function decreaseQuantity(name) {
    let elementInBasket = findElement(basketElements, name);
    if (elementInBasket.amount > 1) { // decrease amount only if amount is higher than 1
        elementInBasket.amount--;
    } else { // remove element from basket, when only 1 element remaining
        let indexToRemove = findIndex(basketElements, name);
        basketElements.splice(indexToRemove, 1);
    }
    renderBasket();
}

function findElement(array, name) {
    return array.find((item) => item.name === name)
}

function findIndex(array, name) {
    return array.findIndex(element => element.name === name)
}

function pay() {
    alert('Vielen Dank für Ihre Bestellung. Sie ist auf dem Weg zu Ihnen.');
}