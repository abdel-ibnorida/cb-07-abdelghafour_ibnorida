export const cE = (el) => document.createElement(el);

export const qS = (el) => document.querySelector(el);

export const qSA = (els) => document.querySelectorAll(els);

export const urlBase = "https://dummyjson.com/";

export const urlCartsEP = "carts/";


export const createUserCart = (data) => {
    const divRoot = qS(".div_login");
    const divCartContainer = cE('div');
    const divProductsContainer = cE('div');
    const divInfoCartContainer = cE('div');
    const totalCartProducts = cE('p');
    const totalCartQuantity = cE('p');
    const totalCartPrice = cE('p');

    divCartContainer.className = "div_cart_container";
    divProductsContainer.className = "div_cart_products_container";
    divInfoCartContainer.className = "div_cart_info_container";

    data.products.forEach(element => {
        const cardProduct = cE('div');
        const cardTitle = cE('p');
        const cardPrice = cE('p');
        const cardQuantity = cE('p');
        const cardTotalPrice = cE('p');

        cardProduct.className = "card_product";

        cardTitle.textContent = "Title: " + element.title;
        cardPrice.textContent = "Price: " + element.price;
        cardQuantity.textContent = "Quantity: " + element.quantity;
        cardTotalPrice.textContent = "Total: " + element.total;

        cardProduct.append(cardTitle, cardPrice, cardQuantity, cardTotalPrice)
        divProductsContainer.append(cardProduct);
        });
    totalCartProducts.textContent = "Number Products: " + data.totalProducts;
    totalCartQuantity.textContent = "Total quantity: " + data.totalQuantity;
    totalCartPrice.textContent = "Total Price: " + data.total;

    divInfoCartContainer.append(totalCartProducts, totalCartQuantity, totalCartPrice);
    divCartContainer.append(divProductsContainer, divInfoCartContainer);
    divRoot.append(divCartContainer);
}

export const GET = async (endpoint = "") => {
    const res = await fetch(urlBase + urlCartsEP + endpoint);
    const data = await res.json();
    return data;
};

export const POST = async (endpoint, body) => {
    const res = await fetch(urlBase + endpoint , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  };