


function initialize() {
     const bestMovies = document.querySelector("#bestMovie");
     const category1 = document.querySelector("#category1");
     const category2 = document.querySelector("#category2");
     const category3 = document.querySelector("#category3");

     fetchAnDisplayMovies(bestMovies, bestMoviesUrl);
     fetchAnDisplayMovies(category1, category1Url);
     fetchAnDisplayMovies(category2, category2Url);
     fetchAnDisplayMovies(category3, category3Url);
 }


 function eventInfoMovie(image, movieDetails){
     // let moviesProperty = setupModalListeners(movieDetails)
     // // console.log(moviesProperty)

     // const filmDetails = {
     //      "#detailFilm_title": "title",
     //      "#detailFilm_genre": "genres",
     //      "#detailFilm_date": "date_published",
     //      "#detailFilm_score": "rated",
     //      "#detailFilm_director": "directors",
     //      "#detailFilm_time": "duration",
     //      "#detailFilm_origin": "countries",
     //      "#detailFilm_result": "reviews_from_users",
     //      "#detailFilm_summary": "description",
     //      "#detailFilm_actor": "actors"
     //  }
      
     image.addEventListener('click', () => {
          Object.entries(createFilmDetailsObject()).forEach(([selector, property]) => {
               const select = document.querySelector(selector);
               // console.log(select)
               select.textContent = movieDetails[property];
          });
          showModal();
      });
 }

async function fetchAnDisplayMovies(container, url){
     
     const response = await fetch(url);
     const data = await response.json();
     const movies = data.results

     scrollMovies(container)
   
     // const bestMovies = document.querySelector("#bestMovie");
     for (let i = (container === document.querySelector("#bestMovie")) ? 1 : 0; i < movies.length; i++) {
          // Initialise la variable i à 1 si le conteneur actuel est égal à bestMovies, sinon l'initialise à 0.

          const image = document.createElement('img');
          image.classList.add("Best_images")
          image.src = movies[i].image_url
          container.querySelector(".slider-container").appendChild(image);

          const detailFilm = await fetch(movies[i].url).then(response => response.json())
          eventInfoMovie(image, detailFilm)
          
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

