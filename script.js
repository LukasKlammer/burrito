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

let hasdiscount = false;

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
        renderBasketCosts(basketContainer);
    }
}

function renderBasketContent(basketContainer) {
    for (let i = 0; i < basketElements.length; i++) {
        const basketElement = basketElements[i];
        basketContainer.innerHTML += templateBasket(basketElement);
    }
}

function renderBasketCosts(basketContainer) {
    let basketSubTotal = calculateBasketSubTotal();
    const deliveryCosts = 'kostenlos';
    let basketGrandTotal = basketSubTotal + 0; // 0 € delivery costs
    if (hasdiscount) { // if user entered the right discount key
        basketGrandTotal = basketGrandTotal * 0.9; // 10 % discount
    }
    basketContainer.innerHTML += templateBasketPrices(basketSubTotal, deliveryCosts, basketGrandTotal);
    document.getElementById('open-basket-button').innerHTML = `Warenkorb (${basketGrandTotal.toFixed(2).replace(".", ",")} €)`;
}

function calculateBasketSubTotal() {
    let basketSubTotal = 0;
    for (let i = 0; i < basketElements.length; i++) {
        const basketElement = basketElements[i];
        const itemSum = basketElement['amount'] * basketElement['price'];
        basketSubTotal = basketSubTotal + itemSum; 
    }
    return basketSubTotal;
}

/**
 * checks, if user is authorized to have 10 % discount
 * IMPORTANT: this is frontend code, so it's important to know that it could be modified by user
 * usually the discount-code check has to be done on backend
 */
function checkDiscount() {
    let inputField = document.getElementById('discount-code');
    if (inputField.value == 'bestmeals') {
        alert('Super! Du erhältst 10 % Rabatt!');
        hasdiscount = true;
        renderBasket();
    }
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

function openBasket() {
    document.getElementById('restaurant-container').classList.add('d-none');
    document.getElementById('basket').style.display = "block";
}

function closeBasket() {
    document.getElementById('restaurant-container').classList.remove('d-none');
    document.getElementById('basket').style.display = "none";
}