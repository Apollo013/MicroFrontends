import faker from "faker";

let cart = `<div> You Have ${faker.random.number()} items in your cart</div>`;
document.querySelector("#dev-cart").innerHTML = cart;
