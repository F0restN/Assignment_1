console.log('This is Drake speaking, DO U COPY?');

function main_btn_function() {
    window.location.assign("./story.html")
}
const viewMore = document.getElementById("main-btn");
viewMore.addEventListener('click', main_btn_function);
