function navbar_item_function() {
    let pathname = window.location.pathname.split("/")
    let currentPage = pathname[pathname.length - 1].split(".")[0];
    debugger
    let element = document.getElementById(currentPage);
    element.style.border = 'solid #fff'
    element.style.borderRadius = '10px'

}
navbar_item_function()
const currentPageIndicate = document.getElementsByClassName("header");
currentPageIndicate[0].addEventListener('DOMContentLoaded', navbar_item_function)