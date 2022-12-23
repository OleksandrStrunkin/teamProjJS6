const darkT = document.querySelector('.svg_dark');
const lightT = document.querySelector('.svg_light');
const body = document.querySelector('body');
const title = document.querySelector('h2');

darkT.addEventListener('click', onDark);
lightT.addEventListener('click', onLight);

function onDark(e) {
   e.preventDefault();
    body.style.background = 'black'
    darkT.style.fill = 'black'
    lightT.style.fill = 'white'
    title.style.fill = 'white'
}

function onLight(e) {
    e.preventDefault();
    body.style.background = 'white'
    darkT.style.fill = 'white'
    lightT.style.fill = 'black'
    title.style.fill = 'black'
}