import faker from "faker";

const mount = (el) => {
    let cart = `<div> You Have ${faker.random.number()} items in your cart</div>`;
    el.innerHTML = cart;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFNITELY has an element with an id of 'dev-products
// We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-cart");
    if (el) {
        mount(el);
    }
}

// Context/Situation #2
// We are running this file in develpment or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// WE DO NOT WANT try to immediately render the app
export { mount };
