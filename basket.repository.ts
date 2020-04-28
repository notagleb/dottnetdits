export abstract class BasketRepository {
    constructor () {}
    public abstract addToBasket(): void;
    public abstract empty(): void;
    public abstract getBasketFor(): void;
}