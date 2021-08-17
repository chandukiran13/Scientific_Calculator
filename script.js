
let inBar = document.getElementById("Input")
function num(num) {
    var text = inBar.value;
    inBar.value += num;
}

function reset() {
    inBar.value = "";
}
function del() {
    var text = inBar.value;
    inBar.value = text.substring(0,text.length-1);
}

function calculate() {
    var text = inBar.value;
    inBar.value = eval(text);
}

function calc_sqrt() {
    var text = inBar.value;
    inBar.value = (Math.sqrt(eval(text)))
}

function calc_percentage(){
    var text = inBar.value;
    inBar.value = eval(text)/100;
}

function calc_cos() {
    var text = inBar.value;
    inBar.value = Math.cos(eval(text));
}

function calc_sin() {
    var text = inBar.value;
    inBar.value = Math.sin(eval(text));
}

function calc_tan() {
    var text = inBar.value;
    inBar.value = Math.tan(eval(text));
}
function calc_exp() {
    var text = inBar.value;
    inBar.value = Math.exp(eval(text));
}


function calc_log() {
    var text = inBar.value;
    inBar.value = Math.log(eval(text));
}

function invert() {
    var text = inBar.value;
    inBar.value = 1/(eval(text));
}