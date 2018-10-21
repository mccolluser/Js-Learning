window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    let phone = document.querySelector('#phone');
    let mask = '(___)___-__-__';
    //Проверяем фокус
    phone.addEventListener('focus', _ => {
        // Если там ничего нет или есть, но левое
        if (/^\d*$/.test(phone.value)){
            // То вставляем знак плюса как значение
            phone.value = mask;
        }
            
    });
    phone.addEventListener('keydown', function(e) {
        //старое значение в инпуте
        let oldValue = this.value;
        //позиция корретки
        let coret = this.selectionStart;
        //в случае если стирать нечего, выходим
        if (e.keyCode == 8 && coret == 0){
            return;
        }
        // при нажатии на backspace отменяем удаление скобок и прочерков
        if (e.keyCode == 8 && oldValue[coret - 1] != '(' && oldValue[coret - 1] != ')' && oldValue[coret - 1] != '-' ){
            e.preventDefault();
            this.value = oldValue.replaceAt(coret - 1, '_');
            this.selectionStart = coret - 1;
            this.selectionEnd = coret - 1;    
        }
        // если пытаемся стереть спец симовол, то просто двигаем коретку в лево
        else if (e.keyCode == 8){
            e.preventDefault();
            this.selectionStart = coret - 1;
            this.selectionEnd = coret - 1;    
        }
    });
    phone.addEventListener('keypress',function(e) {
        //отменяем стандартное действие
        e.preventDefault(); 
        //старое значение в инпуте
        let oldValue = this.value;
        //позиция корретки
        let coret = this.selectionStart;

        //не позволяем дописать больше символом, чем длина номера
        if (coret > 13){
            return;
        }

        // Отменяем ввод не цифр
        if (!/\d/.test(e.key)){
            return;
        }

        if (oldValue[coret] === '-' || oldValue[coret] === '(' || oldValue[coret] === ')'){
            coret++;
        }
        
        this.value = oldValue.replaceAt(coret, e.key);
        this.selectionStart = coret + 1;
        this.selectionEnd = coret + 1;
    });

});