const question = prompt( 'Выберите одну из перечисленных арифметических операций: "add", "sub", "mult", "div"' );
const operand1 = prompt( "Введите число" );
const operand2 = prompt( "Введите второе число" );

const resultAdd = Number(operand1) + Number(operand2);
const resultSub = operand1 - operand2;
const resultMult = operand1 * operand2;
const resultDiv = operand1 / operand2;

if (question == "add") alert( `${operand1} + ${operand2} = ${resultAdd}` );
if (question == "sub") alert( `${operand1} - ${operand2} = ${resultSub}` );
if (question == "mult") alert( `${operand1} * ${operand2} = ${resultMult}` );
if (question == "div") alert( `${operand1} / ${operand2} = ${resultDiv}` );