let age = prompt("Пожалуйста, введите ваш возраст");

if (age >= 18) {
    alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
}
else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
}
function filterContent() {
    let inputString = document.getElementsByTagName('input')[0].value;
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;

        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            elements[i].style.display = 'none';
        }
        else {
            elements[i].style.display = 'inline-block';
        }
    }
}