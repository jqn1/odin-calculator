const buttons = Array.from(document.querySelectorAll(".button"));
const screen = document.querySelector(".screen");
let displayContent = "";


for (let button of buttons){
    button.addEventListener("click",(button) => {
        buttonContent = button.target.textContent;
        if (buttonContent === "C"){
            displayContent = "";
            screen.textContent = displayContent;
        } else if (buttonContent === "="){
            operation = splitOperation(displayContent);
            result = operate(operation[2],operation[0],operation[1]);
            console.log(result);
            displayContent = result;
            screen.textContent = displayContent;
        } else {
            displayContent += buttonContent;
            screen.textContent = displayContent;
        }
    })
}


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator,a,b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "/":
            return divide(a,b);
        case "*":
            return multiply(a,b);
    }

}

function splitOperation(screenContent){
    let operator = screenContent.match(/[+\-*/]/);
    let operation = screenContent.split(operator[0]);
    operation.push(operator[0]);

    return operation;

}