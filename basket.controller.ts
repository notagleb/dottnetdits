import { CurrencyProvider } from "./currency.provider";
import { IBasketService } from "./basket.service";
import { CurrencyProfileService } from "./currency.profile.service";

export class BasketController {
    public get currencyProfileService(): CurrencyProfileService {
        if(this.currencyProfileService === null) {
            this.currencyProfileService = new DefaultCurrencyProfileService();
        }
        return this.currencyProfileService;
    };
    public set currencyProfileService(value: CurrencyProfileService) {
        if(!value) {
            throw('Argument null exception');
        }
        if(this.currencyProfileService !== null) {
            throw('Invalid operation exception');
        }
        this.currencyProfileService = value;
    };

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