import {add, subtract, multiply, divide, operate} from "./operations.js"

const buttons = Array.from(document.querySelectorAll(".button"));
const screen = document.querySelector(".screen");

let displayContent = "";


for (let button of buttons){
    button.addEventListener("click",(button) => {
        let buttonContent = button.target.textContent;
        if (buttonContent === "C"){
            displayContent = "";
        } else if (buttonContent === "="){
            operation = splitOperation(displayContent);
            result = operate(operation[2],operation[0],operation[1]);
            console.log(result);
            displayContent = result;
        } else if((operatorAmount(displayContent) === 1)&&(["+","-","*","/"].includes(buttonContent))){
            operation = splitOperation(displayContent);
            result = operate(operation[2],operation[0],operation[1]);
            displayContent = result + buttonContent;

        }
        else {
            displayContent += buttonContent;
            screen.textContent = displayContent;
        }
        screen.textContent = displayContent;
    })
}

function splitOperation(screenContent){
    let operation = [];
    for (let i = 0;i <= screenContent.length; i++){
        character = screenContent[i];
        number = "";
        if(["+","-","*","/"].includes(character)){
            operation.push(number);
            operation.push(character);
            number = "";
        } else{
            number += character;
        }


    }

    return operation;

}

function operatorAmount(screenContent){ 
    let operators = screenContent.match(/[+\-*/]/g);
    if (operators === null){
        return 0;
    }
    return operators.length;
}