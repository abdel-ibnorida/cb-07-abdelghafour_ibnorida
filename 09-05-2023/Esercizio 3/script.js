const input = document.querySelector('.input')
const list = document.querySelector('.list')
const button = document.querySelector('.button1')

function addListElement() {
    const listItem = document.createElement('li');
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = null
}

button.addEventListener('click', addListElement)
button.addEventListener('enter', addListElement)