function button_1() {
    const ele = document.getElementsByClassName("main_section_series");
    ele[0].style.fontWeight = 'bold'
    ele[0].style.fontSize = "20px"
}
const button1View = document.getElementById("button_1")
button1View.addEventListener('click', button_1)

function button_2() {
    const ele = document.getElementsByClassName("main_section_series");
    ele[0].style.color = 'blue'
    // ele[0].style.fontSize = "20px"
}
const button2View = document.getElementById("button_2")
button2View.addEventListener('click', button_2)