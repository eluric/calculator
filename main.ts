const calcScreen = document.getElementsByClassName("screen")[0];

let lastOperand = "";
let lastOperator = "";
let clear = false; // doesn't actually have anything to do with the clear button
// just tells the calculator that an operator button was pressed
// so clear the screen the next time a number is pressed
let lastInput = "";

// number buttons
const numberBtns = document.getElementsByClassName("number");
for (let i = 0; i < numberBtns.length; i ++) {
    numberBtns[i].addEventListener("click", () => {
        if (clear) {
            calcScreen.innerHTML = "";
            clear = false;
        }

        calcScreen.innerHTML += numberBtns[i].innerHTML;
    })
}


// operators
const operatorFuncs = new Map();
operatorFuncs.set("÷", (num1: number, num2: number) => {
    if (num2 === 0) {
        return "";
    }

    return String(num1/num2);
})
operatorFuncs.set("×", (num1: number, num2: number) => {return String(num1 * num2)});
operatorFuncs.set("+", (num1: number, num2: number) => {return String(num1 + num2)});
operatorFuncs.set("−", (num1: number, num2: number) => {return String(num1 - num2)});

// set operator buttons
const operatorBtns = document.getElementsByClassName("operator");
for (let i = 0; i < operatorBtns.length; i ++) {
    operatorBtns[i].addEventListener("click", () => {        
        if (!calcScreen.innerHTML) {
            return;
        }
        
        if (!lastOperator) {
            lastOperator = operatorBtns[i].innerHTML;
        }
        
        if (!lastOperand) {
            lastOperand = calcScreen.innerHTML;
        } else {
            lastOperand = operatorFuncs.get(lastOperator)(
                parseFloat(lastOperand), parseFloat(calcScreen.innerHTML)
            );
        }
        console.log(lastOperand);
        clear = true;
    });
}