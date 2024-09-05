
const params = {
  count: 3,
  query: "space",
  orientation: "landscape",
}

const fetchRandomImages = fetch(
  `https://api.unsplash.com/photos/random/?client_id=vIrTVrIHXTzd4-CTPyokk9vMFsNbBjS9UwH6218CAAc&count=${params.count}&query=${params.query}&orientation=${params.orientation}`
)
.then((response) => response.json())
.then((response) => {
  response.map( (data, index) => {
    var squiredImage = document.getElementById(`random-unsplash-squired-img-${index}`);
    squiredImage.setAttribute("style", `background-image: url(${data.urls.regular});background-size: cover; height:400px;background-position:center`);

    var carouselImage = document.getElementById(`random-unsplash-carousel-img-${index}`);
    carouselImage.setAttribute("style", `background:linear-gradient( 0deg, rgba(27,24,31,.3) 21.2%, rgba(0,0,0,.3) 84.8% ), url(${data.urls.regular});background-size: cover; height:100%;background-position:bottom`);
  })
})
.catch( (err) => {
  alert(`Houve um erro ao carregar as imagens do unsplash: ${err}`);
});



