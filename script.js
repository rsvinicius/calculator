let operand = '';
let accumulator = null;
let currentOperator = null;
let clearDisplay = false;

const display = document.getElementById('display');
const keyboard = document.querySelector('.keyboard');
const keyMap = {
    '0': () => handleNumberInput('0'),
    '1': () => handleNumberInput('1'),
    '2': () => handleNumberInput('2'),
    '3': () => handleNumberInput('3'),
    '4': () => handleNumberInput('4'),
    '5': () => handleNumberInput('5'),
    '6': () => handleNumberInput('6'),
    '7': () => handleNumberInput('7'),
    '8': () => handleNumberInput('8'),
    '9': () => handleNumberInput('9'),
    '+': () => handleOperatorInput('+'),
    '-': () => handleOperatorInput('-'),
    '*': () => handleOperatorInput('*'),
    '/': () => handleOperatorInput('/'),
    '.': () => handleDecimalInput('.'),
    'Escape': () => allClear(),
    '=': () => handleEqualsInput()
};


keyboard.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        switch (event.target.id) {
            case 'zero':
                handleNumberInput('0');
                break;
            case 'one':
                handleNumberInput('1');
                break;
            case 'two':
                handleNumberInput('2');
                break;
            case 'three':
                handleNumberInput('3');
                break;
            case 'four':
                handleNumberInput('4');
                break;
            case 'five':
                handleNumberInput('5');
                break;
            case 'six':
                handleNumberInput('6');
                break;
            case 'seven':
                handleNumberInput('7');
                break;
            case 'eight':
                handleNumberInput('8');
                break;
            case 'nine':
                handleNumberInput('9');
                break;
            case 'add':
                handleOperatorInput('+');
                break;
            case 'subtract':
                handleOperatorInput('-');
                break;
            case 'multiply':
                handleOperatorInput('*');
                break;
            case 'divide':
                handleOperatorInput('/');
                break;
            case 'decimal':
                handleDecimalInput('.');
                break;
            case 'all-clear':
                allClear()
                break;
            case 'equals':
                handleEqualsInput();
                break;
            default:
                console.log('Unknown button');
        }
    }
});

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;

    const action = keyMap[key];
    if (action) {
        action();
    }
}

function handleOperatorInput(operator) {
    if (accumulator !== null && currentOperator && operand !== '') {
        evaluate();
    } else if (operand !== '') {
        accumulator = parseFloat(operand);
    }

    currentOperator = operator;
    clearDisplay = true;
}

function handleNumberInput(number) {
    if (clearDisplay || operand === '0') {
        operand = '';
        clearDisplay = false;
    }

    operand += number;
    updateDisplay(operand);
}

function handleDecimalInput() {
    if (operand === '') {
        operand = '0';
    }

    if (!operand.includes('.')) {
        operand += '.';
    }

    updateDisplay(operand);
}

function handleEqualsInput() {
    if (accumulator !== null && currentOperator && operand !== '') {
        evaluate();
        currentOperator = null;
    }
}

function updateDisplay(input) {
    display.textContent = input;
}

function allClear() {
    operand = '';
    accumulator = null;
    currentOperator = null;
    clearDisplay = false;
    updateDisplay('0');
}

function evaluate() {
    if (operand !== '') {
        accumulator = calculate(accumulator, parseFloat(operand), currentOperator);
    }

    updateDisplay(accumulator);
    operand = '';
    clearDisplay = true;
}

function calculate(acc, curr, operator) {
    let result;

    switch (operator) {
        case '+':
            result = add(acc, curr);
            break;
        case '-':
            result = subtract(acc, curr);
            break;
        case '*':
            result = multiply(acc, curr);
            break;
        case '/':
            if (curr === 0) {
                return 'Error';
            }
            result = divide(acc, curr);
            break;
        default:
            result = acc;
    }

    return roundTo(result, 5);
}

function roundTo(num, places) {
    let factor = Math.pow(10, places);
    return Math.round(num * factor) / factor;
}

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;