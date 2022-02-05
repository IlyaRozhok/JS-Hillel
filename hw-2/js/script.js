const operand1 = prompt("Введите число");
const operand2 = prompt("Введите второе число");

let plus = Number(operand1) + Number(operand2);
let minus = operand1 - operand2;
let multipl = operand1 * operand2;
let division = operand1 / operand2;

console.log(`Результат: ${operand1} + ${operand2} = ${plus}`);
console.log(`Результат: ${operand1} - ${operand2} = ${minus}`);
console.log(`Результат: ${operand1} * ${operand2} = ${multipl}`);
console.log(`Результат: ${operand1} / ${operand2} = ${division}`);