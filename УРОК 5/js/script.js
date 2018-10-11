'use strict'

let menu = document.getElementsByClassName("menu-item");
let parentMenu = document.querySelector('.menu');

let newMenu = document.createElement('li');
newMenu.classList.add('menu-item');
newMenu.innerHTML = "Пятый пункт";

parentMenu.appendChild(newMenu);


let old = parentMenu.replaceChild(menu[2], menu[1]);
parentMenu.insertBefore(old, menu[2]);

document.body.style.background = "url('../img/apple_true.jpg')";

let title = document.getElementById('title');
title.innerHTML = "Мы продаем только подлинную технику Apple";


var elem = document.querySelector('.column .adv'); 
elem.parentNode.removeChild(elem);

let answ = prompt("Отношение к технике Apple?","");
let promptAnsw = document.getElementById("prompt");
promptAnsw.innerHTML = answ;
