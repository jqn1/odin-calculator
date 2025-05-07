import {operate} from "./operations.js"

function splitOperation(screenContent) {
    // takes all the input on the calculator and splits it into 2 numbers and operator array
    let operation = [];
    let number = "";
    for (const character of screenContent){
        if(["+","-","*","/"].includes(character)){
            operation.push(number)
            operation.push(character);
            number = "";
        } 
        else {
            number += character;
        }
    }
    operation.push(number);
    return operation;
}

function operatorAmount(screenContent) { 
    let operators = screenContent.match(/[+\-*/]/g);
    if (operators === null){
        return 0;
    }
    return operators.length;
}

function buttonBehaviour(button, screen, calc) {
    let operation, result;

    button.addEventListener("click", (button) => {
        let buttonContent = button.target.textContent;
        console.log(calc.isOperationFinished);

        if ((calc.isOperationFinished === true) || screen.textContent === "Error"){
            screen.textContent = "";
            calc.isOperationFinished = false;
        }

        if (buttonContent === "C") {
            screen.textContent = "";

        } else if (buttonContent === "=") {
            if (operatorAmount(screen.textContent) != 0){
                
                operation = splitOperation(screen.textContent);
                console.log(operation);
                result = formatGetResult(operation);
                screen.textContent = result;
                calc.isOperationFinished = true;
            }

        } else if((operatorAmount(screen.textContent) === 1) && (["+","-","*","/"].includes(buttonContent))){
            // if there is already an operator and user inputs another one, operate and then add the new operator to the result
            operation = splitOperation(screen.textContent);
            result = formatGetResult(operation);
            screen.textContent = result + buttonContent;
        }

        else {
            screen.textContent += buttonContent;
        }

    }
)}

function roundResult(number, decimalPlaces) {
    // round result of operation if has more than 3 floating decimal numbers
    let stringNumber = String(number);
    let pastPoint = false;
    let decimalAmount = 0;
    for (let char of stringNumber) {
        if (char === ".") {
            pastPoint = true;
            continue;
        }
        if (pastPoint) {
            decimalAmount++;
        }
    }
    if (decimalAmount > 0) {
        return Number(number.toFixed(decimalPlaces));
    }
    return number;
}

function formatGetResult(operationArray){
    // compute,round if neccessary and return the result as string
    let result = String(
        roundResult(
        operate(operationArray[0], operationArray[1], operationArray[2]), 3
        )
    );

    if(result === "Infinity"){
        return "Error";
    }
    return result;
}

export {splitOperation, operatorAmount, buttonBehaviour, roundResult};