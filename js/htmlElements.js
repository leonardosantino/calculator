import {clearDisplay, addNumber, addDot, addOperator, equalCalc} from './app.js';

export const registry = document.getElementById('registry');
export const result = document.getElementById('result');

document.getElementById('ac').onclick = clearDisplay();
document.getElementById('parentheses');
document.getElementById('percent');

document.getElementById('slash').onclick = addOperator('÷');
document.getElementById('mult').onclick = addOperator('×');
document.getElementById('minus').onclick = addOperator('-');
document.getElementById('plus').onclick = addOperator('+');
document.getElementById('equal').onclick = equalCalc();

document.getElementById('n0').onclick =  addNumber(0);
document.getElementById('n1').onclick = addNumber(1);
document.getElementById('n2').onclick = addNumber(2);
document.getElementById('n3').onclick = addNumber(3);
document.getElementById('n4').onclick = addNumber(4);
document.getElementById('n5').onclick = addNumber(5);
document.getElementById('n6').onclick = addNumber(6);
document.getElementById('n7').onclick = addNumber(7);
document.getElementById('n8').onclick = addNumber(8);
document.getElementById('n9').onclick = addNumber(9);
document.getElementById('dot').onclick = addDot('.');
