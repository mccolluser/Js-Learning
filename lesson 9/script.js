// 'use strict';

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log('Hello ' + this.name);
//     }
//     exit() {
//         console.log("Пользователь " + this.name + " ушел");
//     }
// }
// let ivan = new User("Ivan", 25),
//     alex = new User("Alex", 20);


// ivan.exit();
// console.log(ivan);
// console.log(alex);


// function showThis(a, b){
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(5,6);



// let obj = {
//     a : 20,
//     b : 15,
//     sum : function() {
//         console.log(this);
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// let user  = {
//     name: "Ivan"
// };

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Ivanov'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number){
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));


let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = "red";
    function show(){
        console.log(this);
    }
    show();
});

// 1) просто вызов функции - window/undefined (это имеется ввиду про this)
// 2) метод объекта - this = объект
// 3) constructor(new) - this = новый созданный объект
// 4) указание конкретного контекста - call, apply, bind
// 5)









