'use strict';
let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?", "");
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");

//     while(isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц?", "");
//     }



// }


let appData = {
    budget : +money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : {},
    savings : false,
    chooseExpanses: function() {
        

    },
    detectDayBudget: function() {
       
    },
    detectLevel: function() {
       
    },
    chooseOptExpenses: function(){
        
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?","");
            let percent = +prompt("Под какой процент?","");
            
         appData.monthIncome = save/100/12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function(){
        let items;

       

        
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();

        let text = "Способы доп. заработка: ";
        appData.income.forEach(element => {
            text += element + "; ";
        });
        document.write("<p>" + text + "</p>");
    }
};

// console.log("Наша программа включает в себя данные: ");
// for (let prop in appData){
//     console.log("- " + prop);
// }


let startBtn = document.getElementById('start');

let budgetValue = document.querySelector('.result .budget-value');
let daybudgetValue = document.querySelector('.result .daybudget-value');
var levelValue = document.querySelector('.result .level-value');
let expensesValue = document.querySelector('.result .expenses-value');
let optionalexpensesValue = document.querySelector('.result .optionalexpenses-value');
let incomeValue = document.querySelector('.result .income-value');
let monthsavingsValue = document.querySelector('.result .monthsavings-value');
let yearsavingsValue = document.querySelector('.result .yearsavings-value');

let expensesItems = document.querySelectorAll('.expenses-item');

let allBtns = document.querySelectorAll('button');

allBtns.forEach(function(item){
    if (item.className != "start")
        item.disabled = true;
});

let expensesItemBtn = allBtns[0];
let optionalExpensesBtn = allBtns[1];
let countBudgetBtn = allBtns[2];

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');


let chooseIncome = document.querySelector('#income');
let savings = document.querySelector('#savings');
let sum = document.querySelector('#sum');
let percent = document.querySelector('#percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

startBtn.addEventListener('click', function(){
    allBtns.forEach(function(item){
        if (item.className != "start")
            item.disabled = false;
    });

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});
expensesItemBtn.addEventListener('click', function(){
    let sum = 0;
    
    for (let i = 0; i < expensesItems.length; ++i){
        if (expensesItems[i].value == ""){
            return;
        }
    }

    for (let i = 0; i < expensesItems.length; ++i){
        let a = expensesItems[i].value;
        let b = expensesItems[++i].value;
    
        if (typeof(a) === 'string' && typeof(b) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50 ){
                appData.expenses[a] = b;
                sum += +b;
        } else {
            --i;
        }
    }
    expensesValue.textContent = sum;
});
optionalExpensesBtn.addEventListener('click', function(){
    let ans;
    for (let i = 0; i < optionalexpensesItem.length; ++i){
        ans = optionalexpensesItem[i].value;
        // while (isNaN(ans)  || ans == "" || ans == null){
        //     ans = prompt("Статья необязательных расходов?", "");
        // }
        appData.optionalExpenses[i] = ans;
        optionalexpensesValue.textContent += ans + ' ';
    }
});
countBudgetBtn.addEventListener('click', function(){
    if (isNaN(appData.budget)){
        daybudgetValue.textContent = "Произошла ошибка";
        return;
    }
    let expensSum  = 0;
    
    for(let index in appData.expenses) { 
        expensSum += +appData.expenses[index];
    }

    appData.moneyPerDay = ((appData.budget - expensSum) / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;
    
    if (appData.moneyPerDay <= 100){
        levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000){
        levelValue.textContent = "Высокий уровень достатка";
    } else {
        levelValue.textContent = "Произошла ошибка";
    }
});
chooseIncome.addEventListener('change', function(){
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    }
    else{
        appData.savings = true;
    }  
});
sum.addEventListener('input', function() {
    if (appData.savings == true){
        let summ = +sum.value,
            percentt = +percent.value;
        appData.monthIncome = summ / 100 / 12 * percentt;
        appData.yearIncome  = summ / 100 * percentt;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function(){
    if (appData.savings == true){
        let summ = +sum.value,
            percentt = +percent.value;
        appData.monthIncome = summ / 100 / 12 * percentt;
        appData.yearIncome  = summ / 100 * percentt;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});



