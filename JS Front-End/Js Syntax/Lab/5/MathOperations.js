//'+', '-', '*', '/', '%', '**'.

let sum = 0;

function mathOperation (num1, num2, operation) {
    if (operation == '+') {
        sum = num1 + num2;        
    } else if(operation == '-') {
        sum = num1 - num2;
    } else if(operation == '*') {
        sum = num1 * num2;
    } else if(operation == '/') {
        sum = num1 / num2;
    }  else if(operation == '%') {
        sum = num1 % num2;
    } else if(operation == '**') {
        sum = num1 ** num2;
    }

    console.log(sum);
}

sum = mathOperation(5, 6, '+');