/*function getReview() {
    let name = prompt("Введите своё имя")
    if (name == null) {
        return
    }
    let reviewText = prompt("Введите комментарий")
    if (reviewText == null) {
        return
    }
    let date = new Date().toLocaleString()

    let elem = document.getElementsByClassName("reviews")[0]
    elem.InnerHtml += `<div class="review-text">` +
        `<p><i><b>${name}</b> ${date}</i><p>` +
        `<p>${reviewText}</p>` +
        `</div>`;
}*/
/*function getReview() {
    let review = {}

    review["userName"] = prompt("Как вас зовут ?")
    if (review["userName"] == null) {
        return
    }

    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }

    review["date"] = new Date().toLocaleString()

    writeReview(review)
}
const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}*/
function Comment() {
    // Запросим имя
    this.author = prompt("Как вас зовут ?")
    if (this.author == null) {
        this.empty = true
        return
    }

    // Запросим текст
    this.text = prompt("Оставьте отзыв")
    if (this.text == null) {
        this.empty = true
        return
    }

    // Сохраним текущее время
    this.date = new Date().toLocaleString()
}
function addComment() {

    let comment = new Comment()

    if (comment.empty) {
        return;
    }

    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if (enableLikes) {
        let review = Object.create(comment)
        review.rate = 0;

        writeReview(review)
    } else {
        writeReview(comment)
    }
}
const writeReview = review => {
    let likeCounter = '';

    if (review.hasOwnProperty('rate')) {

        let commentId = Math.random();
        likeCounter += '<button id="' + commentId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`
    }
    document.getElementsByClassName('reviews')[0].innerHTML += ' <div class="review-    text">\n' + `<p> <i> <b>${review['author']}</b> ${review['date']}${likeCounter}</i></p>` + `<p>${review['text']}</p>` + '</div>';
}
function addLike(id) {
    let element = document.getElementById(id);

    let array = element.innerText.split(' ')

    let resultNum = parseInt(array[array.length - 1], 10);

    resultNum += 1

    array[array.length - 1] = `${resultNum}`

    element.innerText = array.join(' ')
}

var currentImg = 0;
function changeSlide(n) {
    var imgs = document.querySelectorAll('.slider img');
    var dots = document.querySelectorAll('.dot');
    console.log(imgs)
    console.log(dots)
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }

    currentImg = n;

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}
function nextSlide() {
    var imgs = document.querySelectorAll('.slider img');
    if (currentImg < imgs.length - 1) {
        changeSlide(currentImg + 1)
    }
}
function previousSlide() {
    if (currentImg > 0) {
        changeSlide(currentImg - 1)
    }
}