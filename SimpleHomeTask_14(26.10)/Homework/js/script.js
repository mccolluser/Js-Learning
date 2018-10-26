$(document).ready(function () {
    'use strict';
    let a = 5;

    $("a[href^='#sheldure'],div.main_btna.text-center,div.main_btn.text-center.contact").on
    ('click', function() {
        $('div.overlay').fadeToggle();
        $('div.modal').slideDown();
    });

    
    $('button.close').on('click', function(){
        $('div.modal').slideUp();
        $('div.overlay').fadeToggle();
    });
    
});