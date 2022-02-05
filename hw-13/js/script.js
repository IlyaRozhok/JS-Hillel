const userNum = prompt("Введите число");
let result;
let minDivider;

if (userNum < 1) {
    minDivider = NaN;
    console.log(minDivider);
}

for (i = 2; i < userNum; i++) {
    result = userNum % i;
    if (result === 0) {
        minDivider = i;
        console.log(i); break;
    }
} 