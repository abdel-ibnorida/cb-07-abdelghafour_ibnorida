import { GET, POST } from "./utils/http.js";
import { cE, qS, qSA, CreateTodoUserInterface } from "./utils/fn.js";
import { usersList } from "./utils/credentials.js";

const urlBase = 'https://dummyjson.com/todos';
const endpointByUser = '/user/';
const loginForm = qS('.form_login');
const divForm = qS('.div_login')
const divRoot = qS('.div_root')
const buttonAddTodo = qS('.button_add_todo');


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
        divForm.className = "div_login_no_display";
        GET(urlBase + endpointByUser + loginApproved.id).
        then((data) => CreateTodoUserInterface(data, loginApproved, divRoot));
    }
})