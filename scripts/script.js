
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
function navbar_item_function() {
    let pathname = window.location.pathname.split("/")
    let currentPage = pathname[pathname.length - 1].split(".")[0];
    let element = document.getElementById(currentPage);
    element.style.border = 'solid #fff'
    element.style.borderRadius = '10px'
}

navbar_item_function()
const currentPageIndicate = document.getElementsByClassName("header");
currentPageIndicate[0].addEventListener('DOMContentLoaded', navbar_item_function)

// 


// const navbarItem = document.getElementsByClassName("navbar_item");
// navbarItem.addEventListener('click', navbar_item_function)

// // Task 1 - Selecting Elements
// function button_one_function() {
//     console.log("Button one clicked!");
//     const content = document.getElementById("task1").innerText;
//     console.log(content)
// }

// // Task 2 - Styling Tables
// function button_two_function() {
//     console.log("Button two clicked! -- change even row style");
//     const intialState = document.getElementById("flag")
//     const elementArray = document.getElementsByClassName('even')
//     if (intialState.style.color != "orange") {
//         for (const ele of elementArray) {
//             ele.style.color = 'orange'
//             ele.style.fontWeight = 'bold'
//             ele.style.fontSize = '1.2em'
//         }
//     } else {
//         for (const ele of elementArray) {
//             ele.style.color = 'black'
//             ele.style.fontWeight = 'normal'
//             ele.style.fontSize = '1em'
//         }
//     }
// }


// //Task 3 - Modify Grocery List

// function button_three_function() {
//     console.log("Button three clicked!");
//     // Append new material
//     let newNode = document.createElement("li");
//     let text = document.createTextNode("Butter");
//     newNode.setAttribute('style', 'color: red')
//     newNode.appendChild(text);
//     newNode.className = "quote"
//     const materialBlock = document.getElementById('material')
//     materialBlock.appendChild(newNode)

//     // Cross out a old item
//     let nodeList = document.querySelectorAll('ul > li')
//     nodeList[1].style.textDecoration = 'line-through'
//     nodeList[3].style.textDecoration = 'line-through'
// }


// // Task 4 - Adding Interactivity
// // Your code here

// function button_four_function() {
//     window.location.assign("https://www.w3schools.com")
// }