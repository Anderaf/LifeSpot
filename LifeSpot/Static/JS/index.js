/*let session = {
    'startDate': new Date().toLocaleString(),
    'userAgent': window.navigator.userAgent,
    'userAge': prompt("Пожалуйста, введите ваш возраст?")
}*/
/*window.sessionStorage.setItem('startDate', new Date().toLocaleString())
window.sessionStorage.setItem('userAgent', window.navigator.userAgent)*/
/*window.sessionStorage.setItem('userAge', prompt("Пожалуйста, введите ваш возраст?"))*/
/*function handleSession() {
    //session.set("userAgent", window.navigator.userAgent)
    //session.set("startDate", new Date().toLocaleString())

    return session;
}*/
/*function checkAge() {
    if (window.sessionStorage.getItem('userAge') >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}*/
let checker = function (newVisit) {
    if (window.sessionStorage.getItem("userAge") >= 18) {
        // Добавим проверку на первое посещение, чтобы не показывать приветствие
        // лишний раз
        if (newVisit) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        }
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}
let sessionLog = function() {
    console.log('Начало сессии: ' + window.sessionStorage.getItem('startDate'))
    console.log('Даныне клиента: ' + window.sessionStorage.getItem('userAgent'))
    console.log('Возраст пользователя: : ' + window.sessionStorage.getItem('userAge'))
}
/*let session = new Map();
session.set("userAgent", window.navigator.userAgent)
session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

if (session.get("age") >= 18) {
    let startDate = new Date().toLocaleString();

    alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
    session.set("startDate", startDate)
}
else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
}

for (let result of session) {
    console.log(result)
}*/
function filterContent() {
    let inputString = document.getElementsByTagName('input')[0].value;
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;

        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            elements[i].style.display = 'none';
        }
        else {
            elements[i].style.display = 'inline-block';
        }
    }
}
function handleSession() {

    // Проверяем дату захода и проставляем, если новый визит
    if (window.sessionStorage.getItem("startDate") == null) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }

    // Проверяем userAgent и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAgent") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }

    // Проверяем возраст и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAge") == null) {
        let input = prompt("Пожалуйста, введите ваш возраст?");
        window.sessionStorage.setItem("userAge", input)

        /* Возраст отсутствовал в sessionStorage. Значит, это первый визит пользователя, и
         при прохождении проверки на возраст он увидит приветствие*/
        checker(true)
    } else {

        /* Пользователь заходит не первый раз, приветствие не показываем. */
        checker(false)
    }

    /* Вызываем переданную в качестве колл-бэка функцию логирования.
        передавать в качестве коллбека не обязательно, можно вызвать и напрямую, но мы добавили для повторения.
    */
    sessionLog()
}