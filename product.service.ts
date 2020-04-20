import * as storage from "./products.json";

export class ProductService {
    constructor () {
    }
    
    public getFeaturedProducts(isCustomerPreferred: boolean): Product[] {
        const discount = isCustomerPreferred ? 0.95 : 1;
        return storage.products.map(p => {
            p.unitPrice *= discount;
            return p;
        });
    }
}

export interface Product {
    productId: number;
    name: string;
    description: string;
    unitPrice: number;
    isFeatured: boolean;
}