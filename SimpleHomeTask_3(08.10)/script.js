'use strict'

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }


}

start();

let appData = {
    budget : +money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : {},
    savings : true
};


function chooseExpanses() {
    for (let i = 0; i < 2; ++i){
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt("Во сколько обойдется", "");
    
        if (typeof(a) === 'string' && typeof(b) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50 ){
                appData.expenses[a] = b;
        } else {
            --i;
        }
    
    }
}

chooseExpanses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    document.write("<p>Бюджет на один день: " + appData.moneyPerDay + "</p>");
    // alert("Бюджет на один день: " + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel(){
    if (appData.moneyPerDay <= 100){
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();


function chooseOptExpenses(){
    let ans;
    for (let i = 0; i < 3; ++i){
        while (isNaN(ans)  || ans == "" || ans == null){
            ans = prompt("Статья необязательных расходов?", "");
        }
        appData.optionalExpenses[i] = ans;
    }
}
chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?","");
        let percent = +prompt("Под какой процент?","");
        
        appData.monthIncome = save/100/12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();