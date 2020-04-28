export abstract class CurrencyProvider {
    abstract getCurrency(currencyCode: string): Currency;
}

export abstract class Currency {
    abstract code: string;
    abstract getExchangeRateFor(currencyCode: string): number;
}