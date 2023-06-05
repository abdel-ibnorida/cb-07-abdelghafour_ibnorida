import { cE, fileterNameEmailUser, qS, RenderContacts } from "./utils/fn.js";
import { GET } from "./utils/http.js";

const divMain = qS('.div_main');
const btnSearch = qS('.search_button');
const formSearch = qS('.form_search');
const searchbar = qS('.search');

let listUsers = [];
GET("/users").then((data) => {
    data.forEach(element => { listUsers.push(element) });
    RenderContacts(listUsers, divMain);
    formSearch.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.srcElement[0].value.length < 3)
        {
            alert("Inserire almeno 3 caratteri per una ricerca")
        }
    })
    searchbar.addEventListener('input', (e) => {
        if(e.target.value.length > 2)
        {   
            let listFiletr = fileterNameEmailUser(listUsers, e.target.value.toLowerCase());
            divMain.textContent = "";
            if (listFiletr.length === 0){
                divMain.textContent = "Non sono presenti contatti"
            }else{
                RenderContacts(listFiletr, divMain);
            }
        }
        else {
            divMain.textContent = "";
            RenderContacts(listUsers, divMain);
        }
    })
})
