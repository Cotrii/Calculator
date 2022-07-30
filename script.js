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
    else if (optStr === '/') total = divide(total, nextNum);
}

const btns = document.querySelectorAll(".blk");

btns.forEach((btn) => {
    btn.addEventListener("click", changeCurrent); //parenthesis needs to be removed () for click to work
});

// let optCnt = 0;

function checkOperator(str){
    if (str === '+' || str === '-' || str === '*' || str === '/')
            return true;

    return false;
}

function changeCurrent(){
    let currNum = document.querySelector(".currNum");
    let prevNum = document.querySelector(".prevNum");
    let opt = document.querySelector(".opt");

    
    if (currNum.textContent === '0' && this.textContent !== 'A/C'){
            currNum.textContent = this.textContent;
    }   else if (this.textContent === 'A/C'){    
            console.log("hello");
            currNum.textContent = '0'; //clears currNum
            prevNum.textContent = '';
            opt.textContent = '';
    }   else if ( checkOperator(this.textContent) ){    
            // optCnt++;
            // console.log(optCnt);
            
            if ( !checkOperator(currNum.textContent) ){
                prevNum.textContent = currNum.textContent;
                opt.textContent = this.textContent;
            } 

            currNum.textContent = '0';

    }   else if (this.textContent == '='){
        console.log("hello");


    }   else {
        
        if ( !checkOperator(currNum.textContent))
            currNum.textContent += this.textContent;

    }

    console.log("button pressed: " + this.textContent);
}