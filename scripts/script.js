const Calculator = {
    value: '',

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


for (const numBtn of numberBtns) {
    numBtn.addEventListener("click", numCallBack)
};

function numCallBack(numBtn) {
    Calculator.value += this.value;
    updateDisplay();
}

for (const operatorBtn of operatorBtns) {
    operatorBtn.addEventListener("click", operatorCallBack);
};

function operatorCallBack() {
    return null;
}


function updateDisplay() {
    computed.textContent = Calculator.value;
}