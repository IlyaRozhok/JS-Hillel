function expon(userNum, userDegree = 1) {
    let result;
    if (isNaN((+userNum) && +userDegree)) {
        return "Num is BaNaN";
    } else if (userNum === null || userDegree === null) {
        return "Operation has been interrupted";
    } else if (userNum.trim() === "" || userDegree.trim() === "") {
        return "Empty input of number or degree";
    }
    result = userNum ** userDegree;
    return result;
}
const resultOfExpon = expon(prompt("Введите число"), prompt("Введите степень"));
alert(resultOfExpon);