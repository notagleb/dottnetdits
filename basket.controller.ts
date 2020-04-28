import { CurrencyProvider } from "./currency.provider";

export class BasketController {
    constructor(
        private readonly basketService: IBasketService,
        private readonly currencyProvider: CurrencyProvider
    ) {}
}