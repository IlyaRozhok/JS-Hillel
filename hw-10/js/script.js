//1
let x = 10, y = 7; 
x > y ? alert("х больше чем у") : alert("х не больше, чем у");

//2
const num = +prompt("Ваше число");
if (num % 2) {
    alert(`число ${num} нечетное`);
} else {
    alert (`число ${num} четное`);
}

//3
let numb = +prompt("Введите целое число");
console.log(numb, typeof numb);

if ((numb >= 0) && (numb < 10)) {
    alert(`Число ${numb} однозначное положительное`);
} else if ((numb < 0) && (numb > -10)) {
 alert (`Число ${numb} однозначное отрицацельное`);
} 

if ((numb > 9) && (numb < 100)) {
    alert(`Число ${numb} двузначное положительное`);
} else if ((numb < 9) && (numb > -100)) {
 alert (`Число ${numb} двузначное отрицацельное`);
} 

if ((numb > 99) && (numb < 1000)) {
    alert(`Число ${numb} трехзначное (и более) положительное`);
} else if ((numb < 99) && (numb > -1000)) {
 alert (`Число ${numb} трехзначное (и более) отрицацельное`);
}  

//4 
const num1 = +prompt("Введите 1 число");
const num2 = +prompt("Введите 2 число");
const num3 = +prompt("Введите 3 число");

if ((num1 > num2) && (num1 > num3)) {
    alert(`Число ${num1} больше чисел ${num2} и ${num3}`);
}  else if ((num2 > num1) && (num2 > num3)) {
    alert(`Число ${num2} больше чисел ${num1} и ${num3}`);    
}  else if ((num3 > num1) && (num3 > num2)) {
    alert(`Число ${num3} больше чисел ${num1} и ${num2}`);    
} 

//5
const side1 = +prompt("Введите 1 сторону");
const side2 = +prompt("Введите 2 сторону");
const side3 = +prompt("Введите 3 сторону");

if (side1 + side2 > side3) {
    alert("Может");
} else {
    alert("Не может");
}


