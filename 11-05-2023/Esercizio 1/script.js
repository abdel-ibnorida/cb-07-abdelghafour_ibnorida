const animals = [
    {
        id: 0,
        name: 'Lion',
        carnivorous: true
    },
    {
        id: 1,
        name: 'Monkey',
        carnivorous: false
    },
    {
        id: 2,
        name: 'Tiger',
        carnivorous: true
    },
    {
        id: 3,
        name: 'Elephant',
        carnivorous: false
    },
    {
        id: 4,
        name: 'wolf',
        carnivorous: true
    },
    {
        id: 4,
        name: 'cat',
        carnivorous: false
    },
    {
        id: 5,
        name: 'dog',
        carnivorous: false
    }
]

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const qSA = (elements) => document.querySelectorAll(elements);

const listEl = cE('ul');

animals.forEach(element => {
    const listSingleItem = cE('li');
    listSingleItem.textContent = element.name + (element.carnivorous===true?': carnivourus':': herbovore'); 
    listEl.appendChild(listSingleItem);
});

document.body.appendChild(listEl);