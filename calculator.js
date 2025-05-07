import {add, subtract, multiply, divide, operate} from "./operations.js"
import { splitOperation, operatorAmount, buttonBehaviour } from "./utils.js";

class Calculator {

    //set button behaviour
    #setButtons(buttons, screen) {
        buttons.forEach(button => buttonBehaviour(button, screen, this));
    }

    constructor(){
        this.buttons = Array.from(document.querySelectorAll(".button"));
        this.screen =  document.querySelector(".screen");
        this.isOperationFinished = false;
        this.#setButtons(this.buttons, this.screen);
    }

    

}

export {Calculator};