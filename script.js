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
    
    if (optStr === '+')      total = add(total, nextNum);
    else if (optStr === '-') total = subtract(total, nextNum);
    else if (optStr === '*') total = multiply(total, nextNum);
    else if (optStr === '/') {
        // if (nextNum == 0) return null;
        // else 
        total = divide(total, nextNum);
    };
}


console.log(document.querySelector('[data-num]').textContent);

const numButtons = document.querySelectorAll('[data-num]'); //number buttons
const currNum = document.querySelector(".currNum"); //current Num

const optButtons = document.querySelectorAll(".opt");
let currentOpt;
let prevOpt;

numButtons.forEach((btn) => {
    btn.addEventListener("click", changeCurrentNum);
})

optButtons.forEach((btn) => {
    // btn.addEventListener("click", changeCurrentNum);
})

function changeCurrentNum(){

    if (currNum.textContent == '0'){
        currNum.textContent = this.textContent;
    } else {
        currNum.textContent += this.textContent;
    }
}





