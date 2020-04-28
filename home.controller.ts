import { ProductService, IPrincipal, DomainProduct } from "./product.service";
import { ProductRepository } from "./product.repository";

export class HomeCtrl {
    private user: IPrincipal = {};
    
    constructor(private repository: ProductRepository) {}

    public index(): string {
        const productService = new ProductService(this.repository);
        const vm = new FeaturedProductsViewModel();
        const products = productService.getFeaturedProducts(this.user);

        products.forEach((p: DomainProduct) => {
            const productVM = new ProductViewModel(p);
            vm.products.push(productVM);
        });

        return View(vm);
    }
}

const View = (vm: FeaturedProductsViewModel) => {
    const products = vm.products.map((productModel: ProductViewModel) => productModel.asDiv());
    return products.join('');
}

class FeaturedProductsViewModel {
    constructor() {}
    public products: ProductViewModel[] = [];
}

class ProductViewModel {
    private product: DomainProduct;
    constructor(product: DomainProduct) {
        this.product = product;
    }
    public asDiv() {
        const p = this.product;
        return `
     <div style="border-style: solid; margin: 2px; padding: 5px;">
         <p>Name: ${p.name}</p>
         <p>Price: $ ${p.unitPrice}</p>
     </div>`
    }
}