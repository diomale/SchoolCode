let input = prompt("Enter a number:");

let message = (input > 90 && input < 110) ? "Bingo!" : "Miss!";
alert(message);

// last question

let firstNumber = Number(prompt("Enter the first number:"));
let operation = String(prompt("Enter the operation (+, -, *, /):"));
let secondNumber = Number(prompt("Enter the second number:"));


let result;

switch (operation){
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    result = secondNumber !== 0 ? firstNumber / secondNumber : "Error: Division by zero";
    break;
  default:
    result = "Invalid operation";
}

alert("The result is: " + result);

////////

let first_Number = Number(prompt("Enter first number"));
let second_Number = Number(prompt("Enter second number"));
let operand = prompt("Enter operand (+, -, * or /)");
let _result;

if (!Number.isNaN(firs_tNumber) && !Number.isNaN(second_Number)) {
  switch (operand) {
    case "+": _result = first_Number + second_Number; break;
    case "-": _result = first_Number - second_Number; break;
    case "*": _result = first_Number * second_Number; break;
    case "/": _result = first_Number / second_Number; break;
    default: _result = "Error: unknown operand";
  }
} else {
  _result = "Error: at least one of the entered values is not a number";
}
alert(_result);
///////

let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}
 
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
