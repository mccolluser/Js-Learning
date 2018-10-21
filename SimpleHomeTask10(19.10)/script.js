window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    class Options{
        constructor(height, width, bg, fontSize, textAlign){
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createDiv(text){
            let div = document.createElement('div');
            
            div.textContent = text;
            div.style.height = this.height;
            div.style.width = this.width;
            div.style.backgroundColor = this.bg;
            div.style.textAlign = this.textAlign;
            div.style.fontSize = this.fontSize;

            document.body.append(div);
        }
    }
    let el = new Options('300px', '300px', '#c3c3c3c3', '40px', 'center');
    el.createDiv("созданный див через класс");
});