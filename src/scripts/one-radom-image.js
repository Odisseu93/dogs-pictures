const btnTrocar = document.querySelector('#btnTrocar');
const PhotoContainer = document.querySelector('#PhotoContainer');


btnTrocar.addEventListener("click", () => {

  get('/breeds/image/random')
    .then((response) => {
      PhotoContainer.innerHTML = `<img src=${response.data.message} alt="uma foto de cachorro">`
    });

})

window.addEventListener('load', () => {
  get('/breeds/image/random')
    .then((response) => {
      PhotoContainer.innerHTML = `<img src=${response.data.message} alt="uma foto de cachorro">`
    });
});
