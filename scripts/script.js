
// Navigation
function navigateToIndex() {
    window.location.assign("./index.html")
}
const toIndex = document.getElementById("index");
toIndex.addEventListener('click', navigateToIndex);

function navigateToStory() {
    window.location.assign("./story.html")
}
const toStory = document.getElementById("story");
toStory.addEventListener('click', navigateToStory);

function navigateToSeries() {
    window.location.assign("./series.html")
}
const toSeries = document.getElementById("series");
toSeries.addEventListener('click', navigateToSeries);

function navigateToEquipment() {
    window.location.assign("./equipment.html")
}
const toEquipment = document.getElementById("equipment");
toEquipment.addEventListener('click', navigateToEquipment);

function navigateToAbout() {
    window.location.assign("./about.html")
}
const toAbout = document.getElementById("about");
toAbout.addEventListener('click', navigateToAbout);

// Current Page Indicate
window.onload = function navbar_item_function() {
    let pathname = window.location.pathname.split("/")
    let currentPage = pathname[pathname.length - 1].split(".")[0];
    let element = document.getElementById(currentPage);
    element.style.border = 'solid #fff'
    element.style.borderRadius = '10px'
}
// const currentPageIndicate = document.getElementsByClassName("header");
// currentPageIndicate[0].addEventListener('onload', navbar_item_function)