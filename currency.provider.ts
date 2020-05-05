export abstract class CurrencyProvider {
    abstract getCurrency(currencyCode: string): Currency;
}

export class Currency {
    constructor() {}
    public code: string = '';
    public getExchangeRateFor(currencyCode: string): number {
        const rates = this.context
            .exchangeRates
            .filter((r: any) => r.currencyCode === currencyCode || this.code)

        return rates[currencyCode].rate/rates[this.code].rate;
    };
}