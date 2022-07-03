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
        name: 'Pizza Gustonsa',
        description: 'mit Oliven aus Süditalien',
        price: 8.70
    },
];

function init() {
    renderdishes();
}

function addToBasket(dish) {
    console.log('add to basket dish number ', dish);
}

function renderdishes() {
    let dishesContainer = document.getElementById('dishes');
    dishesContainer.innerHTML = '';
    for (let i = 0; i < dishes.length; i++) {
        let dish = dishes[i];
        console.log(dish);
        dishesContainer.innerHTML += templateDish(dish);
    }
}