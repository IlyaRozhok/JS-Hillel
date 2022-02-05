const value = +prompt("Введите число");
let message = true;

for (let i = 2; i < value; i++) {
    let result = value % i;
    if (result === 0) {
        message = false; break;}
}
if (value < 2) {
    message = false;
}
console.log(message);