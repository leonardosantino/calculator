const register = document.getElementById('register');
const result = document.getElementById('result');

const ac = document.getElementById('ac');
const parentheses = document.getElementById('parentheses');
const percent = document.getElementById('percent');

const slash = document.getElementById('slash');
const mult = document.getElementById('mult');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const equal = document.getElementById('equal');

const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
const dot = document.getElementById('dot');

let operations = [];
let clearRegistry = false;
let clearResult = false;

ac.onclick = clearDisplay();

n0.onclick = addNumber(0);
n1.onclick = addNumber(1);
n2.onclick = addNumber(2);
n3.onclick = addNumber(3);
n4.onclick = addNumber(4);
n5.onclick = addNumber(5);
n6.onclick = addNumber(6);
n7.onclick = addNumber(7);
n8.onclick = addNumber(8);
n9.onclick = addNumber(9);
dot.onclick = addNumber('.');

plus.onclick = addOperator('+');
minus.onclick = addOperator('-');
mult.onclick = addOperator('×');
slash.onclick = addOperator('÷');

equal.onclick = equalCalc();

function addNumber(number) {
    return () => {

        if (clearRegistry)
            register.innerHTML = ''; clearRegistry = false;

        if (clearResult)
            result.innerHTML = ''; clearResult = false;

        result.innerHTML += number;
    }
}

function addOperator(operator) {
    return () => {

        operations.push(parseFloat(result.innerHTML));
        operations.push(operator);

        if (clearRegistry)
            register.innerHTML = ''; clearRegistry = false;

        register.innerHTML += result.innerHTML + ` ${operator} `;

        if (clearResult)
            result.innerHTML = ''; clearResult = false;

        clearResult = true;
    }
}

function equalCalc() {
    return () => {

        operations.push(parseFloat(result.innerHTML));
        register.innerHTML += result.innerHTML;

        let finalResult = 0;
        let operationType = '+';

        operations.forEach(element => {

            if (typeof (element) == 'number') {
                if (operationType == '+')
                    finalResult += element;
                else if (operationType == '-')
                    finalResult -= element;
                else if (operationType == '*')
                    finalResult *= element;
                else if (operationType == '/')
                    finalResult /= element;
            }
            if (element == '+')
                operationType = '+';
            else if (element == '-')
                operationType = '-';
            else if (element == '×')
                operationType = '*';
            else if (element == '÷')
                operationType = '/';
        });

        operations = [];
        clearRegistry = true;
        clearResult = true;

        result.innerHTML = finalResult;
    }
}

function clearDisplay() {
    return () => {

        operations = [];
        clearRegistry = false;
        clearResult = false;

        register.innerHTML = '';
        result.innerHTML = '';
    }
}
