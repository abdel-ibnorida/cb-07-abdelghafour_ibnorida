import { DELETE, POST } from "./http.js";

export const cE = (el) => document.createElement(el);

export const qS = (el) => document.querySelector(el);

export const qSA = (els) => document.querySelectorAll(els);

const urlBase = 'https://dummyjson.com/todos';

const endpointByUser = '/user/';

const endpointTodoAdd = '/add';

export const CreateTodoUserInterface = (data, loginData, divFather) => {
    const divUserUI = cE('div');
    const usernameContainer = cE('div');
    const userTodoContainer = cE('div');
    const userP = cE('p');
    const addTodoContainer = cE('div');
    const addInputTodoText = cE('input');
    const addTodoButton = cE('button');
    let todoText= "";

    divUserUI.className = "div_user_ui";
    usernameContainer.className = "div_username";
    userTodoContainer.className = "div_todo";
    userP.className = "user_p";
    addTodoContainer.className = "div_add_todo";
    addTodoButton.className = "button_add_todo";

    userP.textContent = "Username: " + loginData.username;
    data.todos.forEach(element => {
        const singleTodoCartContainer = cE('div');
        singleTodoCartContainer.className = "single_todo_container";
        const todoCard = cE('div');
        todoCard.setAttribute("id", element.id);
        todoCard.textContent = element.todo;
        todoCard.className = "todo_card";
        const deleteTodoButton = cE('button');
        deleteTodoButton.textContent = "Delete";
        singleTodoCartContainer.append(todoCard, deleteTodoButton);
        userTodoContainer.append(singleTodoCartContainer);
        deleteTodoButton.addEventListener('click', (e) => {
            DELETE(urlBase + "/" + todoCard.id)
        });
    });
    addTodoButton.textContent = "Add new todo";
    usernameContainer.append(userP);
    addTodoContainer.append(addInputTodoText, addTodoButton);
    divUserUI.append(usernameContainer, userTodoContainer, addTodoContainer);
    divFather.append(divUserUI);

    addInputTodoText.addEventListener('input', (e) => {
        todoText = e.target.value;
    })
    addTodoButton.addEventListener('click', () => {
        POST(urlBase + endpointTodoAdd, todoText ,loginData.id )
    })
}