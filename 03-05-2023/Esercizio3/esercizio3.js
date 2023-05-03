let firstNumberInput = parseInt(prompt("Inserisci il primo numero:"));
let secondNumberInput = parseInt(prompt("Inserisci il secondo numero:"));
let operator = prompt("Inserire l'operatore da utilizzaare (+,-,/,*,%)");
let result = null;
switch (operator) {
    case "+": 
        result = firstNumberInput + secondNumberInput;
        console.log(firstNumberInput, operator, secondNumberInput, " = ", result);   
    break;

    case "-": 
        result = firstNumberInput - secondNumberInput;
        console.log(firstNumberInput, operator, secondNumberInput, " = ", result);   
    break;

    case "*": 
        result = firstNumberInput * secondNumberInput;
        console.log(firstNumberInput, operator, secondNumberInput, " = ", result);   
    break;

    case "/": 
        result = firstNumberInput / secondNumberInput;
        console.log(firstNumberInput, operator, secondNumberInput, " = ", result);   
    break;

    case "%": 
        result = firstNumberInput % secondNumberInput;
        console.log(firstNumberInput, operator, secondNumberInput, " = ", result);   
    break;

    default:
        console.log("L'operatore inserito non è valido");
    break;
}