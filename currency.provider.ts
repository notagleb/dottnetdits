import { TimeProvider } from "./time.provider";

export abstract class CurrencyProvider {
    abstract getCurrency(currencyCode: string): Currency;
}
export abstract class Currency {
    public abstract get code(): string;
    // public getExchangeRateFor(currencyCode: string): number {
    //     const rates = this.context
    //         .exchangeRates
    //         .filter((r: any) => r.currencyCode === currencyCode || this.code)

    //     return rates[currencyCode].rate/rates[this.code].rate;
    // };
    public abstract getExchangeRateFor(currencyCode: string): number;
}

export class CachingCurrency implements Currency {
    private readonly cache: Object;
    public getExchangeRateFor(currencyCode: string): number {
        const cacheEntry:{ [key: string]: any} = {};
        if (
            this.cache.tryGetValue(currencyCode, cacheEntry) &&
            !cacheEntry.isExpired
        ) {
            return cacheEntry.exchangeRate;
        }
        const exchangeRate = this.innerCurrency.getExchangeRateFor(currencyCode);
        const expiration = TimeProvider.Current.UtcNow + this.cacheTimeout;
        this.cache[currencyCode] = new CurrencyCacheEntry(exchangeRate, expiration);

        return exchangeRate;
    }
}