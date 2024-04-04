const calcScreen = document.getElementsByClassName("screen")[0];

let total = "";
let operator = "";
let clear = false; // doesn't actually have anything to do with the clear button
// just tells the calculator that an operator button was pressed
// so clear the screen the next time a number is pressed
let lastInput = "";

// add event listeners
// numbers
const numberBtns = document.getElementsByClassName("number");
for (let i = 0; i < numberBtns.length; i ++) {
    numberBtns[i].addEventListener("click", () => {
        lastInput = calcScreen.innerHTML;
        if (clear) {
            calcScreen.innerHTML = "";
            clear = false;
        }

        calcScreen.innerHTML += numberBtns[i].innerHTML;
    })
}

// clear button
const clearBtn = document.getElementById("clear-button");
clearBtn?.addEventListener("click", () => {
    lastInput = "AC";
    total = "";
    calcScreen.innerHTML = ""; 
});

// delete button
const delBtn = document.getElementById("delete-button");
delBtn?.addEventListener("click", () => {
    lastInput = "DEL";
    calcScreen.innerHTML = calcScreen.innerHTML.slice(0, -1);
});

// symbols
const operatorBtns = document.getElementsByClassName("operator");
const symbols = new Map()
symbols.set(
    "÷",
    (num1: number, num2: number) => {
        if (num2 === 0) {
            return "MATH ERROR";
        }
    
        return num1/num2
    }
);
symbols.set(
    "×",
    (num1: number, num2: number) => {return String(num1 * num2)}
);
symbols.set(
    "+",
    (num1: number, num2: number) => {return String(num1 + num2)}
);
symbols.set(
    "−",
    (num1: number, num2: number) => {console.log("what");return String(num1 - num2)}
);

for (let i = 0; i < operatorBtns.length; i ++) {
    operatorBtns[i].addEventListener("click", () => {
        operator = operatorBtns[i].innerHTML;
        if (lastInput === operator) {
            clear = true;
            return;
        }
        lastInput = operator;
        
        if (!total) {
            console.log(total);
            total += calcScreen.innerHTML;
            clear = true;
            return;
        }
        
        total = symbols.get(operator)(parseFloat(total), parseFloat(calcScreen.innerHTML));
        console.log(total);
        clear = true;
    });
}

// equal sign
const equalBtn = document.getElementById("equal-sign");
equalBtn?.addEventListener("click", () => {
    lastInput = "=";
    total = symbols.get(operator)(parseFloat(total), parseFloat(calcScreen.innerHTML));
    calcScreen.innerHTML = total;
});