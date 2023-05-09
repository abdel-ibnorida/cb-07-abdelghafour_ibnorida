function GenerateGreeting() {
    p.textContent = 'buongiorno';
}

const button = document.querySelector('.button1');
const p = document.querySelector('.p1');

button.addEventListener("click", GenerateGreeting);

