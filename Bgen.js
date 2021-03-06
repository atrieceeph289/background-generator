var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var rand = document.querySelector(".random")
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
    rand.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
    css.textContent = body.style.background + ";"
}

function randBackground() {
    color1.value = '#'+Math.random().toString(16).substr(2,6);
    color2.value = '#'+Math.random().toString(16).substr(2,6);
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
rand.addEventListener("click", randBackground);
window.onload = setGradient(), randBackground();

