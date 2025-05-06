import {add, subtract, multiply, divide, operate} from "./operations.js"
import { splitOperation, operatorAmount, buttonBehavior } from "./utils.js";

class Calculator {
    constructor(){
        this.buttons = Array.from(document.querySelectorAll(".button"));
        this.screen =  document.querySelector(".screen");
        this.#setButtons(this.buttons, this.screen);
    }

    #setButtons(buttons, screen) {
        buttons.forEach(button => {
            buttonBehavior(button, screen);
        });
    }
    

}

export {Calculator};