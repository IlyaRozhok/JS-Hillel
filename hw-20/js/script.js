///* 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
const arrForFirst = ['a', 'b', 'c', 'd'];

function showStrFirstTask(arrForFirst) {
    const arr1 = arrForFirst
    .splice(0, 2)
    .join('+');
    const arr2 = arrForFirst
    .join('+');
    return `${arr1}, ${arr2}`;
}
console.log(showStrFirstTask(arrForFirst));

//2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
const arrForSecond = [2, 5, 3, 9];

const sum1 = arrForSecond[0] * arrForSecond[1];
const sum2 = arrForSecond[2] * arrForSecond[3];
const result = sum1 + sum2;
console.log(result);

//3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
const arrForThird = [ [1, 2, 3], [4, 5, 6], [7,8,9], ];
console.log(arrForThird[1][0]);

// Сначала заморочился -->>
/*  let show4 = (arrForThird) => {
    for (let i = 0; i < arrForThird.length; i++) {
        if (arrForThird[i].find((elem) => elem === 4)) {
            return arrForThird[i].find((elem) => elem === 4);
        } 
    } 
};*/

//4 Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
const obj4 = {
    js:['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'};
console.log(obj4.js[0]);

//5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
let extraChar = () => {
    const symbol = '*';
    const result = [];
    let str = '';
    for (let i = 10; i > 0; i--) {
        str += symbol;
        result.push(str);
    } return result;
};
console.log(extraChar());

//6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
let addNumb = () => {
    const arr = [];
    let str;
    for (let i = 1; i < 10; i++) {
        str = '';
        for (let k = 0; k < i; k++) {
            str += i;
        } 
        arr.push(str);
    }
    return arr;
};
console.log(addNumb());

//7  Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
let arrayFill = (elem, len) => {
    let array = [];
    for (let i = 0; i < len; i++) {
        array.push(elem);
    } return array;
};
console.log(arrayFill('x', 5));

//8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
const arrNumb = [2, 1, 2, 1, 4, 2, 1];

//Циклом
for (let i = 0, sum = 0; i < arrNumb.length; i++) {
    sum += arrNumb[i];
    if (sum > 10) {
        console.log(`Первые(ый) ${i+1} элем. > 10`); break;
    }
}
//с помощью reduce оставлю на потом

//9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
let reversedArr = [];
arrNumb.map((elem) => reversedArr.unshift(elem));
console.log(reversedArr);

//10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const arrForTen = [[1, 2, 3], [4, 5], [6]];

const sumOfTen = arrForTen
    .flat()
    .reduce((accum, elem) => accum + elem);
    console.log(sumOfTen);
// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольны
const arrForEleven = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

const sumOfEleven = arrForEleven
    .flat(2)
    .reduce((accum, elem) => accum + elem);
    console.log(sumOfEleven);
    
//Доп задачка с 9-го урока (изменяем расширение в пути файла)
 const pathToFile = './images/icons/ic.on.webp';

let editFileExtension = (fileName) => {
    let pathToFile2 = pathToFile
    .split('.')
    .splice(0, 3);
    pathToFile2.push(fileName);
    pathToFile2 = pathToFile2.join('.');
    return pathToFile2;
};
console.log(editFileExtension('svg')); 