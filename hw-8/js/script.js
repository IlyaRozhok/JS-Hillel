//1 - 9
const a = prompt("Ваше значение, сэр");

(+a === 0) ? alert("Верно") : alert("Неверно"); //1
(a > 0) ? alert("Верно") : alert("Неверно"); //2 
(a < 0) ? alert("Верно") : alert("Неверно"); //3 
(a >= 0) ? alert("Верно") : alert("Неверно"); //4 
(a <= 0) ? alert("Верно") : alert("Неверно"); //5
(+a !== 0) ? alert("Верно") : alert("Неверно"); //6
(a === "test") ? alert("Верно") : alert("Неверно"); //7
(a === "1") ? alert("Верно") : alert("Неверно"); // 8
(a > 0 && a < 5) ? alert("Верно") : alert("Неверно"); //9 

//10
let a = +prompt("Введите значение"); //переменная меняется, объявляем через let

if (a === 0 || a === 2) {
    a += 7;
} else {
    a /= 10;
};
alert(a);

// 11
const a = +prompt("Введите первое число");
const b = +prompt("Введите второе число");

if (a <= 1 && b >= 3) {
    alert(a + b);
} else {
    alert (a - b);
}

//12
const a = +prompt("Введите первое число");
const b = +prompt("Введите второе число");

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    alert("Верно");
} else {
    alert("Неверно");
};

//13
const num = prompt("Choose one from these options: 1, 2, 3, 4?");
let result;

switch (num) {
    case "1" :
        result = "Зима",
        alert(`Сохраняем: "${result}"`);
        break;
    
    case "2" : 
        result = "Весна";
        alert(`Сохраняем: "${result}"`);
        break;

    case "3" :
        result = "Лето";
        alert(`Сохраняем: "${result}"`);
        break;

    case "4" :
        result = "Осень";
        alert(`Сохраняем: "${result}"`);
        break;

    default :
    alert("Введите корректное значение");
}