import { HomeCtrl } from './home.controller';
import { Product } from './product.service'

const controller = new HomeCtrl();
const productList = controller.index().map((p: Product) => {
    return `
    <div style="border-style: solid; margin: 2px; padding: 5px;">
        <div>${p.description}</div>
        <p>Name: ${p.name}</p>
        <p>Price: $ ${p.unitPrice}</p>
    </div>
    `
});

document.getElementById("products").innerHTML = productList.join('');