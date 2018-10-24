let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function postData() {
        return new Promise((resolv, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4){
                    resolv(JSON.parse(request.response));
                } else
                 if (request.readyState === 4 && request.status == 200) {
                    resolv(JSON.parse(request.response));
                } else {
                    reject("Что-то пошло не так!");
                }
            });
        });
    }
    postData()
        .then(data => inputUsd.value = inputRub.value / data.usd)
        .catch(error => inputUsd.value = error);
});