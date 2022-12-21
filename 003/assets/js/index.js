var btnMenu = document.getElementById('btnMenu')
var fundo = document.getElementById('fundo')
var ul = document.getElementsByTagName('ul')[0]

btnMenu.addEventListener('click', () => {
    ul.style.display = 'block'
    fundo.style.display = 'block'
})

fundo.addEventListener('click', () => {
    ul.style.display = 'none'
    fundo.style.display = 'none'
})

var el = ''
document.addEventListener('click', (e) => {
    el = e.target.id
})

setInterval(() => {
    var tamanhoTela = window.visualViewport.width
    if(tamanhoTela > 700) {
        ul.style.display = 'flex'
        fundo.style.display = 'none'
        el = ''

    } else if(tamanhoTela < 700 && el != 'btnMenu') {
        ul.style.display = 'none'
    }
}, 10)