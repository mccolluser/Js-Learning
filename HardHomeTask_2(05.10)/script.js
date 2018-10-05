'use strict'

let week = ['понедельник','вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let currentDay = 'пятница';
for (let i = 0; i < week.length; ++i){
    if (week[i] == 'суббота' || week[i] == 'воскресенье'){
        document.write("<br><b>" + week[i] + "</b>");
        continue;
    }
    if (week[i] == currentDay){
        document.write("<br><i>" + week[i] + "</i>");
        continue;
    }
    document.write("<br>" + week[i]);
}


let arr = ["43532132", "4324132", "345791321", "104793578", "3785641", "784423", "9741"];

for (let i = 0; i < arr.length; ++i){
    if (arr[i][0] == "3" || arr[i][0] == "7")
        console.log(arr[i]);
}