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

    let currNum = document.querySelector(".currNum");
    currNum.textContent = total;
}

const btns = document.querySelectorAll(".blk");

btns.forEach((btn) => {
    btn.addEventListener("click", changeCurrent); //parenthesis needs to be removed () for click to work
});

let optCnt = 0;

function checkOperator(str){
    if (str === '+' || str === '-' || str === '*' || str === '/')
            return true;

    return false;
}

function changeCurrent(){
    let currNum = document.querySelector(".currNum");
    let prevNum = document.querySelector(".prevNum");
    let opt = document.querySelector(".opt");

    
    if (currNum.textContent === '0' && this.textContent !== 'A/C' && this.textContent !== '+/-'){

            if (this.textContent !== '=')   {currNum.textContent = this.textContent;}
            if (checkOperator(this.textContent)) {currNum.textContent = '0';}
            
    }   else if (this.textContent === 'A/C'){    
            currNum.textContent = '0'; //clears currNum
            prevNum.textContent = '';
            opt.textContent = '';

            console.log("2");
    }   else if ( checkOperator(this.textContent) ){    
            optCnt++;
            // console.log("optCnt: " + optCnt);
            // console.log("prevNum: " + prevNum.textContent);
            // console.log("currNum: " + currNum.textContent);

            if (optCnt == 2){
                optCnt = 0; 
                operate(parseInt(prevNum.textContent), parseInt(currNum.textContent), opt.textContent);
            } else if (optCnt == 1 && prevNum.textContent !== ""){
                operate(parseInt(prevNum.textContent), parseInt(currNum.textContent), opt.textContent);
            } 
            
            if ( !checkOperator(currNum.textContent) ){
                prevNum.textContent = currNum.textContent;
                opt.textContent = this.textContent;
            } 

            currNum.textContent = '0';
            console.log("wat");

    }   else if (this.textContent === '='){
        
        if (prevNum.textContent === '' && opt.textContent === '') {
            currNum.textContent = '0';
            console.log("hello");
        } else {
            operate(parseInt(prevNum.textContent), parseInt(currNum.textContent), opt.textContent);
        }

    }   else {
            console.log("3");

            if (this.textContent !== '+/-'){
                currNum.textContent += this.textContent;
                console.log("hello");
            }

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

    console.log("button pressed: " + this.textContent);
}