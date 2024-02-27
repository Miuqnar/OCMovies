const url = "http://localhost:8000/api/v1/titles/"

function showModal(){
    const modalElement = document.querySelector("#modal")
    // const modalContentElement = document.querySelector("#modalContent")

    // modalContentElement.textContent = content;
    // console.log(modalContentElement)
    modalElement.style.display = 'block';
}

function hideModal(){
    const modalElement = document.querySelector("#modal")
    modalElement.style.display = 'none';
}

function setupModalListeners(bestImdbUrl){
    const detailsButton = document.querySelector("#detailsButton")
    const closeButton = document.querySelector("#closeBtn")
    const modalElement = document.querySelector("#modal")


    
    let directorsSpan = document.querySelector("#directors");
    let actorsFilm = document.querySelector("#actors")
    let writersFilm = document.querySelector("#writers")
    let genresFilm = document.querySelector("#genres")


    detailsButton.addEventListener('click', () => {
        // const content = `Résumé du Film : ${bestImdbUrl.title}\n` +
        //                 `Directeurs: ${bestImdbUrl.directors}\n` +
        //                 `Acteurs: ${bestImdbUrl.actors}\n` +
        //                 `Writers: ${bestImdbUrl.writers}\n` +
        //                 `Genres: ${bestImdbUrl.genres}`;
        
        directorsSpan.textContent = bestImdbUrl.directors;
        actorsFilm.textContent = bestImdbUrl.directors;
        writersFilm.textContent = bestImdbUrl.directors;
        genresFilm.textContent = bestImdbUrl.directors;

        showModal();

       

    });
    closeButton.addEventListener('click', hideModal);
    window.addEventListener('click', (event) => {
        if(event.target === modalElement){
            hideModal()
        }
    })
}

async function getBestImdbMovieImage(){

    const response = await fetch(url)
    if(!response.ok){
        throw new Error("ERREUR: impossible obtenir les donnes des films")
    }
    const data = await response.json()
    const results = data.results
    console.log(results)

    // trouver le filme avec le melleur score
    let bestImdbScore = -1
    let bestImdbUrl = ""

    results.forEach(movie => {
        const imdbScore = parseFloat(movie.imdb_score)
        if (imdbScore > bestImdbScore){
            bestImdbScore = imdbScore;
            bestImdbUrl = movie;
        }
    })
    if(bestImdbUrl){
        const imageElment = document.querySelector("#image")
        const titleElement = document.querySelector("#filmTitle")

        imageElment.src = bestImdbUrl.image_url
        titleElement.textContent = bestImdbUrl.title
        setupModalListeners(bestImdbUrl);
    }else{
        console.error('Filme non trouvé');
    }
    
}
getBestImdbMovieImage();


