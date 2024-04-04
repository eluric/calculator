const calcScreen = document.getElementsByClassName("screen")[0];

let total = 0;
let operator = "";
let clear = false;

// add event listeners
// numbers
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

// clear button
const clearBtn = document.getElementById("clear-button");
clearBtn?.addEventListener("click", () => {
   total = 0;
   calcScreen.innerHTML = ""; 
});

// delete button
const delBtn = document.getElementById("delete-button");
delBtn?.addEventListener("click", () => {
    calcScreen.innerHTML = calcScreen.innerHTML.slice(0, -1);
});

// symbols
const operatorBtns = document.getElementsByClassName("operator");
const symbols = {
    "÷": (num1: number, num2: number) => {
        if (num2 === 0) {
            return null;
        }

        return num1/num2
    },
    "×": (num1: number, num2: number) => {return num1 * num2}, 
    "+": (num1: number, num2: number) => {return num1 + num2}, 
    "−": (num1: number, num2: number) => {return num1 - num2}
}

function symbolFunc(symbol: string) {
    const screenNum = parseFloat(calcScreen.innerHTML); 
    
    if (symbol === "÷") {
        total = total / screenNum;
    }

    else if (symbol === "×") {
        total = total * screenNum;
    }

    else if (symbol === "+") {
        total += screenNum;
    }

    else if (symbol === "−") {
        total += -screenNum;
    }
}

for (let i = 0; i < operatorBtns.length; i ++) {
    console.log(operatorBtns[i].innerHTML);

    operatorBtns[i].addEventListener("click", () => {
        operator = operatorBtns[i].innerHTML;
        total += parseFloat(calcScreen.innerHTML);
        clear = true;
    });
    
}
console.log()