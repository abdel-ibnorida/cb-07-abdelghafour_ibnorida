
export const cE = (el) => document.createElement(el);

export const qS = (el) => document.querySelector(el);

export const RenderContacts = (data, divContainer) => {
    data.forEach(element => {
        const singleContactDiv = cE('div');
        const pName = cE('p');
        pName.textContent = element.name;
        singleContactDiv.append(pName);
        divContainer.append(singleContactDiv);
    });
}

export function fileterNameEmailUser(array, searchInput) {
    return array.filter(element => element.name.toLowerCase().includes(searchInput) || element.username.toLowerCase().includes(searchInput) || element.email.toLowerCase().includes(searchInput) );
}