window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    setTimeout(function timer() {
        let now = new Date();
        let values = [now.getHours(), now.getMinutes(), now.getSeconds()];
        for (let index = 0; index < values.length; ++index) {
            values[index] = (-1 < values[index] && values[index] < 10) ? "0" + values[index] : values[index] + "";
        }

        let time = values.join(":");
        document.querySelector('.watch').textContent = time;
        setTimeout(timer,1000);
    });
});