window.addEventListener("DOMContentLoaded", function () {
    'use strict';

    let infoHeader = document.querySelector('.info-header');
    let infoHeaderTabs = document.querySelectorAll('.info-header-tab');
    let infoTabContents = document.querySelectorAll('.info-tabcontent');


    function hideContentTabs(index) {
        for (let i = index; i < infoTabContents.length; ++i) {
            infoTabContents[i].classList.remove("show");
            infoTabContents[i].classList.add("hide");
        }
    }

    class React{
        
    }


    function showContentTab(index) {
        infoTabContents[index].classList.remove("hide");
        infoTabContents[index].classList.add("show");
    }

    hideContentTabs(1);

    infoHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            console.log(infoTabContents);
            for (let i = 0; i < infoHeaderTabs.length; ++i) {
                if (target == infoHeaderTabs[i]) {
                    hideContentTabs(0);
                    showContentTab(i);
                    break;
                }
            }
        }
    });

    //timer
    let deadline = '2018-10-18 03:00:00';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60));

        return {
            'total': t,
            'hours': (t < 0) ? 0 : hours,
            'minutes': (t < 0) ? 0 : minutes,
            'seconds': (t < 0) ? 0 : seconds,
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
            hours.textContent = (-1 < t.hours && t.hours < 10) ? "0" + t.hours : t.hours;
            minutes.textContent = (-1 < t.minutes && t.minutes < 10) ? "0" + t.minutes : t.minutes;
            seconds.textContent = (-1 < t.seconds && t.seconds < 10) ? "0" + t.seconds : t.seconds;
        }

    }
    setClock('timer', deadline);
    // const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    //     animationTime = 500,
    //     framesCount = 100;


    let anchors = document.querySelectorAll('a[href*="#"]');

    anchors.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            let coordContextY = document.querySelector(item.hash).offsetTop;

            let scrolling = setInterval(function () {
                let currentHeight = document.documentElement.scrollTop;
                let scrollingBy = 40;

                if (document.documentElement.scrollTop < coordContextY) {
                    // то скроллим на к-во пикселей, которое соответствует одному такту
                    window.scrollBy(0, scrollingBy);
                } else {
                    // иначе добираемся до элемента и выходим из интервала
                    window.scrollTo(0, coordContextY);
                    clearInterval(scrolling);
                }
            }, 10);


        });
    });


    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popup = document.querySelector('.popup'),
        close = document.querySelector('.popup-close');



    // Определение браузера пользователя
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    function detectBrowser() {
        var winNav = window.navigator;
        var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
        if (isIEedge) {
            return 'css';
        }
        if (isMobile.any()) {
            return 'no animation';
        }
        return 'js';
    }
    let answer = detectBrowser();

    // Выбор анимации
    if (answer == "css") {
        more.addEventListener('click', function (event) {
            overlay.style.display = 'block';
            overlay.classList.add('blur-anim');
            document.body.style.overflow = 'hidden';
        });
    } else if (answer == "js") {
        // Анимация на JS
        more.addEventListener('click', function (event) {
            overlay.style.left = 0;
            document.body.style.overflow = 'hidden';
            overlay.style.display = 'block';
            let speed = 0;
            popup.style.left = 0 + "px";
            let timer = setInterval(function () {
                speed += 20;
                popup.style.left = speed + "px";
                if (popup.offsetLeft == 700) {
                    clearInterval(timer);
                }
            }, 20);
        });
    } else {
        more.addEventListener('click', function (event) {
            overlay.classList.remove('fade');
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    // let descriptionBtn = document.querySelectorAll('.description-btn');
    // descriptionBtn.forEach(function(item){
    //     item.addEventListener('click', function(){
    //         overlay.style.display = 'block';
    //         this.classList.add('more-splash');
    //         document.body.style.overflow = 'hidden';
    //     });
    // });
});