window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let train = document.getElementById('train');
    
    let time;
    let pos = 0;
    train.addEventListener('click', function step() {
        let id = requestAnimationFrame(step);    
        pos += 10;
        train.style.left = pos + 'px';
        if (pos > 500){
            cancelAnimationFrame(id);
            pos = 0;
        }
        
    });
    
});