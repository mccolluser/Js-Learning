'use strict'
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

let allBtns = document.getElementsByTagName('button');
let expensesItemBtn = allBtns[0];
let optionalExpensesBtn = allBtns[1];
let countBudgetBtn = allBtns[2];

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalexpensesItem);

let chooseIncome = document.querySelector('#income');
let savings = document.querySelector('#savings');
let sum = document.querySelector('#sum');
let percent = document.querySelector('#percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');
