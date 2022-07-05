class Basket {
    products = []; // when a new instance of Basket is generetad, there are still no products in Basket

    discount = {
        type: '', // type can be absolute or relative
        value: 0, // value can be a discount. Range can be 0-100 when type = "relative" or 0-infinite when type = "absolute"
        message: '', // message for the user, if he gets a discount
    }

    constructor(discount) {
        this.discount = discount ? discount : undefined;
    }

    renderBasket() {
        let basketContainer = document.getElementById('basket-container');
        basketContainer.innerHTML = '';
        if (basket.products.length == 0) {
            basketContainer.innerHTML = templateBasketEmpty()
        } else {
            this.renderBasketContent(basketContainer);
            this.renderBasketCosts(basketContainer);
        }
    }
    
    renderBasketContent(basketContainer) {
        for (let i = 0; i < basket.products.length; i++) {
            const basketElement = basket.products[i];
            basketContainer.innerHTML += templateBasket(basketElement);
        }
    }
    
    renderBasketCosts(basketContainer) {
        let basketSubTotal = this.calculateBasketSubTotal();
        const deliveryCosts = 'kostenlos';
        let basketGrandTotal = basketSubTotal + 0; // 0 € delivery costs
        if (basket.discount.value > 0) { // if user entered the right discount key
            const percentageToPay = (100 - basket.discount.value);
            basketGrandTotal = basketGrandTotal * ((percentageToPay) / 100);
            console.log(basketGrandTotal);
        }
        basketContainer.innerHTML += templateBasketPrices(basketSubTotal, deliveryCosts, basketGrandTotal, this.discount.message);
        document.getElementById('open-basket-button').innerHTML = `Warenkorb (${basketGrandTotal.toFixed(2).replace(".", ",")} €)`;
    }
    
    calculateBasketSubTotal() {
        let basketSubTotal = 0;
        for (let i = 0; i < this.products.length; i++) {
            const basketProduct = this.products[i];
            const itemSum = basketProduct['amount'] * basketProduct['price'];
            basketSubTotal = basketSubTotal + itemSum; 
        }
        return basketSubTotal;
    }

    increaseQuantity(name) {
        let productInBasket = findElement(basket.products, name);
        productInBasket.amount++;
        this.renderBasket();
    }
    
    /**
     * function decreases the amount of a product in basket or removes it, if it's the last remaining element
     * @param {string} name expects the name of the product. Name must be unique
     */
    decreaseQuantity(name) {
        let productInBasket = findElement(basket.products, name);
        if (productInBasket.amount > 1) { // decrease amount only if amount is higher than 1
            productInBasket.amount--;
        } else { // remove element from basket, when only 1 element remaining
            let indexToRemove = findIndex(basket.products, name);
            basket.products.splice(indexToRemove, 1);
        }
        this.renderBasket();
    }
}