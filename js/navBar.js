const vwSize = window.innerWidth;
const vhSize = window.innerHeight - 100;

const welcome = document.getElementById('buttomWel');
const recomendacoes = document.getElementById('buttomReco');
const playlist = document.getElementById('buttomPlay');

const container = document.getElementsByClassName('containerNav');

const show = () => {
  if (vwSize > 430) return

  console.log(vwSize);
  if (welcome.classList.contains('buttomBar')) {
    container[0].style.display = 'flex';
    container[1].style.display = 'none';
    container[2].style.display = 'none';
  }else if (recomendacoes.classList.contains('buttomBar')) {
    container[1].style.display = 'flex';
    container[0].style.display = 'none';
    container[2].style.display = 'none';
  }else {
    container[2].style.display = 'flex';
    container[0].style.display = 'none';
    container[1].style.display = 'none';
  }
}

window.addEventListener('scroll', () => {
  if (window.pageYOffset < vhSize) {
    welcome.classList.add('buttomBar');
    recomendacoes.classList.remove('buttomBar');
    playlist.classList.remove('buttomBar');
  } else if (window.pageYOffset < vhSize * 2) {
    recomendacoes.classList.add('buttomBar');
    welcome.classList.remove('buttomBar');
    playlist.classList.remove('buttomBar');
  } else {
    playlist.classList.add('buttomBar');
    welcome.classList.remove('buttomBar');
    recomendacoes.classList.remove('buttomBar');
  }


  show()
})

show()