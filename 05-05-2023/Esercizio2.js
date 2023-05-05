let firstNumberInput = parseInt(prompt("Inserisci il primo numero:"));
let secondNumberInput = parseInt(prompt("Inserisci il secondo numero:"));
let operator = prompt("Inserire l'operatore da utilizzaare (+,-,/,*,%)");

function calcolatrice(num1, num2, symbol) {
  let result = null;
  switch (symbol) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2
      break;

    case "/":
      result = num1 / num2;
      break;

    case "%":
      result = num1 % num2;
      break;
  }
  return result;
}

let container = calcolatrice(firstNumberInput, secondNumberInput, operator);
if (container == null) {
  console.log("l'operatore Inserito non è valido")
} else {
  console.log(firstNumberInput, operator, secondNumberInput, " = ", container)
}
