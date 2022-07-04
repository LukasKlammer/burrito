/**
 * 
 * @param {object} dish this object excpects a dish object with all informations about single dish
 * @returns html template with variable content
 */
function templateDish(dish) {
    const priceWithKomma = dish['price'].toFixed(2).replace(".", ",");
    return /*html*/ `
    <div onclick="addToBasket('${dish['name']}')" class="dish">
        <h4>${dish['name']}</h4>
        <p>${dish['description']}</p>
        <span class="dish-price">${priceWithKomma} €</span>
        <img src="img/add.png" class="add-icon" alt="addToBasket">
    </div>
    `;
}

function templateBasketEmpty() {
    return /*html*/ `
        <img class="basket-image" src="img/shopping-basket.png" alt="">
        <h4>Fülle den Warenkorb</h4>
        <p>Füge einige Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
    `;
}

function templateBasket(basketElement) {
    const sum = basketElement['price'] * basketElement['amount'];
    const sumWithKomma = sum.toFixed(2).replace(".", ",");
    return /*html*/ `
        <div class="basket-element">
            <div class="amount-name-price">
                <span>${basketElement['amount']}</span>
                <span>${basketElement['name']}</span>
                <span>${sumWithKomma} €</span>
            </div>
            <div class="increase-decrease">
                <img onclick="increaseQuantity('${basketElement['name']}')" class="increase-decrease-icon" src="img/add.png" alt="add-icon">
                <img onclick="decreaseQuantity('${basketElement['name']}')" class="increase-decrease-icon" src="img/remove.png" alt="remove-icon">
            </div>
        </div>
    `;
}

function templateBasketPrices() {
    return /*html*/ `
    <div class="basket-prices">
        <div class="basket-prices-row">
            <span>Zwischensumme</span>
            <span>12,33 €</span>
        </div>
        <div class="basket-prices-row">
            <span>Lieferkosten</span>
            <span>kostenlos</span>
        </div>
        <div class="basket-prices-row">
            <input class="form-control" type="text" placeholder="Gib deinen Rabattcode ein.">
        </div>
        <div class="basket-prices-row">
            <span><b>Gesamt</b></span>
            <span><b>12,33 €</b></span>
        </div>
        <button onclick="pay()" class="btn btn-primary">
            Bezahlen ()
        </button>
    </div>
`;
}