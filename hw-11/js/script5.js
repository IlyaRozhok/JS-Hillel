//5
const array = [1, 2, 3, 4, 5];
for (let sum = 0, total = 0; sum < array.length; sum++) {
    total = Math.pow(array[sum], 2) + total;
    console.log(total);
}