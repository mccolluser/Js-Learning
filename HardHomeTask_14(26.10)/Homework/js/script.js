$(document).ready(function () {
    'use strict';
    let a = 5;

    $("a[href^='#sheldure'],div.main_btna.text-center,div.main_btn.text-center.contact").on
    ('click', function() {
        $('div.overlay').fadeToggle();
        $('div.modal').animate({
            opacity: 'toogle',
            height: 'show'
        },1000);
    });

    $('button.close').on('click', function(){
        $('div.modal').animate({
            opacity: 'toogle',
            height: 'hide'
        },1000);
        $('div.overlay').fadeToggle();
    });
    $('div.modal').on('submit', function(){
        $.post(
            "../server.php",
            {
              param1: $('.contactform_name.form-control').val(),
              param2: $('.contactform_phone.form-control').val(),
            },
            success
          );
    });
    function success(data){
        alert(data);
    }
    
});