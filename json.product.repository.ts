import { ProductRepository } from "./product.repository";
import { DomainProduct } from "./product.service";

export class JSONProductRepository implements ProductRepository {
    private readonly context: CommerceObjectContext;
    constructor (productList: DBProduct[]) {
        this.context = new CommerceObjectContext(productList);
    }
    public getFeaturedProducts(): DomainProduct[] {
        const products = this.context.products;
        
        return products
            .filter((p: DBProduct) => p.isFeatured)
            .map(p => {
                const product = new DomainProduct();
                product.name = p.name;
                product.unitPrice = p.unitPrice;
                return product;
            });
    }

}

class CommerceObjectContext {
    constructor(public products: DBProduct[]){}
}

export interface DBProduct {
    productId: number;
    name: string;
    description: string;
    unitPrice: number;
    isFeatured: boolean;
}