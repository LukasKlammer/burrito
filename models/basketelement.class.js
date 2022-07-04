class BasketElement extends Dish {
    amount;

    constructor(name, description, price) {
        super(name, description, price);
        this.amount = 1;
    }
}