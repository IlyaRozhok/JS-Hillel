//1
let numOfStr = prompt("VALUE");

if ((numOfStr === null) || (numOfStr.trim() === "") || isNaN(+numOfStr)) {
    alert("Значение невалидно");
} else {
    alert("Ок");
}

//2 
let numOrStr = prompt('input number or string');

switch (numOrStr) {
    case null :
        alert("Вы отменили");
}
switch (numOrStr.trim()) {
    case "" :
        alert("Пустая строка");
        break;
    default: 
    alert("OK");
}
switch (+numOrStr) {
    case NaN:
        alert("BaNaN");
};
