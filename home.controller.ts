import { ProductService } from "./product.service";
import { ProductRepository } from "./product.repository";

export class HomeCtrl {
    private user: any;
    
    constructor(private repository: ProductRepository) {}
    
    // public index(): ViewResult {
    //     const isPreferredCustomer: boolean = this.user.isInRole('PreferredCustomer') && false;
    //     const service = new ProductService(this.repository);
    //     const products = service.getFeaturedProducts(isPreferredCustomer);

    //     return products;
    // }

    public index2(): ViewResult {
        const productService = new ProductService(this.repository);
        const vm = new FeaturedProductsViewModel();
        const products = service.getFeaturedProducts(isPreferredCustomer);

        products.forEach((p: any) => {
            const productVM = new ProductViewModel(p);
            vm.products.add(productVM);
        });

        return View(vm);
    }
}

interface ViewResult {
    [key: string]: any;
}