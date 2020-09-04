//função troca imagem pepsi
function imgSlider(anything) {
    document.querySelector('.pepsi').src = anything;
}

//função troca fundo
function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color
}