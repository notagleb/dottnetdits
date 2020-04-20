import { ProductRepository } from "./product.repository";

export class ProductService {

    constructor (
        private readonly repository: ProductRepository
    ) {}
    
    public getFeaturedProducts(user: IPrincipal): Product[] {
        return this
            .repository
            .getFeaturedProducts()
            .filter((p: Product) => {
                p.applyDiscountFor(user);
            });
    }
}

export interface Product {
    productId: number;
    name: string;
    description: string;
    unitPrice: number;
    isFeatured: boolean;
    applyDiscountFor(user: IPrincipal): boolean;  
}