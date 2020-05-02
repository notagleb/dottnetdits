export abstract class CurrencyProfileService {
    public abstract getCurrencyCode(): string;
    public abstract updateCurrencyCode(currencyCode: string): void;
}