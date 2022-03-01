window.addEventListener('DOMContentLoaded', function () {
    'use ctrict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    //////////////////////Timer

    let deadLine = '2022-06-24';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), //узнаем сколько осталось от нышнего времени до дедлайна
            seconds = Math.floor((t / 1000) % 60), //Превращаем миллисекунды в секунды
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        // days = Math.floor((t/(1000*60*60*24))), //Дни
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById('timer'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            };
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadLine);

    //modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; //нельзя прокручивать страницу при открытии модального окна
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    })

    let age = document.getElementById('age');

    function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
    // showUser.apply(age, ['Max', 'Alex']);

    ////Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.addEventListener('submit', function(event) {
                event.preventDefault();
                form.appendChild(statusMessage);
                
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // говорим серверу что отправим ему файлы из формы
            //работаем через атрибут name input
            let formData = new FormData(form); // Получить все данные которые ввел пользователь во все инпуты формы
            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            request.send(json); //отправляем данные на сервер

            request.addEventListener('readystatechange', function() {
                console.log(request);
                if(request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else  if(request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
            
            for(let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });


        let formContact = document.querySelector('#form'),
            inputContact = formContact.getElementsByTagName('input');

        formContact.addEventListener('submit', function(event) {
            event.preventDefault();
            formContact.appendChild(statusMessage);
            
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // говорим серверу что отправим ему файлы из формы
        //работаем через атрибут name input
        let formData = new FormData(form); // Получить все данные которые ввел пользователь во все инпуты формы
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json); //отправляем данные на сервер

        request.addEventListener('readystatechange', function() {
            console.log(request);
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else  if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        
        for(let i = 0; i < inputContact.length; i++) {
            inputContact[i].value = '';
        }
    });




});