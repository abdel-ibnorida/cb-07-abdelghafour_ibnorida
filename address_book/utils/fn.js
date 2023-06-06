
export const cE = (el) => document.createElement(el);

export const qS = (el) => document.querySelector(el);
const divFavourite = qS(".div_favourite");
const starFavClass = "fa-solid fa-star fa-2xl";
const staNotFavClass = "fa-regular fa-star fa-2xl";
export const RenderContacts = (data, divMain) => {
    divMain.textContent = "";
    data.forEach(element => {
        const singleContactDiv = cE('div');
        const textContainer = cE('div');
        const pName = cE('span');
        const pUserEmail = cE('span');
        const favouriteStar = cE('i');

        if (element.favourite === false) {
            favouriteStar.className = staNotFavClass;
        } else {
            favouriteStar.className = starFavClass;
        }

        singleContactDiv.className = "single_contact_container"
        pName.textContent = element.name;
        pUserEmail.textContent = "User: " + element.username + " " + "Email: " + element.email;
        singleContactDiv.setAttribute("id", element.id);
        textContainer.append(pName, pUserEmail);
        singleContactDiv.append(textContainer, favouriteStar);
        divMain.append(singleContactDiv);

        favouriteStar.addEventListener('click', (e) => {
            if (favouriteStar.className === staNotFavClass) {
                favouriteStar.className = starFavClass;
                data.filter(element => element.id == singleContactDiv.id).forEach(element => element.favourite = !element.favourite);
                divFavourite.textContent = "";
                RenderFavouriteContacts(data, divFavourite);
            } else {
                favouriteStar.className =staNotFavClass;
                data.filter(element => element.id == singleContactDiv.id).forEach(element => element.favourite = !element.favourite);
                divFavourite.textContent = "";
                RenderFavouriteContacts(data, divFavourite);
            }
        })
    });
}

export const RenderFilterContacts = (data, dataFilter, divMain) => {
    divMain.textContent = "";
    dataFilter.forEach(element => {
        const singleContactDiv = cE('div');
        const textContainer = cE('div');
        const pName = cE('span');
        const pUserEmail = cE('span');
        const favouriteStar = cE('i');
        if (element.favourite === false) {
            favouriteStar.className = staNotFavClass;
        } else {
            favouriteStar.className = starFavClass;
        }

        singleContactDiv.className = "single_contact_container"
        pName.textContent = element.name;
        pUserEmail.textContent = "User: " + element.username + " " + "Email: " + element.email;
        singleContactDiv.setAttribute("id", element.id);
        textContainer.append(pName, pUserEmail);
        singleContactDiv.append(textContainer, favouriteStar);
        divMain.append(singleContactDiv);

        favouriteStar.addEventListener('click', (e) => {
            if (favouriteStar.className === staNotFavClass) {
                favouriteStar.className = starFavClass;
                data.filter(element => element.id == singleContactDiv.id).forEach(element => element.favourite = !element.favourite);
                divFavourite.textContent = "";
                RenderFavouriteContacts(data, divFavourite);
            } else {
                favouriteStar.className = starFavClass;
                data.filter(element => element.id == singleContactDiv.id).forEach(element => element.favourite = !element.favourite);
                divFavourite.textContent = "";
                RenderFavouriteContacts(data, divFavourite);
            }
        })
    });
}

export const RenderFavouriteContacts = (data, divContainer) => {
    if (data.filter(element => element.favourite === true).length > 0) {
        data.filter(element => element.favourite === true).forEach(element => {
            const singleContactDiv = cE('div');
            const textContainer = cE('div');
            const pName = cE('span');
            const pUserEmail = cE('span');
            singleContactDiv.className = "single_contact_container"
            pName.textContent = element.name;
            pUserEmail.textContent = "User: " + element.username + " " + "Email: " + element.email;
            textContainer.append(pName, pUserEmail);
            singleContactDiv.append(textContainer);
            divContainer.append(singleContactDiv)
        });
    }else{
        divContainer.textContent = "Non sono presenti contatti tra i preferiti";
    }
}

export function fileterNameEmailUser(array, searchInput) {
    return array.filter(element => element.name.toLowerCase().includes(searchInput) || element.username.toLowerCase().includes(searchInput) || element.email.toLowerCase().includes(searchInput));
}