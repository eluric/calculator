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
        calcScreen.innerHTML += numberBtns[i].innerHTML;
    })
}