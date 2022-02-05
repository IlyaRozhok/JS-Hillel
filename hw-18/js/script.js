function mainFunction(callback) {
    const userNum = +prompt("Введите число");
    const userExpon = +prompt("Введите число-степень");
    callback(userNum, userExpon);
}
function calcExpon(userNum, userExpon) {
    let result = userNum ** userExpon;
    alert(result);
}
function calcMult(userNum, userExpon) {
    let result = userNum * userExpon;
    alert(result);
}
function calcDiv(userNum, userExpon) {
    let result = userNum / userExpon;
    alert(result);
}
function calcModulo(userNum, userExpon) {
    let result = userNum % userExpon;
    alert(result);
}
mainFunction(calcModulo);