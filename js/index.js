async function fetchMovies(category){
     const reponse = await fetch(filmsUrl + category)
     const movies = await reponse.json()
     const data = movies.results

    
     const detailFilm = {
          movies: data,
          moviesCategory: []
     }
     for (let i = 0; i < data.length; i++){ 

          let movieData = await fetch(data[i].url).
          then(response => response.json()) 
          detailFilm.moviesCategory.push(movieData)
     }

     return detailFilm
}

function bestFilm(data){
     const imageElment = document.querySelector("#image")
     const titleElement = document.querySelector("#filmTitle")

     imageElment.src = data.image_url
     titleElement.textContent = data.title
}


 function eventInfoMovie(image, movieDetails){
      
     image.addEventListener('click', () => {
          Object.entries(createFilmDetailsObject()).forEach(([selector, property]) => {
               const select = document.querySelector(selector);
               select.src = movieDetails[property];
               select.textContent = movieDetails[property];
          });
          showModal();
      });
 }


function initialize() {
     const bestMovies = document.querySelector("#bestMovie");
     const category1 = document.querySelector("#category1");
     const category2 = document.querySelector("#category2");
     const category3 = document.querySelector("#category3");

     fetchMovies(bestMoviesUrl).then(data => {
          bestFilm(data.movies[0])
          DisplayMovies(bestMovies, data.moviesCategory.slice(1))
          setupModalListeners(data.moviesCategory[0])
     })
     
     fetchMovies(category1Url).then(data => {
          DisplayMovies(category1, data.moviesCategory)
     })
     fetchMovies(category2Url).then(data => {
          DisplayMovies(category2, data.moviesCategory)
     })
     fetchMovies(category3Url).then(data => {
          DisplayMovies(category3, data.moviesCategory)
     })

}


function DisplayMovies(container, movies){

     scrollMovies(container)

     for (let i = 0; i < movies.length; i++) {
          const image = document.createElement('img');
          image.classList.add("Best_images");
          image.src = movies[i].image_url;
          container.querySelector(".slider-container").appendChild(image);
          eventInfoMovie(image, movies[i])
     }

}

function scrollMovies(container) {
     
     const leftArrow = container.querySelector(".leftArrow");
     const rightArrow = container.querySelector(".rightArrow");
     const sliderContainer = container.querySelector(".slider-container")
     
     if (leftArrow && rightArrow && sliderContainer) {
          rightArrow.addEventListener('click', () => {
               sliderContainer.scrollLeft += 240;
          });
          leftArrow.addEventListener('click', () => {
               sliderContainer.scrollLeft -= 240;
          });
     }
 }

initialize()

