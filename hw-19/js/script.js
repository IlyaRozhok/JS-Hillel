// Для 1-4
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//Для 5-6
const arr3 = ['js', 'css', 'jq'];
//Для 7-12
const arr4 = [1, 2, 3, 4, 5];
// Для 13
const arr6 = [3, 4, 1, 2, 7];
// Для 14-15
const arr7 = [5, 6, 7, 8, 9];
//Для 16-17
const arr8 = [1,-3, 5, 6,-7, 8, 9,-11];
//Для 18
const arr9 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// Для 19
const arr10 = [1, 2, [3, 4], 5, [6, 7]];
//Для 20
const arr11 = [5,-3, 6,-5, 0,-7, 8, 9];

//1 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
console.log(arr1.concat(arr2));

//2 Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
console.log(arr1.reverse(arr2));

//3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
arr1.push(4, 5, 6);
console.log(arr1);

//4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
arr1.unshift(4, 5, 6);
console.log(arr1);

//5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
console.log(arr3[0]);

//6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
console.log(arr3[arr3.length - 1]);

//7 Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
const res_arr5 = arr4.slice(0, 3);
console.log(res_arr5);

//8 Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
const resul_arr5 = arr4.slice(3, 5);
console.log(resul_arr5);

//9 Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
arr4.splice(1, 2);
console.log(arr4);

//10 Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
const result_arr5 = arr4.splice(1, arr4.length - 2);
console.log(result_arr5);

//11 Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
arr4.splice(3, 0, 'a', 'b', 'c');
console.log(arr4);

//12 Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
arr4.splice(1, 0, 'a', 'b');
arr4.splice(arr4.length - 1, 0, 'c');
arr4.splice(arr4.length, 0, 'e');
console.log(arr4);

//13 Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
console.log(arr6.sort());

//14 Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
console.log(arr7.reduce((result, current) => result + current));

//15 Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
const powResult = arr7.map(funcPow);

function funcPow(item) {
    return Math.pow(item, 2);
}
console.log(powResult);

//16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
const negNum = arr8.filter(funcNegNum);

function funcNegNum(item) {
    return item < 0;
}
console.log(negNum);

// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
const evenNum = arr8.filter(cbForEvenNum);

function cbForEvenNum(item) {
        if (item % 2 === 0) {
            return item;
        }
}
console.log(evenNum);

//18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
const strMoreThan5 = arr9.filter(cbForString); 

function cbForString(item) {
    return item.length > 5;
}
console.log(strMoreThan5);

//19 Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
const subArray = arr10.filter(Array.isArray);
console.log(subArray);
//20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
const sumOfNegNums = arr11.filter(funcNegNum); // 84 строка
console.log(sumOfNegNums.length); //Ответ: 3