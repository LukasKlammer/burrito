let dishes = [
    {
        name: 'Pizza Burrito',
        description: 'mit Mozzarella Bufala',
        price: 8.50
    },
    {
        name: 'Pizza Mozzarella',
        description: 'mit Mozzarella aus original Südtiroler Heumilch',
        price: 7.20
    },
    {
        name: 'Pizza Fitness',
        description: 'mit frischem Gemüse aus biologischem Anbau',
        price: 9.10
    },
    {
        name: 'Pizza Salute',
        description: 'mit leckerem Brokkoli und Stracchino',
        price: 9.30
    },
    {
        name: 'Pizza Gustosa',
        description: 'mit Oliven aus Süditalien',
        price: 8.70
    },
];

let basketElements = [
    {
        name: 'Pizza Fitness',
        description: 'mit frischem Gemüse aus biologischem Anbau',
        price: 9.10,
        amount: 3
    },
    {
        name: 'Pizza Salute',
        description: 'mit leckerem Brokkoli und Stracchino',
        price: 9.30,
        amount: 5
    }
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
}

/**
 * 
 * @param {string} name expects the name of the dish. Name must be unique
 */
function addToBasket(name) {
    if (basketElements.find((item) => item.name === name)) {
        console.log('Element bereits vorhanden');
    } else {
        console.log('Element muss noch richtig hinzugefügt werden... Problem amount');
        // basketElements.push(findDish(name));
        // console.log(basketElements);
    }
    renderBasket();
}

function increaseQuantity(name) {
    console.log('Warenkorb erhöhen vom Element ', name);
}

function decreaseQuantity(name) {
    console.log('Warenkorb verringern vom Element ', name);
}

function findDish(name) {
    const dish = dishes.find((dish) => dish.name === name);
    return dish;
}