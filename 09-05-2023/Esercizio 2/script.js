function ShowInput () {
    p.textContent = input.value;
}

const input = document.querySelector('.input_container');
const button = document.querySelector('.button1');
const p = document.querySelector('.p1');

button.addEventListener('click', ShowInput)