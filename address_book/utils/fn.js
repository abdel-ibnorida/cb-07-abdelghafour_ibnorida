export const cE = (el) => document.createElement(el);

export const qS = (el) => document.querySelector(el);

const divFavourite = qS(".div_favourite_empty");
const divRoot = qS('.root');
const starFavClass = "fa-solid fa-star fa-2xl";
const staNotFavClass = "fa-regular fa-star fa-2xl";
const showDetailsClass = "fa-solid fa-plus fa-xl";
const closeXClass = "fa-solid fa-x fa-lg";
const editClass = "fa-solid fa-pen-to-square fa-2xl";



export const RenderContacts = (data, divMain) => {
    divMain.textContent = "";
    data.forEach(element => {
        const singleContactDiv = cE('div');
        const textContainer = cE('div');
        const symbolContainer = cE('div');
        const pName = cE('span');
        const pUserEmail = cE('span');
        const favouriteStar = cE('i');
        const showDetails = cE('i');
        const edit = cE('i');

        if (element.favourite === false) {
            favouriteStar.className = staNotFavClass;
        } else {
            favouriteStar.className = starFavClass;
        }
        singleContactDiv.className = "single_contact_container";
        symbolContainer.className = "symbol_container";
        showDetails.className = showDetailsClass;
        edit.className = editClass;
        pName.textContent = element.name;
        pUserEmail.textContent ="Email: " + element.email;
        singleContactDiv.setAttribute("id", element.id);

        textContainer.append(pName, pUserEmail);
        symbolContainer.append(showDetails, favouriteStar, edit);
        singleContactDiv.append(textContainer, symbolContainer);
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
        showDetails.addEventListener('click', (e) => {
            const modal = cE('div');
            const overlay = cE('div');
            const closeX = cE('i');
            const modalTextContainer = cE('div');
            const spanName = cE('span');
            const spanUsername = cE('span');
            const spanEmail = cE('span');
            const spanPhone = cE('span');
            const spanAddress = cE('span');
            const spanCompany = cE('span');

            spanName.textContent ="Name: " + data.filter(element => element.id == singleContactDiv.id)[0].name;
            spanUsername.textContent = "Username: " + data.filter(element => element.id == singleContactDiv.id)[0].username;
            spanEmail.textContent = "Email: " + data.filter(element => element.id == singleContactDiv.id)[0].email;
            spanPhone.textContent = "Phone: " + data.filter(element => element.id == singleContactDiv.id)[0].phone;
            spanCompany.textContent = "Company: " + data.filter(element => element.id == singleContactDiv.id)[0].company.name;
            console.log(data.filter(element => element.id == singleContactDiv.id)[0].address);
            const addressStreet = data.filter(element => element.id == singleContactDiv.id)[0].address.street;
            const addressSuite = data.filter(element => element.id == singleContactDiv.id)[0].address.suite;
            const addressCity = data.filter(element => element.id == singleContactDiv.id)[0].address.city;
            spanAddress.textContent = "Address:" + addressStreet + " " + addressSuite + ", " + addressCity ;


            closeX.className = closeXClass;
            modal.className = "modal";
            modalTextContainer.className = "modal_text_container";
            overlay.className = "overlay";

            modalTextContainer.append(spanName, spanUsername, spanEmail, spanPhone, spanCompany, spanAddress);
            modal.append(modalTextContainer, closeX);
            divRoot.append(overlay, modal);

            closeX.addEventListener('click', (e) => {
                modal.style.display = "none";
                overlay.style.display = "none";
            })
        })
    });
}

export const RenderFilterContacts = (data, dataFilter, divMain) => {
    divMain.textContent = "";
    dataFilter.forEach(element => {
        const singleContactDiv = cE('div');
        const textContainer = cE('div');
        const symbolContainer = cE('div');
        const pName = cE('span');
        const pUserEmail = cE('span');
        const favouriteStar = cE('i');
        const showDetails = cE('i');
        const edit = cE('i');

        if (element.favourite === false) {
            favouriteStar.className = staNotFavClass;
        } else {
            favouriteStar.className = starFavClass;
        }

        singleContactDiv.className = "single_contact_container";
        showDetails.className = showDetailsClass;
        edit.className = editClass;
        symbolContainer.className = "symbol_container";
        pName.textContent = element.name;
        pUserEmail.textContent ="Email: " + element.email;
        singleContactDiv.setAttribute("id", element.id);
        textContainer.append(pName, pUserEmail);
        symbolContainer.append(showDetails, favouriteStar, edit);
        singleContactDiv.append(textContainer, symbolContainer);
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
        
        showDetails.addEventListener('click', (e) => {
            const modal = cE('div');
            const overlay = cE('div');
            const closeX = cE('i');
            const modalTextContainer = cE('div');
            const spanName = cE('span');
            const spanUsername = cE('span');
            const spanEmail = cE('span');
            const spanPhone = cE('span');
            const spanAddress = cE('span');
            const spanCompany = cE('span');

            spanName.textContent ="Name: " + data.filter(element => element.id == singleContactDiv.id)[0].name;
            spanUsername.textContent = "Username: " + data.filter(element => element.id == singleContactDiv.id)[0].username;
            spanEmail.textContent = "Email: " + data.filter(element => element.id == singleContactDiv.id)[0].email;
            spanPhone.textContent = "Phone: " + data.filter(element => element.id == singleContactDiv.id)[0].phone;
            spanCompany.textContent = "Company: " + data.filter(element => element.id == singleContactDiv.id)[0].company.name;
            console.log(data.filter(element => element.id == singleContactDiv.id)[0].address);
            const addressStreet = data.filter(element => element.id == singleContactDiv.id)[0].address.street;
            const addressSuite = data.filter(element => element.id == singleContactDiv.id)[0].address.suite;
            const addressCity = data.filter(element => element.id == singleContactDiv.id)[0].address.city;
            spanAddress.textContent = "Address:" + addressStreet + " " + addressSuite + ", " + addressCity ;


            closeX.className = closeXClass;
            modal.className = "modal";
            modalTextContainer.className = "modal_text_container";
            overlay.className = "overlay";

            modalTextContainer.append(spanName, spanUsername, spanEmail, spanPhone, spanCompany, spanAddress);
            modal.append(modalTextContainer, closeX);
            divRoot.append(overlay, modal);

            closeX.addEventListener('click', (e) => {
                modal.style.display = "none";
                overlay.style.display = "none";
            })
        })
    });
}

export const RenderFavouriteContacts = (data, divContainer) => {
    if (data.filter(element => element.favourite === true).length > 0) {
        data.filter(element => element.favourite === true).forEach(element => {
            const singleContactDiv = cE('div');
            const textContainer = cE('div');
            const symbolContainer = cE('div');
            const pName = cE('span');
            const pUserEmail = cE('span');
            const showDetails = cE('i');
            const edit = cE('i');

            singleContactDiv.className = "single_contact_container";
            symbolContainer.className = "symbol_container";
            showDetails.className = showDetailsClass;
            edit.className = editClass;
            pName.textContent = element.name;
            pUserEmail.textContent = "Email: " + element.email;
            singleContactDiv.setAttribute("id", element.id);
            textContainer.append(pName, pUserEmail);
            symbolContainer.append(showDetails, edit);
            singleContactDiv.append(textContainer, symbolContainer);
            divContainer.append(singleContactDiv);

            divContainer.className = "div_favourite"
        showDetails.addEventListener('click', (e) => {
            const modal = cE('div');
            const overlay = cE('div');
            const closeX = cE('i');
            const modalTextContainer = cE('div');
            const spanName = cE('span');
            const spanUsername = cE('span');
            const spanEmail = cE('span');
            const spanPhone = cE('span');
            const spanAddress = cE('span');
            const spanCompany = cE('span');

            spanName.textContent ="Name: " + data.filter(element => element.id == singleContactDiv.id)[0].name;
            spanUsername.textContent = "Username: " + data.filter(element => element.id == singleContactDiv.id)[0].username;
            spanEmail.textContent = "Email: " + data.filter(element => element.id == singleContactDiv.id)[0].email;
            spanPhone.textContent = "Phone: " + data.filter(element => element.id == singleContactDiv.id)[0].phone;
            spanCompany.textContent = "Company: " + data.filter(element => element.id == singleContactDiv.id)[0].company.name;
            console.log(data.filter(element => element.id == singleContactDiv.id)[0].address);
            const addressStreet = data.filter(element => element.id == singleContactDiv.id)[0].address.street;
            const addressSuite = data.filter(element => element.id == singleContactDiv.id)[0].address.suite;
            const addressCity = data.filter(element => element.id == singleContactDiv.id)[0].address.city;
            spanAddress.textContent = "Address:" + addressStreet + " " + addressSuite + ", " + addressCity ;


            closeX.className = closeXClass;
            modal.className = "modal";
            modalTextContainer.className = "modal_text_container";
            overlay.className = "overlay";

            modalTextContainer.append(spanName, spanUsername, spanEmail, spanPhone, spanCompany, spanAddress);
            modal.append(modalTextContainer, closeX);
            divRoot.append(overlay, modal);

            closeX.addEventListener('click', (e) => {
                modal.style.display = "none";
                overlay.style.display = "none";
            })
        })
        });
    }else{
        divContainer.className = "div_favourite_empty";
        divContainer.textContent = "Non sono presenti contatti tra i preferiti";
    }
}

export function fileterNameEmailUser(array, searchInput) {
    return array.filter(element => element.name.toLowerCase().includes(searchInput) || element.username.toLowerCase().includes(searchInput) || element.email.toLowerCase().includes(searchInput));
}