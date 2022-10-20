const Calculator = {
    value: 0,

    add(a,b) {
        return a+b;
    },

    subtract(a,b) {
        return a-b;
    },

    multiply(a,b) {
        return a*b;
    },

    divide(a,b) {
        return a/b;
    },

    operate(operator, a, b) {
        switch(operator) {
            case "+":
                return add(a,b);
                break;
            case "-":
                return subtract(a,b);
                break;
            case "*":
                return multiply(a,b);
                break;
            case "/":
                return divide(a,b);
                break;
            default:
                return "ERROR";
                break;
        }
    },
};


const numberBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");
const equalBtn = document.getElementById("=");
const clearBtn = document.getElementById("clear");
const computed = document.getElementById("computed");


for (numBtn of numberBtns) {
    numBtn.addEventListener("click", numCallBack)
};

function numCallBack(numBtn) {
    return null;
}