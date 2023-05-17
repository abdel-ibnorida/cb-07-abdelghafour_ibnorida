const cE = (el) => document.createElement(el);
const qS = (el) => document.querySelector(el);
const qSA = (els) => document.querySelectorAll(els);
const divRoot = cE("div");
const formSerch = qS(".navbar__search");
divRoot.className = "div_root";
const list = [];
const listCategories = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", ]
const divSeparate = qS(".div_separate")
const categoriesMenu = cE('select');
categoriesMenu.className = "categories_select";
const categoriesSelect = qS(".categories_select");

const createProduct = (data) => {
  const card = cE("div");
  const imageContainer = cE("div");
  const imageEl = cE("img");
  const textContainer = cE("div");
  const cardId = cE("p")
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const rating = cE("p");
  const price = cE("p");
  const buttonCard = cE("button");

  card.className = "card";
  imageContainer.className = "card_image"
  textContainer.className = "card_text_container"
  cardId.className = "card_id"
  descriptionEl.className = "card_text_container_description"
  card.setAttribute("id", data.id)

  imageEl.src = data.thumbnail;
  imageEl.alt = data.title;
  cardId.textContent = data.id;
  titleEl.textContent = data.title;
  descriptionEl.textContent = data.description;
  rating.textContent = data.rating;
  price.textContent = data.price;
  buttonCard.textContent = "Add to cart";

  imageContainer.append(imageEl);
  textContainer.append(titleEl, descriptionEl, rating, price, cardId, buttonCard);
  card.append(imageContainer, textContainer);

  return card;
}
const createModal = (productDataInput, divRootInput) => {
  const divModal = cE('div');
  const divModalOverlay = cE('div');
  const modalImage = cE('img');
  const modalTextContainer = cE('div');
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const rating = cE("p");
  const price = cE("p");
  const buttonCard = cE("button");

  divModalOverlay.className = "card_modal_overlay"
  modalImage.className = "modal_image"
  divModal.className = "card_modal";
  modalTextContainer.className = "modal_text_container";
  
  modalImage.src = productDataInput.thumbnail;
  modalImage.alt = productDataInput.title;
  titleEl.textContent = productDataInput.title;
  descriptionEl.textContent = productDataInput.description;
  rating.textContent = productDataInput.rating;
  price.textContent = productDataInput.price;
  buttonCard.textContent = "Compra ora";

  modalTextContainer.append(titleEl, descriptionEl, rating, price, buttonCard);
  divModal.append(modalImage, modalTextContainer)
  divRoot.appendChild(divModal);
  divRoot.appendChild(divModalOverlay);

  divModalOverlay.addEventListener('click', () => {
    divRootInput.removeChild(divModal);
    divRootInput.removeChild(divModalOverlay);
  })
  return divModal;
}



listCategories.forEach((element) => {
  const option = cE('option');
  option.textContent = element ;
  option.value = element;
  categoriesMenu.appendChild(option);
})
divSeparate.appendChild(categoriesMenu);

categoriesMenu.addEventListener("change", (event) => {
  divRoot.textContent = "";
  list.filter((element) =>
  element.category === event.target.value).
  forEach((elementFind) => divRoot.append(createProduct(elementFind)))
})

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
      element.addEventListener("click", (event) => {
        const productData = list[element.id - 1];
        createModal(productData, divRoot);
      })
    })

  })
document.body.appendChild(divRoot);




formSerch.addEventListener('input', (e) => {
  divRoot.textContent = "";
  list.filter((element) => 
  element.title.toLowerCase().includes(e.target.value.toLowerCase()))
  .forEach((elementFind) => divRoot.append(createProduct(elementFind)))
})
