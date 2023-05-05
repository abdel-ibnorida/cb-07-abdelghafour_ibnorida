let firstNumberInput = parseInt(prompt("Inserisci il primo numero:"));
let secondNumberInput = parseInt(prompt("Inserisci il secondo numero:"));
let operator = prompt("Inserire l'operatore da utilizzaare (+,-,/,*,%)");

function calcolatrice(num1, num2, symbol) {
  let result = null;
  switch (symbol) {
    case "+":
      result = sum(num1,num2);
      break;

    case "-":
      result = substraction(num1,num2);
      break;

    case "*":
      result = multiplication(num1,num2);
      break;

    case "/":
      result = division(num1,num2)
      break;

    case "%":
      result = module(num1,num2);
      break;
  }
  return result;
}

function sum (num1, num2) {
    let result = num1 + num2;
}

function substraction (num1, num2) {
  let result = num1 - num2;
}

function multiplication (num1, num2) {
  let result = num1 * num2;
}

function division (num1, num2) {
  let result = num1 / num2;
}

function module (num1, num2) {
  let result = num1 % num2;
}



let container = calcolatrice(firstNumberInput, secondNumberInput, operator);
if (container == null) {
  console.log("l'operatore Inserito non è valido")
} else {
  console.log(firstNumberInput, operator, secondNumberInput, " = ", container)
}
