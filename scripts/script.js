const Calculator = {
    value: '',

    operatorsList: ["+","-","*","/"],



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
                return this.add(a,b);
                break;
            case "-":
                return this.subtract(a,b);
                break;
            case "*":
                return this.multiply(a,b);
                break;
            case "/":
                if (b === 0) return "Division by zero is undefined";
                return this.divide(a,b);
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
        Calculator.value = parseFloat(String(oneOperator(Calculator.value))).toFixed(2);
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
    updateDisplay('0');
});

equalBtn.addEventListener('click', equalCallBack);

function equalCallBack(equalBtn) {
    if (Calculator.value.length > 0 && isNum(Calculator.value.substr(-1,1))) {
        Calculator.value = parseFloat(String(oneOperator(Calculator.value))).toFixed(2);
        updateDisplay();
    };
}

// assumes only one operator in equation numStr
function oneOperator(numStr) {
    const operator = getOperator(numStr)
    const operands = numStr.split(operator);
    // if you split it and get 1 element, then transform nothing
    if ((operands.length) === 1) return numStr;
    // if you split it and get 2 elements, then perform the correct operation on them
    if ((operands.length === 2)) return Calculator.operate(operator, Number(operands[0]), Number(operands[1]));
}

function getOperator(numStr) {
    // determine which operation is occuring given a★b, for numStrs a and b and unknown operator ★
    for (operator of Calculator.operatorsList) {
        if (numStr.substring(1).includes(operator)) return operator; //after first char incase of negative leading num
    }
}