import { ProductRepository } from "./product.repository";

export class ProductService {

    constructor (
        private readonly repository: ProductRepository
    ) {}
    
    public getFeaturedProducts(user: IPrincipal): DomainProduct[] {
        return this
            .repository
            .getFeaturedProducts()
            .filter((p: DomainProduct) => p.applyDiscountFor(user));
    }
}

export class DomainProduct {
    public name: string = '';
    public unitPrice: number = 0;
    constructor() {}

    public applyDiscountFor(user: IPrincipal): boolean { return true };
}

export interface IPrincipal{
    [key: string]: any;
}