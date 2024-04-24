let firstNumber;
let secondNumber;
let operator;

const display = document.querySelector('#display')
const keyboard = document.querySelector('.keyboard');

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
                console.log('+');
                break;
            case 'subtract':
                console.log('-');
                break;
            case 'multiply':
                console.log('x');
                break;
            case 'divide':
                console.log('÷');
                break;
            case 'decimal':
                console.log('.');
                break;
            case 'all-clear':
                console.log('AC');
                break;
            case 'equals':
                console.log('=');
                break;
            default:
                console.log('Unknown button');
        }
    }
});

function populateDisplay(number) {
    display.textContent = number;
}

function operate(n1, n2, operator) {
    switch (operator) {
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
        default:
            return "OOPS... Invalid operator!"
    }
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