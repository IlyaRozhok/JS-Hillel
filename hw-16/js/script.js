const arr = [1, 2, 3, -1, -2, -3];

let posNumb = (array) => {
    let result = [];
    if (array.length === 0) {
        return console.log("Array is empty");
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result.push(array[i]);
        }
    }
    return isPosNumb(result);
};
 posNumb(arr);
 
 //Проверка
 function isPosNumb(array) {
    if (array.length === 0) {
        return console.log(null);
    } return console.log(array);
}