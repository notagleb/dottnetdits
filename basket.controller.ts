import { CurrencyProvider } from "./currency.provider";
import { IBasketService } from "./basket.service";

export class BasketController {
    constructor(
        private readonly basketService: IBasketService,
        private readonly currencyProvider: CurrencyProvider,
    ) {}

    public index(): string {
        const currencyCode = this.currencyProfileService.getCurrencyCode();
        const currency = this.currencyProvider.getCurrency(currencyCode);
        return '';
    }
}