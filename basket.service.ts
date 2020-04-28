export class BasketService implements IBasketService {
    constructor (
        private readonly repository: BasketRepository,
        private readonly discountPolicy: BasketDiscountPolicy,
    ) {}
    public addToBasket() {}
    public empty() {}
    public getBasketFor() {}
}

export interface IBasketService {
    [key: string]: any;
}