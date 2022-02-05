// Task #1 
const user = {};
user.name = "John";
// or another option - user["name"] = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task #2
user.surname = "Anderson";
console.log(user);
//Можно. В данном случае константа - это объект с наличием свойств, которые могут добавляться, удаляться или изменяться. 

//Task #3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);
// Использую let для объявления переменной sum, т.к. зарплаты могут меняться.