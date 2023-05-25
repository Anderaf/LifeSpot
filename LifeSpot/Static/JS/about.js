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
function getReview() {
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
}