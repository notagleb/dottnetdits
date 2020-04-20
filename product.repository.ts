export abstract class ProductRepository {
    public abstract getFeaturedProducts(): Product[];
}

abstract class Product {
    name: string;
    unitPrice: number;
    abstract applyDiscountFor(): DiscountedProduct;
}

class DiscountedProduct {
    name: string;
    unitPrice: number;
}