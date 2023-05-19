import { usersList } from "./credentials.js";

const cE = (el) => document.createElement(el);
const qS = (el) => document.querySelector(el);
const qSA = (els) => document.querySelectorAll(els);

const divRoot = cE("div");
const formSerch = qS(".navbar__search");
divRoot.className = "div_root";
const list = [];
const cartItems = [];
const listCategories = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration",]
const divSeparate = qS(".div_separate")
const categoriesMenu = cE('select');
categoriesMenu.className = "categories_select";
const categoriesSelect = qS(".categories_select");
const cartButton = qS(".cart_button");
const cartButtonClose = qS(".cart_close_button");
const navbarUser = qS('.navbar__user');
const modalLogin = cE("div");

divRoot.className = "divroot_No_display";
modalLogin.className = "modal_login";
const modalLoginForm = cE('form');
modalLoginForm.className = "modal_login_form"
const modalLoginInputUser = cE('input');
modalLoginInputUser.type = "text";
modalLoginInputUser.placeholder = "username";
const modalLoginInputPasswor = cE('input');
modalLoginInputPasswor.type = "text";
modalLoginInputPasswor.placeholder = "password";
const loginSubmit = cE("input");
loginSubmit.className = "login_submit"
loginSubmit.type = "submit";
modalLoginForm.append(modalLoginInputUser, modalLoginInputPasswor, loginSubmit);
modalLogin.append(modalLoginForm);
document.body.append(modalLogin);


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
  price.textContent = data.price + " $";
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
  const buttonModal = cE("button");

  divModalOverlay.className = "card_modal_overlay"
  modalImage.className = "modal_image"
  divModal.className = "card_modal";
  modalTextContainer.className = "modal_text_container";
  divModal.setAttribute("id", productDataInput.id)

  modalImage.src = productDataInput.thumbnail;
  modalImage.alt = productDataInput.title;
  titleEl.textContent = productDataInput.title;
  descriptionEl.textContent = productDataInput.description;
  rating.textContent = productDataInput.rating;
  price.textContent = productDataInput.price + " $";
  buttonModal.textContent = "Compra ora";

  modalTextContainer.append(titleEl, descriptionEl, rating, price, buttonModal);
  divModal.append(modalImage, modalTextContainer)
  divRoot.appendChild(divModal);
  divRoot.appendChild(divModalOverlay);


  buttonModal.addEventListener('click', () => {
    cartItems.push(divModal.id);
    alert("prodotto aggiunto");
    console.log(cartItems.length);
    if (cartItems.length > 0){
      const cartElementsNumber= qS('.cart_number_items');
      cartElementsNumber.classList.add('cart_element_number_active');
      cartElementsNumber.textContent = cartItems.length;
    }

  })
  divModalOverlay.addEventListener('click', () => {
    divRootInput.removeChild(divModal);
    divRootInput.removeChild(divModalOverlay);
  })
  return divModal;
}

const createCardCart = (listProductsInput, idInput) => {
  const cartCard = cE("div");
  const cartImageContaine = cE("div");
  const cartImageEl = cE("img");
  const cartTextContainer = cE("div");
  const cartTitleEl = cE("h3");
  const cartElementQuantity = cE('h3');
  const cartElementPrice = cE('h3');


  cartImageEl.src = listProductsInput[idInput].thumbnail;
  cartImageEl.alt = listProductsInput[idInput].title;
  cartTitleEl.textContent = listProductsInput[idInput].title;
  cartElementPrice.textContent = listProductsInput[idInput].price + " $";
  cartElementQuantity.textContent = "12";

  cartCard.className = "cart_card";
  cartImageContaine.className = "cart_card_image";
  cartTextContainer.className = "cart_card_text";

  cartImageContaine.append(cartImageEl);
  cartTextContainer.append(cartTitleEl, cartElementPrice, cartElementQuantity);
  cartCard.append(cartImageContaine, cartTextContainer);

  return cartCard;
}



listCategories.forEach((element) => {
  const option = cE('option');
  option.textContent = element;
  option.value = element;
  categoriesMenu.appendChild(option);
})
divSeparate.appendChild(categoriesMenu);



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

categoriesMenu.addEventListener("change", (event) => {
  divRoot.textContent = "";
  list.filter((element) =>
    element.category === event.target.value).
    forEach((elementFind) => divRoot.append(createProduct(elementFind)))
})

cartButton.addEventListener('click', (e) => {
  const divCart = cE('div');
  const buttonCloseCart = cE('button');
  divCart.className = "div_cart";
  buttonCloseCart.className = "cart_close_button";
  buttonCloseCart.textContent = "X";
  divCart.append(buttonCloseCart);
  console.log(cartItems);

  cartItems.forEach(element => {
    divCart.append(createCardCart(list, (element - 1)));
  });
  if (cartItems.length > 0) {
    const totalPrice = cE('h3');
    totalPrice.className = "total_price";
    let totalPriceNumber = 0;

    for (let index = 0; index < cartItems.length; index++) {
      totalPriceNumber = totalPriceNumber + parseInt(list[cartItems[index] - 1].price);
    }
    totalPrice.textContent = "Total: " + totalPriceNumber;
    divCart.append(totalPrice);
  }

  divRoot.append(divCart);

  buttonCloseCart.addEventListener('click', () => {
    divCart.className = "div_cart_dispaly_none";
  })
})


formSerch.addEventListener('input', (e) => {
  divRoot.textContent = "";
  list.filter((element) =>
    element.title.toLowerCase().includes(e.target.value.toLowerCase()))
    .forEach((elementFind) => divRoot.append(createProduct(elementFind)))
})

modalLoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const loginApproved = usersList.find(
    (user) =>
      user.username === e.srcElement[0].value && user.password === e.srcElement[1].value
  );
  if (loginApproved == undefined) {
    alert("Username e/o password non corretta");
    e.srcElement[0].value = "";
    e.srcElement[1].value = "";
  }
  else {
    divRoot.className = "div_root";
    modalLogin.className = "modal_login_no_display";
  }


})
