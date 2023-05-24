import { cE, qS, qSA, urlBase, urlCartsEP, createUserCart, GET, POST } from "./utils/fn.js";
import { usersList } from "./utils/credentials.js";


const urlProductAdd = "products/add/";
const loginForm = qS('.form_login');
const userContainer = qS('.div_user_container_no_display');
const divRoot = qS(".div_login");
const buttonAddProduct = cE('button');
buttonAddProduct.className = "button_add_product"
buttonAddProduct.textContent = "Add random Product";

loginForm.addEventListener('submit', (e) => {
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
        loginForm.className = "form_login_no_display";
        userContainer.className = "div_user_container";
        userContainer.textContent = "User: " + loginApproved.username;
        const userMainContainer = cE('div');
        userMainContainer.className = "user_main_container";
        userMainContainer.textContent = "Bentoranto " + loginApproved.username + ", il tuo carello contiene i seguenti prodotti: ";
        divRoot.append(userMainContainer);

        GET(loginApproved.id).
        then((data) => createUserCart(data));
        divRoot.append(buttonAddProduct);
    }
})

buttonAddProduct.addEventListener('click', () => {
    console.log("clickato");
    POST(urlProductAdd, {title: "ciao aggiunto"});
})
