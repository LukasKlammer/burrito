function templateDish(dish) {
    priceWithKomma = dish['price'].toFixed(2).replace(".",",");
    return /*html*/ `
    <div onclick="addToBasket('${dish['name']}')" class="dish">
        <h4>${dish['name']}</h4>
        <p>${dish['description']}</p>
        <span class="dish-price">${priceWithKomma} €</span>
        <img src="img/add.png" class="add-icon" alt="addToBasket">
    </div>
`;
}