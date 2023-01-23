let css = document.querySelector('h3');
let col1 = document.querySelector('.color1');
let col2 = document.querySelector('.color2');
let body = document.getElementById('bg')

function LineargradientColor(){
  body.style.background = "linear-gradient(to right, "+col1.value+", "+col2.value+")";
  css.textContent = body.style.background
}

col1.addEventListener("input",LineargradientColor);
col2.addEventListener("input",LineargradientColor);
