const cE = (el) => document.createElement(el);
const qS = (el) => document.querySelector(el);
const qSA = (els) => document.querySelectorAll(els);
const createProduct = (data) => {
    const card = cE("div");
    const imageContainer = cE("div");
    const imageEl = cE("img");
    const textContainer = cE("div");
    const titleEl = cE("h3");
    const descriptionEl = cE("p");
    const rating = cE("p");
    const price = cE("p");
    const buttonCard = cE("button");

    card.className = "card";
    imageContainer.className = "card_image"
    imageEl.src = data.thumbnail;
    imageEl.alt = data.title;
    textContainer.className = "card_text_container"
    titleEl.textContent = data.title;
    descriptionEl.textContent = data.description;
    descriptionEl.className = "card_text_container_description"
    rating.textContent = data.rating;
    price.textContent = data.price;
    buttonCard.textContent = "Add to cart";

    imageContainer.append(imageEl);
    textContainer.append(titleEl, descriptionEl, rating, price,buttonCard);
    card.append(imageContainer, textContainer);
    
    return card;
}

const divRoot = cE("div");
divRoot.className = "div_root";
const list = [];

fetch("https://dummyjson.com/products")
  .then((result) => result.json())
  .then((data) => {
    data.products.forEach(element => {
        list.push(element);
        divRoot.append(createProduct(element));
    });
  })
  .then(() => {
    const cardsEls = qSA(".card");
    cardsEls.forEach((element) => {
        element.addEventListener("click", () =>{
            console.log()
        })
    })

  })
  

document.body.appendChild(divRoot);
