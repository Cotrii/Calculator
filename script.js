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

    total = Number(total);
    nextNum = Number(nextNum);
    
    if (optStr === '+')      total = add(total, nextNum);
    else if (optStr === '-') total = subtract(total, nextNum);
    else if (optStr === '*') total = multiply(total, nextNum);
    else if (optStr === '/') {
        // if (nextNum == 0) return null;
        // else 
        total = divide(total, nextNum);
    };

    return total.toString();
}


const numButtons = document.querySelectorAll('[data-num]'); //number buttons
const currNum = document.querySelector(".currNum"); //current Num

const prevNum = document.querySelector(".prevNum");


const optButtons = document.querySelectorAll(".opt");

const equalsBtn = document.querySelector(".eq");
// let currentOpt;
let currOpt = document.querySelector(".currOpt");

numButtons.forEach((btn) => {
    btn.addEventListener("click", changeCurrentNum);
})

optButtons.forEach((btn) => {
    btn.addEventListener("click", setOpt);
})

equalsBtn.addEventListener("click", evaluate);

function changeCurrentNum(){

    if (currNum.textContent == '0'){
        currNum.textContent = this.textContent;
    } else {
        currNum.textContent += this.textContent;
    }
}

let num = 0;

function setOpt(){

    if (currOpt.textContent === ''){
        currOpt.textContent = this.textContent;

        if (prevNum.textContent === '' ){
            prevNum.textContent = currNum.textContent;
            currNum.textContent = '0';
        } 
    } 
    else {
            num = operate(prevNum.textContent, currNum.textContent, currOpt.textContent);

            prevNum.textContent = num;
            currOpt.textContent = this.textContent;
            //this is setOp, so assume that there is a next operator in line

            currNum.textContent = '0';
    }
}

function evaluate(){
    num = operate(prevNum.textContent, currNum.textContent, currOpt.textContent);

    currNum.textContent = num;
    prevNum.textContent = null;
    currOpt.textContent = null;
}





