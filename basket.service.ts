export class BasketService implements IBasketService {
    constructor (
        private readonly repository: BasketRepository,
        private readonly discountPolicy: BasketDiscountPolicy,
    ) {}
    public addToBasket() {}
    public empty() {}
    public getBasketFor(user: IUser) {}
}

export interface IBasketService {
    [key: string]: any;
}

class Basket {
    private currencyCode: string = '';
    convertTo(currency: Currency): Money {
        const exchangeRate = currency.getExchangeRateFor(this.currencyCode);
        return new Money(this.amount*exchangeRate, currency.code);
    }
}

class Money {
    constructor(amt, code){}
}