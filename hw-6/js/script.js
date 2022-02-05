// Task# 1

/* 1. 11, 'number'
2. `sub0`, 'string'
3. 1456, 'number' (кавычки в дз указаны ‘ - во избежания синтаксической ошикбки меняем на ` или " или ')
4. -69, 'number' (при арифм. операции true - преорбразуется в 1)
5. 111, 'number' */

// Task# 2

const time = {
    userHours: Number(prompt("Кол-во часов?")),
    secondsInMinute: 60,
    secondsInHour: 60,
};

const resultSeconds = time.userHours * (time.secondsInMinute * time.secondsInHour);
alert(`В ${time.userHours} часах ровно : ${resultSeconds} секунд!`); 



// Task #3

/* 
let num = 1;
num += 12; 
num -= 14;
num *= 5;
num /= 7;
num++;
num--;  
*/

