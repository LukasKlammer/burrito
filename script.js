let products = [
    new Product('Pizza Burrito', 'mit Mozzarella Bufala', 8.50),
    new Product('Pizza Mozzarella', 'mit Mozzarella aus original Südtiroler Heumilch', 7.20),
    new Product('Pizza Fitness', 'mit frischem Gemüse aus biologischem Anbau', 9.10),
    new Product('Pizza Salute', 'mit leckerem Brokkoli und Stracchino', 9.30),
    new Product('Pizza Gustosa', 'mit Oliven aus Süditalien', 8.70),
];

let basket = new Basket({type: 'relative', value: 0, message: ''});

function init() {
    reactAtWindowSizes();
    renderProducts();
    basket.renderBasket();
}

function renderProducts() {
    let dishesContainer = document.getElementById('dishes');
    dishesContainer.innerHTML = '';
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        dishesContainer.innerHTML += templateDish(product);
    }
}

/**
 * checks, if user is authorized to have 10 % discount
 * IMPORTANT: this is frontend code, so it's important to know that it could be modified by user
 * usually the discount-code check has to be done on backend
 */
function checkDiscount() {
    let inputField = document.getElementById('discount-code');
    if (inputField.value == 'bestmeals') {
        basket.discount.value = 10;
        basket.discount.type = 'relative';
        basket.discount.message = 'Rabattcode gültig! Du erhältst 10 % Rabatt auf deinen Einkauf!';
        basket.renderBasket();
    }
}

/**
 * 
 * @param {string} name expects the name of the product. Name must be unique
 */
function addToBasket(name) {
    let productInBasket = findElement(basket.products, name); // searches, if element is already in basket
    if (productInBasket) {
        productInBasket.amount++;
    } else { // product not in basket --> search product by name and add it to basket
        const productToAdd = findElement(products, name);
        basket.products.push(productToAdd);
    }
    basket.renderBasket();
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
    document.getElementById('basket').classList.remove('d-none');
}

function closeBasket() {
    document.getElementById('restaurant-container').classList.remove('d-none');
    document.getElementById('basket').classList.add('d-none');
}

window.addEventListener('resize', function(event) {
    reactAtWindowSizes();
}, true);


function reactAtWindowSizes() {
    if (window.innerWidth < 600) {
        document.getElementById('restaurant-container').classList.remove('d-none');
        document.getElementById('basket').classList.add('d-none');

    } else if (window.innerWidth >= 600) {
        document.getElementById('restaurant-container').classList.remove('d-none');
        document.getElementById('basket').classList.remove('d-none');
    }
}