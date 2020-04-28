import { HomeCtrl } from './home.controller';
import { JSONProductRepository } from './json.product.repository';
import * as products from './products.json';

const repository = new JSONProductRepository(products.items);

const controller = new HomeCtrl(repository);
const productList = controller.index();

const el = document.getElementById("products");
if (el) {
    el.innerHTML = productList;
}