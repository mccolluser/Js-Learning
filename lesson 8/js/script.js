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
    
    anchors.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            let coordContextY = document.querySelector(item.hash).getBoundingClientRect().top;

            let scrolling = setInterval(function () {
                let scrollingBy = coordContextY / 100;
                if (scrollingBy > window.pageYOffset - coordContextY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    // то скроллим на к-во пикселей, которое соответствует одному такту
                    window.scrollBy(0, scrollingBy);
                } else {
                    // иначе добираемся до элемента и выходим из интервала
                    window.scrollTo(0, coordContextY);
                    clearInterval(scrolling);
                }
            },20);
            
            
        });
    });


    // anchors.forEach(function (item) {
    //     // каждому якорю присваиваем обработчик события
    //     item.addEventListener('click', function (e) {
    //         // убираем стандартное поведение
    //         e.preventDefault();

    //         // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    //         let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

    //         // запускаем интервал, в котором
    //         let scroller = setInterval(function () {
    //             // считаем на сколько скроллить за 1 такт
    //             let scrollBy = coordY / framesCount;

    //             // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
    //             // и дно страницы не достигнуто
    //             if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
    //                 // то скроллим на к-во пикселей, которое соответствует одному такту
    //                 window.scrollBy(0, scrollBy);
    //             } else {
    //                 // иначе добираемся до элемента и выходим из интервала
    //                 window.scrollTo(0, coordY);
    //                 clearInterval(scroller);
    //             }
    //             // время интервала равняется частному от времени анимации и к-ва кадров
    //         }, animationTime / framesCount);
    //     });
    // });


});