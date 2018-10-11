'use strict'

function addZeroes(dateString){
    let hoursMinutesSeconds = (dateString.split(" "))[0];
    let yearsMonthDay = (dateString.split(" "))[1];
    let day = yearsMonthDay.split(".")[0];
    let month = yearsMonthDay.split(".")[1];
    let year = yearsMonthDay.split(".")[2];
    
    day = (day.length == 1) ? "0" + day : day;
    month = (month.length == 1) ? "0" + month : month;
    
    return hoursMinutesSeconds + " " + day + ":" + month + ":"  + year;
    
}

function getWeekday(dateObj){
    let week = ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];
    let day = dateObj.getDay();
    return week[day];
}

function calcDifference(){
    let inputs = document.getElementsByTagName('input');
    let firstDate = inputs[0].value;
    let secondDate = inputs[1].value;
    
    if (firstDate == "" || secondDate == ""){
        alert("Выберите даты!");
        return;
    }
    firstDate = new Date(firstDate);
    secondDate = new Date(secondDate);
    let result = Math.ceil(Math.abs(secondDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24));
    inputs[2].value = result;
}
var dateString = "";

var newDate = new Date();

dateString += newDate.getHours() + ":";
dateString += newDate.getMinutes() + ":"; 
dateString += newDate.getSeconds() + " ";

dateString += newDate.getDate() + ".";
dateString += (newDate.getMonth() + 1) + ".";
dateString += newDate.getFullYear();


