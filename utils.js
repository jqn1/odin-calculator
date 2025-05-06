function splitOperation(screenContent) {
    let operation = [];
    for (let i = 0;i <= screenContent.length; i++){
        character = screenContent[i];
        number = "";
        if(["+","-","*","/"].includes(character)){
            operation.push(number);
            operation.push(character);
            number = "";
        } 
        else {
            number += character;
        }
    }
    return operation;
}

function operatorAmount(screenContent) { 
    let operators = screenContent.match(/[+\-*/]/g);
    if (operators === null){
        return 0;
    }
    return operators.length;
}

function buttonBehavior(button, screen) {

    button.addEventListener("click", (button) => {
        let buttonContent = button.target.textContent;

        if (buttonContent === "C") {
            screen.textContent = "";

        } else if (buttonContent === "=") {
            operation = splitOperation(screen.textContent);
            result = operate(operation[2], operation[0], operation[1]);
            console.log(result);
            screen.textContent = result;

        } else if((operatorAmount(screen.textContent) === 1) && (["+","-","*","/"].includes(buttonContent))){
            operation = splitOperation(screen.textContent);
            result = operate(operation[2],operation[0],operation[1]);
            screen.textContent = result + buttonContent;
        }

        else {
            screen.textContent += buttonContent;
        }

    }
)}

export {splitOperation, operatorAmount, buttonBehavior};