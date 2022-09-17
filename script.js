/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('Hello INFSCI 2560!');



// Task 1 - Selecting Elements
function button_one_function() {
    console.log("Button one clicked!");
    const content = document.getElementById("task1").innerText;
    console.log(content)
}

// Task 2 - Styling Tables
function button_two_function() {
    console.log("Button two clicked! -- change even row style");
    const intialState = document.getElementById("flag")
    const elementArray = document.getElementsByClassName('even')
    if (intialState.style.color != "orange") {
        for (const ele of elementArray) {
            ele.style.color = 'orange'
            ele.style.fontWeight = 'bold'
            ele.style.fontSize = '1.2em'
        }
    } else {
        for (const ele of elementArray) {
            ele.style.color = 'black'
            ele.style.fontWeight = 'normal'
            ele.style.fontSize = '1em'
        }
    }
}


//Task 3 - Modify Grocery List

function button_three_function() {
    console.log("Button three clicked!");
    // Append new material
    let newNode = document.createElement("li");
    let text = document.createTextNode("Butter");
    newNode.setAttribute('style', 'color: red')
    newNode.appendChild(text);
    newNode.className = "quote"
    const materialBlock = document.getElementById('material')
    materialBlock.appendChild(newNode)

    // Cross out a old item
    let nodeList = document.querySelectorAll('ul > li')
    nodeList[1].style.textDecoration = 'line-through'
    nodeList[3].style.textDecoration = 'line-through'
}


// Task 4 - Adding Interactivity
// Your code here

function button_four_function() {
    window.location.assign("https://www.w3schools.com")
}