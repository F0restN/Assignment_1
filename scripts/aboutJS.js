function dontClick() {
    console.log("Just pranking hahahah")
    window.alert("So tell me, smart guy, what kind of people will keep quiet forever?")
}
const dontClickAlert = document.getElementsByClassName("dont_click");
dontClickAlert[0].addEventListener('click', dontClick);