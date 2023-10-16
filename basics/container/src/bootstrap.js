import { mount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartIndex";

console.log("Container!");

mount(document.querySelector("#dev-products-container"));
cartMount(document.querySelector("#dev-cart-container"));
