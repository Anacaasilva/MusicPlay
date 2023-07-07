const vhSize = window.innerHeight-100;

const welcome = document.getElementById ('buttomWel')
const recomendacoes = document.getElementById ('buttomReco')
const playlist = document.getElementById ('buttomPlay')

window.addEventListener('scroll', () => {
  if (window.pageYOffset < vhSize) {
    welcome.classList.add('buttomBar');
    recomendacoes.classList.remove('buttomBar');
    playlist.classList.remove('buttomBar');
  }else if (window.pageYOffset < vhSize*2) {
    recomendacoes.classList.add('buttomBar');
    welcome.classList.remove('buttomBar');
    playlist.classList.remove('buttomBar');
  }else {
    playlist.classList.add('buttomBar');
    welcome.classList.remove('buttomBar');
    recomendacoes.classList.remove('buttomBar');
  }
})