'use strict'

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
    budget : +money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : {},
    savings : false
};
let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", "");
let secondQuestion = prompt("Во сколько обойдется", "");
let firstQuestion1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let secondQuestion1 = prompt("Во сколько обойдется", "");

appData["expenses"]["firstQuestion"] = secondQuestion;
appData["expenses"]["firstQuestion1"] = secondQuestion1;

let budgetForOneDay = Math.trunc(appData.budget / 30);
alert("Бюджет на один день: " + budgetForOneDay);