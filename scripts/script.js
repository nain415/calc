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

function updateDisplay(val) {
    computed.textContent = (val == null) ? Calculator.value : val;
}

for (const operatorBtn of operatorBtns) {
    operatorBtn.addEventListener("click", operatorCallBack);
};

function operatorCallBack(operator) {
    if (Calculator.value.length > 0 && isNum(Calculator.value.substr(-1,1))) {
        Calculator.value += this.value;
        updateDisplay();
    };
}

function isNum(str) {
    nums = ['0','1','2','3','4','5','6','7','8','9'];
    return nums.includes(str);
}

clearBtn.addEventListener('click', (btn) => {
    Calculator.value = '';
    computed.value = 0;
    updateDisplay('0');
});

equalBtn.addEventListener('click', equalCallBack);

function equalCallBack(equalBtn) {
    return null;
}

function oneOperator(numStr) {
    return null;
    // if you split it and get 1 element, then transform nothing

    // if you split it and get 2 elements, then perform the correct operation on them
}

function getOperator(numStr) {
    return null;
    // determine which operation is occuring given a★b, for numStrs a and b and unknown operator ★
}