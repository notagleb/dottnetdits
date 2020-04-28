import { DomainProduct } from "./product.service";

export abstract class ProductRepository {
    public abstract getFeaturedProducts(): DomainProduct[];
}