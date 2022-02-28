import { registry, result } from "./htmlElements.js";

let operations = [];
let clearRegistry = false;
let clearResult = false;
let enableOperator = false;
let enableEqual = false;

let enableDot = [true, false]

export function addNumber(number) {
    return () => {
        if (clearRegistry) {
            registry.innerHTML = '';
            clearRegistry = false;
        }
        if (clearResult) {
            result.innerHTML = '';
            clearResult = false;
        }
        enableOperator = true

        enableDot[1] = true

        result.innerHTML += number;
    }
}

export function addDot(dot) {
    return () => {
        if (enableDot[0] && enableDot[1]) {
            enableDot = [false, false]
            result.innerHTML += dot;
        }
    }
}

export function addOperator(operator) {
    return () => {

        if (enableOperator) {

            operations.push(parseFloat(result.innerHTML), operator);

            if (clearRegistry) {
                registry.innerHTML = '';
                clearRegistry = false;
            }
            registry.innerHTML += result.innerHTML + ` ${operator} `;

            if (clearResult) {
                result.innerHTML = '';
                clearResult = false;
            }
            clearResult = true;
            enableOperator = false;
            enableEqual = true

            enableDot = [true, false]
        }
    }
}

export function equalCalc() {
    return () => {

        if (enableOperator && enableEqual) {

            operations.push(parseFloat(result.innerHTML));
            registry.innerHTML += result.innerHTML

            let finalResult = 0;
            let operationType = '+';

            operations.forEach(element => {

                if (typeof (element) == 'number') {
                    if (operationType == '+')
                        finalResult += element;
                    else if (operationType == '-')
                        finalResult -= element;
                    else if (operationType == '×')
                        finalResult *= element;
                    else if (operationType == '÷')
                        finalResult /= element;
                }
                else
                    operationType = element;
            });

            if(isNaN(finalResult) || finalResult == 'Infinity')
                result.innerHTML = '0'
            else if(finalResult.toString().includes('.'))
                result.innerHTML = parseFloat(finalResult).toFixed(2);
            else
                result.innerHTML = finalResult

            operations = [];
            clearRegistry = true;
            clearResult = true;
            enableEqual = false
            enableDot = [true, false]
        }
    }
}

export function clearDisplay() {
    return () => {

        operations = [];
        clearRegistry = false;
        clearResult = false;
        enableOperator = false;
        enableEqual = false;
        enableDot = [true, false]

        registry.innerHTML = '';
        result.innerHTML = '';
    }
}
