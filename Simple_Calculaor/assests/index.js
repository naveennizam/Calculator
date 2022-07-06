var out = document.querySelector('#main')
const bleep = new Audio('click.mp3')
// bleep.src="click.mpeg"

function display(num) {
    out.value += num
    bleep.play()
}
function equal() {
    try {
        out.value = eval(out.value);
    }
    catch (error) {
        alert('Invalid')
    }
}
function Clear() {
    out.value = "";
}
function del() {
    out.value = out.value.slice(0, -1)
}
function darkMode() {
    var element = document.querySelector('.container');
    element.classList.toggle("darkmode");
}