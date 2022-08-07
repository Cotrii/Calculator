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
        if (nextNum == 0) {
            alert("don't divide by 0!");
            return null;
        }
        else 
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

const clrBtn = document.querySelector("#clr");

const changeSignBtn = document.querySelector("#changeSign");

numButtons.forEach((btn) => {
    btn.addEventListener("click", changeCurrentNum);
})

optButtons.forEach((btn) => {
    btn.addEventListener("click", setOpt);
})

equalsBtn.addEventListener("click", evaluate);
clrBtn.addEventListener("click", clearContent);
changeSignBtn.addEventListener("click", changeSign);

function changeCurrentNum(){

    if (currNum.textContent == '0'){
        currNum.textContent = this.textContent;
    } else {
        currNum.textContent += this.textContent;
    }
}

let num = 0;

function setOpt(){

    if (prevNum.textContent === '' && currNum.textContent === '0'){
        return;
    }
    else if (currOpt.textContent === ''){
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

function clearContent(){
    currNum.textContent = '0';
    prevNum.textContent = null;
    currOpt.textContent = null;
}

function changeSign(){
    if (this.textContent === '+/-' && currNum.textContent !== '0'){
        if (currNum.textContent.charAt(0) !== '-'){

            let temp = currNum.textContent;
            currNum.textContent = '-';
            currNum.textContent += temp;
        } else {
            currNum.textContent = currNum.textContent.substring(1, currNum.textContent.length);
        }
    }
}





