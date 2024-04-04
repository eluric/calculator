const numberBtns = document.getElementsByClassName("number");
const calcScreen = document.getElementsByClassName("screen")[0];

let total = 0;

// add event listeners
for (let i = 0; i < numberBtns.length; i ++) {
    numberBtns[i].addEventListener("click", () => {
        calcScreen.innerHTML = calcScreen.innerHTML + numberBtns[i].innerHTML;
    })
}

const clearBtn = document.getElementById("clear-button");
clearBtn?.addEventListener("click", () => {
   total = 0;
   calcScreen.innerHTML = ""; 
})