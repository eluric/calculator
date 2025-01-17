const calcScreen = document.getElementsByClassName("screen")[0];

let total = "";
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
        const num = numberBtns[i].innerHTML;
        lastInput = num;
        if (clear) {
            calcScreen.innerHTML = "";
            clear = false;
        }

        calcScreen.innerHTML += num
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

        const operator = operatorBtns[i].innerHTML;
        if (operatorFuncs.has(lastInput)) {
            return;
        }
        
        lastInput = operator;

        if (!lastOperator) {
            lastOperator = operator;
        }
        
        if (!lastOperand) {
            lastOperand = calcScreen.innerHTML;
        } else {
            lastOperand = operatorFuncs.get(lastOperator)(
                parseFloat(lastOperand), parseFloat(calcScreen.innerHTML)
            );
        }
        console.log(lastOperand);
        lastOperator = operatorBtns[i].innerHTML;
        clear = true;
    });
}


// AC button
const clearBtn = document.getElementById("clear-button");
clearBtn?.addEventListener("click", () => {
    lastOperand = "";
    lastOperator = "";
    calcScreen.innerHTML = "";
});


// delete button
const deleteBtn = document.getElementById("delete-button");
deleteBtn?.addEventListener("click", () => {
    calcScreen.innerHTML = calcScreen.innerHTML.slice(0, -1);
});


// equals
const equalsBtn = document.getElementById("equal-sign");
equalsBtn?.addEventListener("click", () => {
    if (!lastOperator) {
        return;
    }

    // const operatorOpposites = new Map();
    // operatorOpposites.set("+", "−");
    // operatorOpposites.set("−", "+");
    // operatorOpposites.set("×", "÷");
    // operatorOpposites.set("÷", "×");
    clear = true;

    calcScreen.innerHTML = operatorFuncs.get(lastOperator)(
        parseFloat(lastOperand), parseFloat(calcScreen.innerHTML)
    );
});