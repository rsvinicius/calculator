let firstNumber;
let secondNumber;
let operator;

const display = document.getElementById('display');
const keyboard = document.querySelector('.keyboard');
const decimalButton = document.getElementById('decimal');

keyboard.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        switch (event.target.id) {
            case 'zero':
                populateDisplay('0');
                break;
            case 'one':
                populateDisplay('1');
                break;
            case 'two':
                populateDisplay('2');
                break;
            case 'three':
                populateDisplay('3');
                break;
            case 'four':
                populateDisplay('4');
                break;
            case 'five':
                populateDisplay('5');
                break;
            case 'six':
                populateDisplay('6');
                break;
            case 'seven':
                populateDisplay('7');
                break;
            case 'eight':
                populateDisplay('8');
                break;
            case 'nine':
                populateDisplay('9');
                break;
            case 'add':
                defineOperator('+');
                break;
            case 'subtract':
                defineOperator('-');
                break;
            case 'multiply':
                defineOperator('*');
                break;
            case 'divide':
                defineOperator('/');
                break;
            case 'decimal':
                populateDisplay('.');
                break;
            case 'all-clear':
                allClear()
                break;
            case 'equals':
                operate(firstNumber, secondNumber, operator)
                break;
            default:
                console.log('Unknown button');
        }
    }
});

display.addEventListener('input', handleDecimalInput);

function allClear() {
    updateDisplayNumber('0', true);
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
}

function populateDisplay(value) {
    updateDisplayNumber(value, false)

    if (firstNumber) {
        secondNumber = parseFloat(display.textContent);
    }
}

function defineOperator(calc) {
    operator = calc;
    firstNumber = parseFloat(display.textContent);
}

function operate(n1, n2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = add(n1, n2);
            break;
        case '-':
            result = subtract(n1, n2);
            break;
        case '*':
            result = multiply(n1, n2);
            break;
        case '/':
            result = divide(n1, n2);
            break;
        default:
            alert("OOPS... Invalid operator!")
    }

    updateDisplayNumber(result, true);
}

function handleDecimalInput() {
    decimalButton.disabled = isCurrentDisplayNumberDecimal();
}

function isCurrentDisplayNumberDecimal() {
    return display.textContent.includes('.');
}

function updateDisplayNumber(number, isAccumulative) {
    if (display.textContent === '0' || isAccumulative || operator) {
        display.textContent = number
    } else {
        display.textContent += number;
    }

    display.dispatchEvent(new Event('input'));
}

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};