//1

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}


function operate(total, nextNum, optStr){
    
    if (optStr === '+')      total = add(total, b);
    else if (optStr === '-') total = subtract(total, b);
    else if (optStr === '*') total = multiply(total, b);
    else if (optStr === '/') total = divide(total, b);
}