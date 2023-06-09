const cE = (el) => document.createElement(el);
const qS = (el) => document.querySelector(el);
const qSA = (els) => document.querySelectorAll(els);
const divRoot = cE("div");
divRoot.className = "div_root";
const list = [];
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
  card.setAttribute("id", data.id)
  imageContainer.className = "card_image"
  imageEl.src = data.thumbnail;
  imageEl.alt = data.title;
  textContainer.className = "card_text_container"
  cardId.className = "card_id"
  cardId.textContent = data.id;
  titleEl.textContent = data.title;
  descriptionEl.textContent = data.description;
  descriptionEl.className = "card_text_container_description"
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
