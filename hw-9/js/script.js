let messageYearCity, messageSport, userCity, userSport; //Создаю переменные для использования в условиях и функциях (конснантой игрался, создать константу в условиях и потом использовать ее чето не получается)

const userBirthdayYear = prompt("Приветствую! Какой год твоего рождения?");
//Первый инпут
if ((userBirthdayYear !== null) && (userBirthdayYear.trim() !== "")) {
    userCity = prompt("В каком городе проживаешь?");
} else if ((userBirthdayYear === null) || (userBirthdayYear.trim() === "")) {
    alert("Жаль что вы не захотели ввести год рождения :(");
}
// Перебираем варианты и корректируем сообщение пользователю
switch (userCity) {
    case "Киев" :
        messageYearCity = `Твой год рождения: ${userBirthdayYear}, ты живешь в столице Украины - в г.Киев.`;
        break;
    
    case "Москва" :
        messageYearCity = `Твой год рождения: ${userBirthdayYear}, ты живешь в столице РФ - в г.Москва.`;
        break;

    case "Минск" :
        messageYearCity = `Твой год рождения: ${userBirthdayYear}, ты живешь в столице Беларуси - в г.Минск.`;
        break;
    
    default:
        messageYearCity =  `Твой год рождения: ${userBirthdayYear}, ты живешь в городе ${userCity}.`;
}
//Второй 
 if ((userCity !== null) && (userCity.trim() !== "")) {
    userSport = prompt("Какой твой любимый вид спорта: футбол, бокс, баскетбол?");
} else if ((userCity === null) || (userCity.trim() === "")) {
    alert("Жаль что вы не захотели ввести свой город проживания :(");
} 
// Перебираем варианты и корректируем сообщение пользователю
if (userSport == "бокс") {
    messageSport = `Любишь ${userSport}? Круто! Хочешь стать как Кличко?`;
} else if (userSport == "футбол") {
    messageSport = `Любишь ${userSport}? Круто! Хочешь стать как Месси?`;
} else if (userSport == "баскетбол") {
    messageSport = `Любишь ${userSport}? Круто! Хочешь стать как Джордан?`;
} else {
    messageSport = `Любишь ${userSport}? Круто!`;
}
//Третий 
if ((userSport === null) || (userSport.trim() === "")) {
    alert("Жаль! Вы не ввели вид спорта :(");
} else if ((userSport !== null) && (userSport.trim() !== "")) {
    alert(`${messageYearCity} ${messageSport}`);
}


