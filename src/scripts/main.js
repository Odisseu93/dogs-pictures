/* mobile */
const btnHamburger = document.querySelector('#iconHamburger');
const nav = document.querySelector('.header__nav__container');


/* funções para o side-menu*/
btnHamburger.addEventListener('click', () => {
  mudarIcone();
  nav.classList.toggle('visible-nav')
});


function mudarIcone() {
  const iconHamburgerScr = './src/assets/img/icon-hamburger.svg';
  const iconCloseSrc = './src/assets/img/icon-close.svg';
  const verificaSrcImg = new RegExp (iconHamburgerScr);
  
  if (verificaSrcImg.test(btnHamburger.src)) return btnHamburger.src = iconCloseSrc
 
btnHamburger.src = iconHamburgerScr

}
/*------------------------------------------------------------------------*/